import { gql } from '@apollo/client';

export const GET_QUESTIONS = gql`
  query GetQuestion {
  getQuestion {
    _id
    textContent
    createdAt
    questionVote
    userId {
      username
    }
  }
}
`;


