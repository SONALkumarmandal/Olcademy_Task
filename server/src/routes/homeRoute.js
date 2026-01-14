import { Router } from "express";
import { fetchAllProds,fetchByProduct } from "../controllers/perfumesControllers.js";

const router = Router()

router.get('/getAllProducts',fetchAllProds)
router.get('/getProductDetails',fetchByProduct)

export default router