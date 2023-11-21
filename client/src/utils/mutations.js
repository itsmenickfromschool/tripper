import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation CreateUser($username: String!, $email: String!, $password: String!) {
  createUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      email
      password
      username
    }
  }
}
`;

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const SAVE_QUESTION = gql`
mutation SaveQuestion($userId: String!, $textContent: String!) {
  saveQuestion(userId: $userId, textContent: $textContent) {
    _id
    createdAt
    questionVote
    textContent
  }
}
`