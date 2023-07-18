import express from "express";
import {
    addProductStock,
    checkProductAvailable,
    getProductStock,
    updateProductStock
} from "../controllers/productInventoryController.js";

const router = express.Router();

//get product stock in all sizes
router.get("/:id", getProductStock);

//add product stock
router.post("/add/", addProductStock);
//update product stock size
router.put("/update/:id", updateProductStock);
//check if products in stock
router.get("/check/", checkProductAvailable);

export default router;