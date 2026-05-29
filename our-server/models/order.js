const mongoose = require("mongoose");
const OrderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },

        quantity: {
          type: Number,
          required: [true, "Quantity is Required"],
        },
      },
    ],

    address: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address",
    },

    coupon: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Coupon",
    },

    total: {
      type: Number,
      required: [true, "Total is Required"],
    },

    status: {
      type: String,
      enum: ["pending", "completed"],
      default: "pending",
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

OrderSchema.pre("findByIdAndUpdate", function (next) {
  this.update_at = Date.now();
  next();
});

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;
