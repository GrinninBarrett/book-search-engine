import { gql } from '@apollo/client';


export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      books {
        _id
        title
        authors
        description
        image
        link
      }
    }
  }
`;