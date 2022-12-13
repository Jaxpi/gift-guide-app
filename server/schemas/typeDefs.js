const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    wishlists: [Wishlist]!
    friends: [User]
  }

  type Wishlist {
    _id: ID
    title: String
    items: [String]
    userId: String
    friends: [User]
  }

  type Auth {
    token: ID!
    user: User
  }
  
  type Query {
    me: User
    users: [User]
    user(userId: ID!): User
    wishlists(username: String): [Wishlist]
    wishlist(wishlistId: ID!): Wishlist
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    createWishlist(userId: ID!, title: String!): Wishlist
    updateWishlist(wishlistId: ID!, title: String!): Wishlist
    deleteWishlist(wishlistId: ID!): Wishlist

    addItem(wishlistId: ID!, item: String!): Wishlist
    deleteItem(item: String!): Wishlist
  }
`;

module.exports = typeDefs;