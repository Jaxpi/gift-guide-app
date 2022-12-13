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
  mutation createWishlist($userId: ID!, $title: String!) {
    createWishlist(userId: $userId, title: $title) {
      _id
      email
      username
      wishlists {
        _id
        title
      }
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
    deleteWishlist(wishlistId: $wishlistId) {
      _id
      title
    }
  }
`;

export const ADD_ITEM_TO_WISHLIST = gql`
  mutation addItem($wishlistId: ID!, $item: String!) {
    addItem(wishlistId: $wishlistId, item: $item) {
      _id
      items
    }
  }
`

export const REMOVE_ITEM_FROM_WISHLIST = gql`
  mutation deleteItem($wishlistId: ID!, $item: String!) {
    deleteItem(wishlistId: $wishlistId, item: $item) {
      _id
      items
    }
  }
`;