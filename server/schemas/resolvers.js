const { Question, User } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    getQuestion: async () => {
      const question = await Question.find();
      return question;
    },
    getUser: async (parent, { username }) => {
      const foundUser = await User.findOne({
        username: username,
      });

      if (!foundUser) {
        return "Cannot find a user with this id!";
      }
      return foundUser;
    },
    getSingleQuestion: async (parent, { questionId }) => {
      const foundQuestion = await Question.findOne({
        _id: questionId,
      });

      if (!foundQuestion) {
        return "Cannot find a question with this id!";
      }
      return foundQuestion;
    },
  },
  Mutation: {
    createUser: async (parent, { username, email, password, verified }) => {
      const user = await User.create({ username, email, password, verified });
      const token = signToken(user);
      return { token, user };
    },
    saveQuestionVote: async (parent, { questionId, userId }) => {
      const saveQVote = await Question.findOneAndUpdate(
        { _id: questionId },
        { $addToSet: { votes: userId } },
        { new: true }
      );
      return saveQVote;
    },
    saveAnswerVote: async (parent, { questionId, answerId, userId }) => {
      const saveAVote = await Question.findOne({
        _id: questionId,
      }).findOneAndUpdate(
        { _id: answerId },
        { $addToSet: { votes: {userId} } },
        { new: true }
      );
      return saveAVote;
    },
    saveQuestion: async (parent, { userId, textContent }) => {
      const saveQ = Question.create({ userId, textContent });
      return saveQ;
    },
    saveAnswer: async (parent, { userId, questionId, textContent }) => {
      const saveA = Question.findOneAndUpdate(
        { _id: questionId },
        { $push: { answer: { textContent, userId } } }
      );

      return saveA;
    },
    deleteQuestionVote: async (parent, { questionId, userId }) => {
      const deleteQVote = await Question.findOneAndUpdate(
        { _id: questionId },
        { $pull: { votes: userId } },
        { new: true }
      );
      return;
    },
    deleteAnswerVote: async (parent, { questionId, answerId, userId }) => {
      const deleteAVote = await Question.findOne({
        _id: questionId,
      }).findOneAndUpdate(
        { _id: answerId },
        { $pull: { votes: userId } },
        { new: true }
      );
      return;
    },
    deleteQuestion: async (parent, { questionId }) => {
      const deleteQ = await Question.deleteOne({ _id: questionId });
      return;
    },
    deleteAnswer: async (parent, { questionId, answerId }) => {
      const deleteA = await Question.findOne({ _id: questionId }).deleteOne({
        _id: answerId,
      });
      return;
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
