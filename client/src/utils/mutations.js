import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const CREATE_WISHLIST = gql`
  mutation createWishlist($title: String!) {
    createWishlist(title: $title) {
      _id
      title
    }
  }
`;

export const UPDATE_WISHLIST = gql`
  mutation updateWishlist($wishlistId: ID!, $title: title) {
    updateWishlist(wishlistId: $wishlistId, title: $title) {
      _id
      title
    }
  }
`;

export const DELETE_WISHLIST = gql`
  mutation deleteWishlist($wishlistId: ID!) {
    updateWishlist(wishlistId: $wishlistId) {
      _id
    }
  }
`;

export const ADD_ITEM_TO_WISHLIST = gql`
  mutation addItemToWishlist($wishlistId: ID!, $itemText: String!) {
    addItemToWishlist(wishlistId: $wishlistId, itemText: $itemText) {
      _id
      items {
        _id
        itemText
      }
    }
  }
`

export const REMOVE_ITEM_FROM_WISHLIST = gql`
  mutation removeItemFromWishlist($itemId: ID!) {
    removeItemFromWishlist(itemId: $itemId) {
      _id
    }
  }
`

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;