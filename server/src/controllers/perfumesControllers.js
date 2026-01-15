import Product from "../model/appSchema.js";
import { response } from "../utils/response.js";

export const fetchAllProds = async (req, res, next) => {
  try {
    const data = await Product.find(); 
    response(res, 200, data);
  } catch (error) {
    console.log("Error", error);
    next(error);
  }
};

export const fetchByProduct = async (req, res, next) => {
  try {
    const { _id } = req.query; 

    if (!_id) {
      return res.status(400).json({ success: false, message: "_id query parameter is required" });
    }

    const data = await Product.findById(_id);
    if (!data) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    response(res, 200, data);
  } catch (error) {
    console.log("Error", error);
    next(error);
  }
};

export default { fetchAllProds, fetchByProduct };
