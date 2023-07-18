import mongoose from "mongoose";
import {ObjectId} from "mongodb";

const inventorySchema = new mongoose.Schema({
    productID: {
        type: ObjectId,
        required: true,
        unique: true
    },
    inventory: {
        type: Object,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    },
    },
    {timestamps: true},
);

export default mongoose.model('ProductInventory', inventorySchema);