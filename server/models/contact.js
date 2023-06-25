let mongoose = require('mongoose');

//create a model class
let contactsModel = mongoose.Schema({
    name: String,
    'contact number': String,
    Email: String,
},
{
    collection: "contacts"
});

module.exports = mongoose.model('Contact', contactsModel);