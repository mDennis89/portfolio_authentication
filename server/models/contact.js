let mongoose = require('mongoose');

//create a model class
let contactsModel = mongoose.Schema({
    name: String,
    'contact number': String,
    Email: String,
},
{
    collection: "Contacts"
});

module.exports = mongoose.model('Contacts', contactsModel);