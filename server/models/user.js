const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    firstname : {
        type : String,
        required : true,
        trim : true
    },
    lastname : {
        type : String,
        required : true,
        trim : true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profileImageUrl: {
        type: String,
    },
    owns : [{
        property : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Property'
        },
        // contactedBy : [
        //     {
        //         intendedBuyer : {
        //             type : mongoose.Schema.Types.ObjectId,
        //             ref : 'User'
        //         },
        //         responded : {
        //             type : Boolean,
        //             default :false
        //         },
        //         repliedWith : {
        //             type : Boolean,
        //             default :false
        //         }
        //     }
        // ]

    }],

    favorite : [{
        propertyId : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Property'
        }
    }],

    // If a person is interested in a property, he could mark it for later evaluation
    contactedOwner : [{
        propertyId : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Property'
        },
        ownerResponded : {
            type :Boolean,
            default : false
        },
        ownerApproved : {
            type :Boolean,
            default : false
        },
        ownersContact : {
            type : String,
            default : null
        }
    }],
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message"
        }
    ]

});

userSchema.pre("save", async function(next){
    try {
        if(!this.isModified("password")){
            return next();
        }
        let hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword
        return next();
    } catch (e) {
        next(e);
    }
})

userSchema.methods.comparePassword = async function(candidatepassword, next){
    try {
        let isMatch = await bcrypt.compare(candidatepassword, this.password);
        return isMatch;
    } catch (e){
        return next(err);
    }
}


const User = mongoose.model("User", userSchema);

module.exports = User;