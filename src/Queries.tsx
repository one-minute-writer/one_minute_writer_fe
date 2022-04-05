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
        dashboardMetrics
        stories {
            id
            title
            word
            createdAt
        }
    }
}
`;

export const GET_STORY = gql `
query fetchStory($id: ID!) {
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

export const CREATE_STORY = gql `
mutation (
    $userId: Int!,
    $title: String!,
    $bodyText: String!,
    $word: String!,
    $image: Image!,
    $sound: Sound!,
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

export const UPDATE_STORY = gql`
mutation (
    $id: Int!,
    $userId: Int!,
    $title: String!,
    $bodyText: String!,
    $word: String!,
    $image: Image!,
    $sound: Sound!,
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

export const CREATE_NEW_USER = gql`
mutation (
    $username: String!,
    $email: String!
    ){
    createUser(input: {
        username: $username,
        email: $email
    }) {
        user {
            username
            email
        }
    }
}
`;

export const DELETE_STORY = gql`
mutation (
    $id: ID!
    ){
    deleteStory(input:
      { id: $id } ) {
        story {
          title
          bodyText
      }
    }
  }
`;