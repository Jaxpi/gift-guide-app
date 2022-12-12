const { Schema, model } = require('mongoose');

const wishlistSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    items: [
        {
            type: String,
            unique: true,
            trim: true,
        },
    ],
    userId: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },

    friends: [
        {
            type: String,
            ref: 'User'
        }
    ],
});

const Wishlist = model('Wishlist', wishlistSchema);

module.exports = Wishlist;