const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    friends: [User]
    wishlists: [Wishlist]
  }

  type Wishlist {
    _id: ID
    title: String!
    items: [String]
    userId: String!
    share: [User]
  }

  type Item {
    _id: ID!
    itemText: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  input WishlistInput {
    title: String!
    items: [String]
    friends: [User]
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    createWishlist(createWishlist: WishlistInput!): User
    updateWishlist(wishlistId: ID!): Wishlist
    deleteWishlist(wishlistId: ID!): User
  }
`;

module.exports = typeDefs;