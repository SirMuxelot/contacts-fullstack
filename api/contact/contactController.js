const Contact = require('./contactModel');

exports.index = (req, res) => {
    Contact.get((err, contacts) => {
        console.log("hello world");
        if(err) {
            res.json({
                status: "error",
                message: err
            })
        }
        else {
            res.json({
                status: "success",
                message: "Contacts successfully loaded",
                data: contacts
            })
        }
    });
};

exports.create = (req, res) => {
    let contact = new Contact();
    contact.salutation = req.body.salutation;
    contact.firstname = req.body.firstname;
    contact.lastname = req.body.lastname;
    contact.email = req.body.email;
    contact.phone = req.body.phone;
    contact.postCode = req.body.postCode;
    contact.country = req.body.country;
    contact.street = req.body.street;
    contact.created = req.body.created;
    contact.updated = req.body.updated;

    contact.save((err) => {
        if(err) {
            res.json({
                status: "error",
                message: err
            });
        }
        else {
            res.json({
                status: "success",
                message: "Contact successfully created",
                data: contact
            });
        }
    });
};

exports.detail = (req, res) => {
    Contact.findById(req.params.contact_id, (err, contact) => {
        if(err) {
            res.json({
                status: "error",
                message: err
            });
        }
        else {
            res.json({
                status: "success",
                message: "Contact successfully loaded",
                data: contact
            });
        }
    });
};

exports.update = (req, res) => {
    Contact.findById(req.params.contact_id, (err, contact) => {
        if(err) {
            res.json({
                status: "error",
                message: err
            });
        } else {
            contact.salutation = req.body.salutation;
            contact.firstname = req.body.firstname;
            contact.lastname = req.body.lastname;
            contact.email = req.body.email;
            contact.phone = req.body.phone;
            contact.postCode = req.body.postCode;
            contact.country = req.body.country;
            contact.street = req.body.street;
            contact.created = req.body.created;
            contact.updated = req.body.updated;

            contact.save((err) => {
                if(err) {
                    res.json({
                        status: "error",
                        message: err
                    });
                }
                else {
                    res.json({
                        status: "success",
                        message: "Contact successfully updated",
                        data: contact
                    });
                }
            });
        }
    });
};

exports.delete = (req, res) => {
    Contact.deleteOne({
        _id: req.params.contact_id
    }, (err, contact) => {
        if(err) {
            res.json({
                status: "error",
                message: err
            });
        }
        else {
            res.json({
                status: "success",
                message: "Contact successfully deleted",
            });
        }
    });
};