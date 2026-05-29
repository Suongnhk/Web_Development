const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is Required"],
    },
    abstract: {
      type: String,
      required: [true, "abstract is Required"],
    },
    main_img:{
      type:String,
      required: [true, "Image path is Required"],
    },
    content: [
      {
        content_title: {
          type: String,
          required: [true, "Title is Required"],
        },
        content_body: {
          type: String,
          required: [true, "Content is Required"],
        },
        base64_img: {
          type: String,
        },
      },
    ],
    type: {
      type: String,
      enum: ["space", "emotion", "season"],
      default: "space",
    },
  },
  { toJSON: { virtuals: true } },
  { timestamps: true }
);


const Blog = mongoose.model("Blog", BlogSchema);
module.exports = Blog;