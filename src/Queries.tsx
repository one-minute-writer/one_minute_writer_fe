import { gql } from "@apollo/client";

export const GET_SINGLE_USER = gql`
    query fetchUser($id: Number!) {
        fetchUser(id: $id) {
            id
            username
            email
        }
    }
`;

export const CREATE_SINGLE_USER = gql `
    mutation createUser($username: String!, $email: String!) {
        createUser(username: $username, email: $email) {
            user {
                username
                email
            }
        }
        {
          id
          username
          email
          errors {
            message 
          }
        }
    }
`;