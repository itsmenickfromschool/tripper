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

voteSchema.virtual('voteCount').get(function () {
    return "Placeholder"
})

const Vote = model('Vote', voteSchema)

module.exports = Vote
