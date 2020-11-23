const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    salutation: {
        type: String,
        enum: [ 'm', 'w', 'd' ],
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: false
    },
    postCode: {
        type: String,
        required: false
    },
    country: {
        type: String,
        required: false
    },
    street: {
        type: String,
        required: false
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date,
        default: Date.now
    }
});

let Contact = module.exports = mongoose.model('contact', contactSchema);
module.exports.get = (callback, limit) => {
    Contact.find(callback).limit(limit);
}