import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      wishlists {
        _id
        items
        friends
      }
    }
  }
`;

export const QUERY_WISHLISTS = gql`
  query getWishlists {
    items {
      _id
      itemText
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