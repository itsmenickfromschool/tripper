const { Schema, model } = require("mongoose");
const moment = require("moment");

const answerSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    questionId: {
      type: Schema.Types.ObjectId,
      ref: "Question",
      required: true,
    },
    textContent: {
      type: String,
      required: true,
      maxlength: 4000,
    },
    createdAt: {
      type: Date,
      default: moment(),
      get: (date) => moment(date).format("MM/DD/YYYY hh:mm:ss a"),
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Answer = model("Answer", answerSchema);

module.exports = Answer;
