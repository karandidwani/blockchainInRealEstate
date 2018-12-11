require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const errorHandler = require("./handlers/error");
const authRoutes = require("./routes/auth");
const messagesRoutes = require("./routes/messages");
const propertyRoutes = require("./routes/property")
const { loginRequired, ensureCorrectUser } = require("./middleware/auth");
const db = require('./models')

const PORT = 8081;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/api/auth", authRoutes);
app.use("/api/users/:id/messages",
    loginRequired,
    ensureCorrectUser,
    messagesRoutes);

app.use("/api/users/:id/properties",
    loginRequired,
    ensureCorrectUser,
    propertyRoutes);

app.use("/api/properties/:id",
    propertyRoutes);

app.get("/api/messages", loginRequired, async function(req, res, next) {
    try {
        let messages = await db.Message.find()
            .sort({ createdAt: "desc" })
            .populate("user", {
                username: true,
                profileImageUrl: true
            });
        return res.status(200).json(messages);
    } catch (err) {
        return next(err);
    }
});

app.get("/api/properties", async function(req,res,next){
    try{
        console.log()
        let properties = await db.Property.find()
            .sort({createdAt: "desc"})
        return res.status(200).json(properties);
    }catch (err) {
        return next(err);
    }
})


app.use(function(req,res,next){
   let err = new Error("Not Found");
   err.status = 404;
   next(err);
});

app.use(errorHandler);

app.listen(PORT, function(){
    console.log(`Server is starting on port ${PORT}`);
});