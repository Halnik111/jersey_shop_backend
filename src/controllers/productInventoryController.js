import ProductInventory from "../models/ProductInventory.js";


export const getProductStock = async (req, res) => {
    try {
        const productStock = await ProductInventory.findById(req.params.id);
        res.status(200).json(productStock);
    }
    catch (err) {
        res.status(500).json(err.message);
    }
}

export const updateProductStock = async (req, res) => {
    try {

    }
    catch (err) {

    }
}

export const addProductStock = async (req, res) => {
    try {
        const newStock = new ProductInventory({...req.body});
        await newStock.save();
        res.status(201).json(newStock);
    }
    catch (err) {
        res.status(409).json("message: " + err.message);
    }
}

export const checkProductAvailable = async (req, res) => {
    try {
        const productStock = await ProductInventory.find({productID: req.params.id, quantity: {$gte: 1}});

        res.status(200).json("asd");
    }
    catch (err) {
        res.status(500).json(err.message);
    }
}