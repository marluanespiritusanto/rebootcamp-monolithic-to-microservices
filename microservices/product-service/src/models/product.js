const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema(
  {
    productName: { type: String },
    image: { type: String },
    nutrients: { type: String },
    from: { type: String },
    quantity: { type: String, default: "0" },
    price: { type: Number },
    organic: { type: String },
    description: { type: String }
  },
  {
    timestamps: { createdAt: true, updatedAt: true }
  }
);

module.exports = mongoose.model("Product", ProductSchema);
