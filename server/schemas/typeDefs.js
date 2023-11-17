const typeDefs = `
type Vote {
    _id: ID!
    questionId: ID
    answerId: ID
    userId: ID!
    questionVote: Int!
    answerVote: Int!
}
type Answer {
    _id: ID!
    userId: ID!
    questionId: ID!
    textContent: String!
    createdAt: Date!

}
type Question {
    _id: ID!
    userId: ID!
    textContent: String!
    answer: [Answer]
    createdAt: Date!
}
type User {
    _id: ID!
    email: String!
    password: String!
    verified: Boolean!
}

`