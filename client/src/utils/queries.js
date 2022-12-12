import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      wishlists {
        _id
        title
      }
    }
  }
`;

export const QUERY_ONE_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      username
      _id
      email
      wishlists {
        _id
        title
      }
    }
  }
`;

export const QUERY_WISHLISTS = gql`
  query Wishlists {
    wishlists {
      _id
      title
      userId
    }
  }
`;

export const QUERY_ONE_WISHLIST = gql`
  query wishlist($wishlistId: ID!) {
    wishlist(wishlistId: $wishlistId) {
      _id
      title
      userId
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      wishlists {
        _id
        title
        items
      }
    }
  }
`;