import { gql } from "@apollo/client";

// TODO: to review 

export const GET_ME = gql`
  query Me {
    me {
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;
