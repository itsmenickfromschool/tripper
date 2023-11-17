const typeDefs = `
type Vote {
    _id: ID!
    userId: ID!
}
type Answer {
    _id: ID!
    userId: ID!
    textContent: String!
    votes: [Vote]
    createdAt: String!

}
type Question {
    _id: ID!
    userId: ID!
    textContent: String!
    answer: [Answer]
    votes: [Vote]
    createdAt: String!
}

type User {
    _id: ID!
    email: String!
    username: String!
    password: String!
    verified: Boolean
}

type Auth {
    token: ID!
    user: User
}

type Query {
    getQuestion: Question
    getUser(username: String!): User
    getSingleQuestion(questionId: String!) : Question
  }

type Mutation {
    createUser(username: String!, email: String!, password: String!, verified: Boolean): Auth
    saveQuestionVote(questionId: String!, userId: String!): Question
    saveAnswerVote(questionId: String!, answerId: String!, userId: String!): Question
    saveQuestion(userId: String!, textContent:String!): Question
    saveAnswer(userId: ID!, questionId: ID!, textContent: String!): Question
    deleteQuestionVote(questionId: String!, userId: String!): Question
deleteAnswerVote(answerId: String!): Question
    deleteQuestion(questionId: String!): Question
    deleteAnswer(questionId: String!, answerId: String!): Question
    login(email: String!, password: String!): Auth
}

`

module.exports = typeDefs;