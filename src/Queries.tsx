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
query ($id: ID!) {
    fetchUser(id: $id) {
        id
        username
        email
    }
    fetchStories {
        id
        title
        word
    }
}
`;

// export const CREATE_NEW_USER = gql`
// mutation {
//     createUser(input: 
//     { username: "Lassie", email: "sillyboy@inwell.com" } ) {
//         user {
//         username
//     	email
//         }
//     }
// }
// `;


// export const CREATE_SINGLE_USER = gql `
// query createUser($username: String!, $email: String!) {
//     createUser(username: $username, email: $email) {
//         user {
//             username
//             email
//         }
//     }
// }
// `;

export const UPDATE_STORY = gql`
mutation (
    $id: Int!
    $userId: Int!,
    $title: String!,
    $bodyText: String!,
    $word: String!,
    $image: String!,
    $sound: String!,
    $totalTimeInSeconds: Int!
    ){
    updateStory(input: {
        id: $id
        userId: $userId,
        title: $title,
        bodyText: $bodyText,
        word: $word,
        image: $image,
        sound: $sound,
        totalTimeInSeconds: $totalTimeInSeconds
    }) {
        story {
            title
            bodyText
            word
            image
            sound
            totalTimeInSeconds
        }
    }
}
`

export const GET_STORY = gql `
query fetchStory($id: ID) {
    fetchStory(id: $id) {
        title
    	bodyText
        word
        image
        sound
        totalTimeInSeconds
    }
}
`;

// export const GET_STORIES = gql `
// query fetchStories {
//     id
//     title
//     word
// }
// `;

export const CREATE_STORY = gql `
mutation (
    $userId: Int!,
    $title: String!,
    $bodyText: String!,
    $word: String!,
    $image: String!,
    $sound: String!,
    $totalTimeInSeconds: Int!
    ){
        createStory(input: {
            userId: $userId,
            title: $title,
            bodyText: $bodyText,
            word: $word,
            image: $image,
            sound: $sound,
            totalTimeInSeconds: $totalTimeInSeconds
        }) {
        story {
            title
            bodyText
            word
            image
            sound
            totalTimeInSeconds
        }
    }
}
`;


