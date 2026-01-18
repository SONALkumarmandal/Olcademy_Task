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
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Product id is required",
      });
    }

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    response(res, 200, product);
  } catch (error) {
    console.error("Fetch product error:", error);
    next(error);
  }
};


export default { fetchAllProds, fetchByProduct };
