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

  type Auth {
    token: ID!
    user: User
  }

  input wishlistInput {
    title: String!
    items: [String]
    friends: [ID]
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    createWishlist(input: wishlistInput!): User
    # updateWishlist(wishlistId: ID!): Wishlist
    deleteWishlist(wishlistId: ID!): User
  }
`;

module.exports = typeDefs;