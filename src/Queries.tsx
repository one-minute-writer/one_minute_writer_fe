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

// export const CREATE_NEW_USER = gql`
//     mutation CreateNewUser($username: String!, $email: String!) {
//     CreateNewUser(username: $username, email: $email) {
//     user {
//         username
//         email
//         }
//     }
// `;