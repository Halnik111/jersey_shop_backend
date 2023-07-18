import mongoose from "mongoose";
import {Decimal128} from "mongodb";


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    category: {
      type: String,
      required: true,
    },
    team: {
        type: String,
        required: true,
    },
    player: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        default: "100% authentic...",
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: Decimal128,
        required: true,
    },
    available: {
        type: Boolean,
        required: true,
        default: true,
    },
    },
    {timestamps: true}
);

export default mongoose.model('Product', productSchema);