import { gql } from "@apollo/client";

export const GET_SINGLE_USER = gql`
  query fetchUser($id: Int!) {
    fetchUser(input: {id: $id}) {
      id
      username
      email
    }
  }
`;

// export const GET_ALL_USERS = gql`
//   query {
//     fetchUsers {
//       id
//       username
//       email
//     }
//   }
// `;

// export const CREATE_SINGLE_USER = gql`
//   mutation createUser($username: String!, $email: String!) {
//     createUser(input: {username: $username, email: $email}) {
//       user {
//           username
//           email
//       }
//     }
//     {
//       username
//       email
//     }
//   }
// `;

// export const CREATE_SINGLE_USER = gql`
//   mutation {
//     createUser(input: 
//       { $username: String!, $email: String! } ) {
//       user {
//         username: $username
//         email: $email
//       }
//     }
//   }
// // `;

// mutation {
//   createUser(input: 
//     { username: "Lassie", email: "sillyboy@inwell.com" } ) {
//   	user {
//     	username
//     	email
//     }
//   }
// }