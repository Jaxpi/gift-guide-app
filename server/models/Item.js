const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const itemSchema = new Schema({
    itemText: {
        type: String,
        unique: true
    }

})
const Item = model('Item', itemSchema);

module.exports = Item;