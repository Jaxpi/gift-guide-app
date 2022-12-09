const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    wishlists: [Wishlist]
  }

  type Friend {
    _id: ID
    friendId: [User]
  }

  type Wishlist {
    _id: ID
    title: String!
    items: [Item]
    userId: String!
    friends: [User]
  }

  type Item {
    _id: ID
    itemText: String!
  }

  type Auth {
    token: ID!
    user: User
  }
  
  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    createWishlist(title: String!, items: [String], friends: [String]): User
    updateWishlist(wishlistId: ID!, title: String!): Wishlist
    deleteWishlist(wishlistId: ID!): User
    addItemToWishlist(wishlistId: ID!, itemText: String!): Wishlist
    removeItemFromWishlist(itemId: ID!): Wishlist
  }
`;

module.exports = typeDefs;