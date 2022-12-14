const { Schema, model } = require("mongoose");

const wishlistSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },

  userId: {
    type: String,
    required: true,
    trim: true,
  },
  items: [
    {
      type: String,
      unique: false,
    },
  ],

  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Wishlist = model("Wishlist", wishlistSchema);

module.exports = Wishlist;
