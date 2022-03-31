import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
query {
    fetchUsers {
    id
    username
    email
    }
}
`;


export const GET_SINGLE_USER = gql`
query fetchUser($id: Int!) {
    id(id: $id){
    username
    email
        }
    }
`;


export const CREATE_NEW_USER = gql`
mutation {
    createUser(input: 
    { username: "Lassie", email: "sillyboy@inwell.com" } ) {
        user {
        username
    	email
        }
    }
}
`;