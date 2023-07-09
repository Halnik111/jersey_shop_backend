import Product from "../models/Product.js";

export const addProduct = async (req, res) => {
    try {
        const newProduct = new Product({...req.body});
        await newProduct.save();
        res.status(201).json(newProduct);
    }
    catch (err) {
        res.status(409).json("message: " + err.message);
    }
}

export const getProduct = async (req, res) => {
    try {

    }
    catch (err) {

    }
}

export const getAllCategoryProducts = async (req, res) => {
    try {

    }
    catch (err) {

    }
}