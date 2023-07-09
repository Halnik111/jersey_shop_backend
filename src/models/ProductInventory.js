import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema({
    productID: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    },
    {timestamps: true},
);

export default mongoose.model('Product', inventorySchema);