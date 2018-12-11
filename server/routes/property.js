
const express = require("express");
const router = express.Router({ mergeParams: true });

const {
    createProperty,
    getSelectedProperty
} = require("../handlers/properties");

router.route("/create").post(createProperty);

router.route("/get").get(getSelectedProperty)

module.exports = router;