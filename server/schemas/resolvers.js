const { AuthenticationError } = require("apollo-server-express");
const { User, Wishlist } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
    Query: {
      me: async (parent, args, context) => {
        if (context.user) {
          return User.findOne({_id: context.user._id}).select('-__v -password');
        }
        //throw new AuthenticationError("Log In to Continue");
      },
      users: async () => {
        return User.find()
        .populate('wishlists');
      },
      user: async (parent, { userId }) => {
        return User.findOne({ _id: userId })
        .populate('wishlists');
      },
      wishlists: async (parent, { username }) => {
        const params = username ? { username } : {};
        return Wishlist.find(params);
      },
      wishlist: async (parent, { wishlistId }) => {
        return Wishlist.findOne({ _id: wishlistId });
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
          
      createWishlist: async (parent, { title, friends, items }, context) => {
        if (context.user) {
          const myFriends = friends.length? friends.split(", "): [];
          console.log(myFriends)
          const wishlist = await Wishlist.create({
            title,
            userId: context.user._id,
            friends: myFriends,
            items: []
          });
          
          await User.findOneAndUpdate(
            { _id: context.user._id },
            { $addToSet: { wishlists: wishlist._id } }
            );
            
            return wishlist;
            
        }
        throw new AuthenticationError("Log In to Continue");
      },
      
      updateWishlist: async (parent, { wishlistId, title }, context) => {
        if (context.user) {
          await Wishlist.findOneAndUpdate(
            { _id: wishlistId },
            { $set: { title: title }}
            )
            return wishlist;
          }
          // throw new AuthenticationError("Log In to Continue");
        },
        
        // deleteWishlist: async (parent, { wishlistId }, context) => {
          //   if (context.user) {
            //     const wishlist = await Wishlist.findOneAndDelete({
              //       _id: wishlistId,
              //       userId: context.user.username,
              //     });
              
              //     await User.findOneAndUpdate(
                //       { _id: context.user._id },
                //       { $pull: { wishlists: wishlist._id } }
                //     );
                
                //     return wishlist;
                //   }
                
                
  deleteWishlist: async (parent, { wishlistId }, context) => {
    if (context.user) {
      await User.findOneAndUpdate(
        { _id: context.user._id },
        { $pull: { wishlists: wishlistId }},
        { new: true }
        );
        return Wishlist.findOneAndDelete(
          { _id: wishlistId }
          )
        }
        //throw new AuthenticationError("Log In to Continue");
      },
      addItem: async (parent, { wishlistId, item }, context) => {
        console.log("LOOK AT ME")
        if (context.user) {
          return Wishlist.findOneAndUpdate(
            { _id: wishlistId },
            { $addToSet: { items: item }},
            { new: true }
          )
        }
        throw new AuthenticationError('You need to be logged in!');
      },
      deleteItem: async (parent, { wishlistId, item }, context) => {
        if (context.user) {
          return Wishlist.findOneAndUpdate(
            { _id: wishlistId },
            { $pull: { items: item }},
            { new: true }
          )
        }
        throw new AuthenticationError('You need to be logged in!');
      }
    },
  };

module.exports = resolvers;