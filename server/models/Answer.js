const { Schema, model } = require("mongoose");
const moment = require("moment");

const voteSchema = require("./Vote");

const answerSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    textContent: {
      type: String,
      required: true,
      maxlength: 4000,
    },
    votes:[voteSchema],
    createdAt: {
      type: Date,
      default: moment(),
      get: (date) => moment(date).format("MM/DD/YYYY hh:mm:ss a"),
    },
  },
  {
    toJSON: {
      getters: true,
      virtuals: true
    },
  }
);

answerSchema.virtual('answerVote').get(function () {
  return this.votes.length;
});
module.exports = answerSchema;
