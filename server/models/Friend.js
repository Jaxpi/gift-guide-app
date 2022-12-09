const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const friendSchema = new Schema({
    friendId: [{
        type: String,
        ref: 'User'
    }]
})
const Friend = model('Friend', friendSchema);

module.exports = Friend;
