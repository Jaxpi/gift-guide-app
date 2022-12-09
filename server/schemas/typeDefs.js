const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]!
  }

  type Book {
    _id: ID
    description: String
    bookId: String
    image: String
    link: String
    title: String
    authors: [String]!
  }

  type Auth {
    token: ID!
    user: User
  }

  input BookInput {
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
    authors: [String]!
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(newBook: BookInput!): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;