import mongoose, { Schema } from "mongoose";

const us = new Schema(

  {
    userName: {
      type: String,
      required: true,
      unique: true,
      lowerCase: true,
      trim: true,
      index: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowerCase: true,
      trim: true
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
      index: true
    },
    avatar: {
      type: String,
      required: true
    },
    coverImage: {
      type: String
    },
    watchHistory: [{
      type: Schema.Types.ObjectId,
      ref: "video"

    }],
    password: {
      type: String,
      required: [true, "Password is required"]
    },
    refreshToken: {
      type: String
    }

  }, { timestamps: true }
)



export const user = mongoose.model("user", userSchema)
