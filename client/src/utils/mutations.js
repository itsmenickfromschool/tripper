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
export const SAVE_ANSWER = gql`
mutation SaveAnswer($userId: ID!, $questionId: ID!, $textContent: String!) {
  saveAnswer(userId: $userId, questionId: $questionId, textContent: $textContent) {
    _id
    answer {
      _id
      createdAt
      answerVote
      textContent
    }
  }
}
`


export const SAVE_QUESTION_VOTE = gql`
mutation SaveQuestionVote($questionId: String!, $userId: String!) {
  saveQuestionVote(questionId: $questionId, userId: $userId) {
    _id
    votes {
      userId
    }
  }
}
`

export const DELETE_QUESTION_VOTE = gql`
mutation DeleteQuestionVote($questionId: String!, $userId: String!) {
  deleteQuestionVote(questionId: $questionId, userId: $userId) {
    _id
    votes {
      userId
    }
  }
}
`
