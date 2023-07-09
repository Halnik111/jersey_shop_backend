import express from "express";
import {addProductStock, getProductStock, updateProductStock} from "../controllers/productInventoryController.js";

const router = express.Router();

//get product stock in all sizes
router.get("/:id", getProductStock);


//add product stock
router.post("/", addProductStock);
//update product stock size
router.put("/update/:id", updateProductStock);

export default router;