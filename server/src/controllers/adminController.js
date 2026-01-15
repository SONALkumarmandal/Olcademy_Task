import Product from "../model/appSchema.js";
import { response } from "../utils/response.js";

export const adminUpload = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    response(res, 201, product);
  } catch (error) {
    next(error);
  }
};
