const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is Required"],
    },

    phone: {
      type: String,
      required: [true, "Phone is Required"],
    },

    street: {
      type: String,
      required: [true, "Street is Required"],
    },

    city: {
      type: String,
      required: [true, "City is Required"],
    },

    district: {
      type: String,
      required: [true, "District is Required"],
    },

    ward: {
      type: String,
      required: [true, "Ward is Required"],
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    default: {
      type: Boolean,
      default: false,
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

AddressSchema.pre("findByIdAndUpdate", function (next) {
  this.update_at = Date.now();
  next();
});

AddressSchema.pre("save", function (next) {
  if (this.default) {
    this.model("Address").updateMany(
      { user: this.user },
      { default: false },
    );
  } 
  next();
});

const Address = mongoose.model("Address", AddressSchema);
module.exports = Address;
