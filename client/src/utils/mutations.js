import { gql } from '@apollo/client';

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
  mutation updateWishlist($wishlistId: ID!, $title: title, $items: [String], $share: [User]) {
    updateWishlist(wishlistId: $wishlistId, title: $title, items: )
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