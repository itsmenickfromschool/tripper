const { Schema, model } = require("mongoose");

const voteSchema = new Schema(
  {
    type: Number,
    questionId: {
      type: Schema.Types.ObjectId,
      ref: "Question",
    },
    answerId: {
      type: Schema.Types.ObjectId,
      ref: "Answer",
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

voteSchema.virtual('questionVote').get(function () {
    return "Placeholder"
})
voteSchema.virtual('answerVote').get(function () {
    return "PlaceholderbutDifferent"
})

const Vote = model('Vote', voteSchema)

module.exports = Vote
