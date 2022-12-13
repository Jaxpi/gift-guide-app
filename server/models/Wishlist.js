const { Schema, model } = require('mongoose');

const wishlistSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },

    userId: {
        type: String,
        required: true,
        //unique: true,
        trim: true,
        // type: Schema.Types.ObjectId,
        // ref: 'User',
    },
    items: [
        {
            type: String,
            //required: true
            unique: false
        }
    ]

    // friends: [
    //     {
    //         type: String,
    //         ref: 'User'
    //     }
    // ],
});

const Wishlist = model('Wishlist', wishlistSchema);

module.exports = Wishlist;