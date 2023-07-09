import express from "express";
import {addProduct, getAllCategoryProducts, getProduct} from "../controllers/productController.js";

const router = express.Router();

//get specific product
router.get("/find/:id", getProduct);
//get all products of specific category
router.get("/category/:id", getAllCategoryProducts);

//add product
router.post("/add", addProduct);

export default router;