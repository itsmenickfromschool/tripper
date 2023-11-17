const { Schema, model } = require("mongoose");

const voteSchema = new Schema(
  {
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


module.exports = voteSchema
