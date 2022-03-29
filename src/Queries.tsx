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