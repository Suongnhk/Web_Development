const mongoose = require("mongoose");
const Jimp = require('jimp').default || require('jimp');

const ProductSchema = new mongoose.Schema(
  {
    product_id: {
      type: String,
      required: [true, "Product ID is Required"]
    },
    name: {
      type: String,
      required: [true, "Name is Required"],
    },
    description: {
      type: String,
      required: [true, "Description is Required"],
    },
    imgbase64: {
      type: [String],  // Định nghĩa `imgbase64` là một mảng chuỗi
      default: ["default_base64_string1", "default_base64_string2"]  // Giá trị mặc định là mảng chứa các chuỗi base64
    },
    imgbase64_reduce: {
      type: [String],  // Định nghĩa `imgbase64_reduce` là một mảng chuỗi
      default: ["default_reduce_base64_string1", "default_reduce_base64_string2"]  // Giá trị mặc định là mảng chứa các chuỗi base64 giảm chất lượng
    },
    price: {
      type: Number,
      required: [true, "Product price is Required"],
    },
    d_price: {
      type: Number,
      required: [true, "Product price is Required"],
      default: -1,
    },
    f_description: {
      type: String,
      required: [true, "Description is Required"],
      default: "Mô tả sản phẩm mặc định" 
    },
    f_imgbase64: {
      type: String,
      required: [true, "Product image is Required"],
      default: "default_base64_string" 
    },
    category: {
      type: String,
      enum: [
        "MEALS",
        "MILK",
        "NUTS",
        "SNACKS",
        "BEVERAGE",
      ],
      default: "MEALS",
    },
    isActive: {
      type: Boolean,
      default: true,
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

async function resizeBase64Images(base64Array, width, height) {
  try {
    if (!Array.isArray(base64Array)) {
      throw new Error("base64Array phải là một mảng chứa các chuỗi base64.");
    }

    const resizedImages = await Promise.all(
      base64Array.map(async (base64Str) => {
        const base64Data = base64Str.includes(",") ? base64Str.split(",")[1] : base64Str;
        const image = await Jimp.read(Buffer.from(base64Data, "base64"));
        return await image.resize(width, height).getBase64Async(Jimp.MIME_JPEG);
      })
    );

    return resizedImages;
  } catch (error) {
    console.error("Error resizing images:", error);
    throw error;
  }
}

ProductSchema.pre("save", async function (next) {
  this.imgbase64_reduce = await resizeBase64Images(this.imgbase64, 250, 250);
  next();
});

ProductSchema.pre("findByIdAndUpdate", function (next) {
  this.update_at = Date.now();
  next();
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
