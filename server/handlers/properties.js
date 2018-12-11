const db = require("../models");
var Property = require('../models/property')


exports.createProperty = async function(req, res, next) {
    try {
        console.log(req.body)
        var property = new Property({
            owner : req.body.owner,
            transactionHash : req.body.transactionHash,
            description : req.body.description,
            forSale : req.body.forSale,
            sellingPrice : req.body.sellingPrice,
            measurement : {
                length : req.body.measurement.length,
                breadth : req.body.measurement.breadth
            },
            address : {
                street : req.body.address.street,
                city : req.body.address.city,
                state : req.body.address.state,
                zip : req.body.address.zip,
                country : req.body.address.country
            }
        });

        await property.save(function(error,property){
            if(error){
                return next(err);
            }
        })

        let foundUser = await db.User.findById(req.params.id);
        foundUser.owns.push(property.id);
        await foundUser.save();

        let foundProperty = await db.Property.findById(property._id).populate("owner");
        return res.status(200).json(foundProperty)

    } catch (err) {
        return next(err);
    }
};

exports.getSelectedProperty = async function(req,res, next){
    try{
        console.log("property_id  is ", req.params.id)
        var propertyFetched = await db.Property.find({_id:req.params.id});
        console.log("property is ",(propertyFetched))
        return res.status(200).json(propertyFetched);
    }catch (e) {
        return next(e);
    }
}