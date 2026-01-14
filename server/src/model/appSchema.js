import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, { _id: false }); // optional

const ProductSchema = new mongoose.Schema({
    prod_name: {
        type: String,
        required: true
    },
    product_img: {
        type: String,
        required: true
    },
    product_desc: {
        type: String,
        required: true
    },
    reviews: [ReviewSchema],

    averageRating: {
        type: Number,
        default: 0
    }
});

const Product =new mongoose.model("Product", ProductSchema);
export default Product
