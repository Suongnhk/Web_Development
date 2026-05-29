const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    date: {
      type: Date,
      default: Date.now,
      required: [true, "Date is Required"],
    },

    rating: {
      type: Number,
      required: [true, "Rating is Required"],
    },

    title: {
      type: String,
      required: [true, "Title is Required"],
    },

    content: {
      type: String,
      required: [true, "Content is Required"],
    },

    create_at: {
      type: Date,
      default: Date.now,
    },

    update_at: {
      type: Date,
      default: Date.now,
    },
  },
  { toJSON: { virtuals: true } },
  { timestamps: true }
);

ReviewSchema.pre("findByIdAndUpdate", function (next) {
  this.update_at = Date.now();
  next();
});

const Review = mongoose.model("Review", ReviewSchema);
module.exports = Review;
