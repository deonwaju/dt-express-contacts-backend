const mongoose = require("mongoose");
const { constants } = require("../constants");

const contactSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: constants.USER,
    },
    name: {
        type: String,
        required: [true, constants.NAME_ERROR]
    },
    email: {
        type: String,
        required: [true, constants.EMAIL_ERROR]
    },
    phone: {
        type: String,
        required: [true, constants.PHONE_ERROR]
    }
 }, {
    timestamps: true
});

module.exports = mongoose.model(constants.CONTACTS , contactSchema)