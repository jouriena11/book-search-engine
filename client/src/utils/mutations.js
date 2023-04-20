import { gql } from '@apollo/client';


// type Mutation {
//     login(email: String!, password: String!): Auth
//     addUser(username: String!, email: String!, password: String!): Auth
//     saveBook(authors: [String!], description: String!, title: String!, bookId: String!, image: String!, link: String!): User
//     removeBook(bookId: String!): User
// }

// TODO: to check if these codes are working

export const LOGIN_USER = gql `
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
                email
                bookCount
                savedBooks
            }
        }
    }
`

export const ADD_USER = gql `
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
                email
            }
        }
    }
`

export const SAVE_BOOK = gql `
    mutation saveBook($authors: [String!], $description: String!, $title: String!, $bookId: String!, $image: String!, $link: String!) {
        saveBook(authors: $authors, description: $description, title: $title, bookId: $bookId, image: $image, link: $link) {
            user {
                _id
                username
                bookCount
                savedBooks {
                    bookId
                    title
                    description
                    authors
                    image
                    link
                }
            }
        }
    }
`

export const REMOVE_BOOK = gql `
    mutation removeBook($bookId: String!) {
        removeBook(bookId: $bookId) {
            user {
                _id
                username
                bookCount
                savedBooks {
                    bookId
                    title
                    description
                    authors
                    image
                    link
                }
            }
        }
    }
`
