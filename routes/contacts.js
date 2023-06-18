let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to our Contact Model
let Contact = require('../models/contact');

/*Get Route for the Contact List page - READ Operation */
router.get('/', (req, res, next) => {
    Contact.find((err, contactList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('contact', {title: 'Contacts List', ContactsList: contacstList})
        }
    });
});

module.exports = router;