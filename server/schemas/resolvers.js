const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
    Query: {
      me: async (parent, args, context) => {
        if (context.user) {
          return User.findOne({_id: context.user._id}).select('-__v -password');
        }
        throw new AuthenticationError("Log In to Continue");
      },
    },
  
    Mutation: {
      addUser: async (parent, { username, email, password }) => {
        const user = await User.create({ username, email, password });
        const token = signToken(user);
        return { token, user };
      },
      
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
  
        if (!user) {
          throw new AuthenticationError("No user found with this email address");
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError("Incorrect credentials");
        }
  
        const token = signToken(user);
  
        return { token, user };
      },
  
      createWishlist: async (parent, { newWishlist }, context) => {
        if (context.user) {
          try {
            return User.findOneAndUpdate(
              { _id: context.user._id },
              {
                $push: { wishlists: newWishlist },
              },
              {
                new: true,
              }
            )
          } catch(error) {
            console.log(error)
          }
        }
        throw new AuthenticationError("Log In to Continue");
      },
  
      updateWishlist: ({wishlistId, input}) => {
        if (!wishlists[id]) {
          throw new Error('no wishlist exists with id ' + id);
        }
        // This replaces all old data, but some apps might want partial update.
        wishlist[id] = input;
        return new Message(id, input);
      },

      deleteWishlist: async (parent, {wishlistId}, context) => {
        if (context.user) {
          return User.findOneAndUpdate(
            { _id: context.user._id },
            {
              $pull: { wishlists: {wishlistId} },
            },
            {
              new: true,
            }
          );
        }
        throw new AuthenticationError("Log In to Continue");
      },
    },
  };

module.exports = resolvers;