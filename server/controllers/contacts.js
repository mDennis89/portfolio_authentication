let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//create a reference to the model
let Contact = require('../models/contact');

module.exports.displayContactList = (req, res, next) => {
    Contact.find()
      .sort({ name: 1 })
      .then((result) => {
        console.log(result);
        res.render('contact/list', { title: 'Contacts', ContactList: result });
      })
      .catch((err) => {
        console.error(err);
        res.send(err);
      });
    }

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;
  
    Contact.findById(id)
      .then((contactToEdit) => {
        // Show the edit view
        res.render('contact/edit', { title: 'Edit Contact', contact: contactToEdit });
      })
      .catch((err) => {
        console.log(err);
        res.end(err);
      });
    }

module.exports.processEditPage = async (req, res, next) => {
        try {
            const id = req.params.id;
  
            const updateContact = {
            name: req.body.name,
            'contact number': req.body['contact number'],
            email: req.body.email
        };
  
        await Contact.updateOne({ _id: id }, updateContact);
        res.redirect('/contact-list');
        } catch (err) {
        console.log(err);
        res.end(err);
        }
    
    }

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;
  
    Contact.deleteOne({ _id: id })
      .then(() => {
        // Document successfully deleted
        // Refresh the contact list
        res.redirect('/contact-list');
      })
      .catch(err => {
        console.log(err);
        res.end(err);
      });
  }



