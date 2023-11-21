import { gql } from "@apollo/client";

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
export const GET_SINGLE_QUESTION = gql`
  query GetSingleQuestion($questionId: String!) {
    getSingleQuestion(questionId: $questionId) {
      _id
      answer {
        _id
        answerVote
        createdAt
        textContent
        answerUserId {
          username
          verified
        }
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
