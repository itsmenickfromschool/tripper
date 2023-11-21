import { gql } from '@apollo/client';

export const GET_QUESTIONS = gql`
query GetQuestion {
  getQuestion {
    _id
    answer {
      _id
    }
    createdAt
    questionVote
    textContent
    userId {
      username
      verified
    }
  }
}
`;


