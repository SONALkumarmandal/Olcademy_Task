import express from "express";
import { adminUpload } from "../controllers/adminController.js";
import { productSchema } from "../validators/product.zod.js";
import { zodValidate } from "../middleware/zodValidate.js";

const router = express.Router();

router.post("/upload",zodValidate(productSchema),adminUpload);

export default router;
