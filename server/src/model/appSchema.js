import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  rating: {
    type: Number,
    required: true,
    min: [1, "Rating must be at least 1"],
    max: [5, "Rating cannot exceed 5"]
  },

  comment: {
    type: String,
    trim: true,
    maxlength: [300, "Comment too long"]
  }
}, { timestamps: true });

const productSchema = new mongoose.Schema({
  prod_name: {
    type: String,
    required: [true, "Product name is required"],
    trim: true,
    minlength: 3
  },

  product_img: {
    type: String,
    required: true,
    match: [/^https?:\/\//, "Image must be a valid URL"]
  },

  product_desc: {
    type: String,
    required: true,
    minlength: 10
  },

  price: {
    type: Number,
    required: true,
    min: [1, "Price must be positive"]
  },

  sizes: {
    type: [String],
    enum: ["30ml", "50ml", "100ml"]
  },

  reviews: [reviewSchema],

  averageRating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0
  }
}, { timestamps: true });


const Product = new mongoose.model("Product",productSchema)
export default Product