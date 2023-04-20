import { gql } from '@apollo/client';

// TODO: should getMe get password? where is the password decoded?

export const GET_ME = gql`
    query getMe {
        me {
            _id
            username
            password
        }
    }
`