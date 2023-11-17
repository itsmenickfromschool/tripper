const { Schema, model } = require("mongoose");

const voteSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  }
);




module.exports = voteSchema
