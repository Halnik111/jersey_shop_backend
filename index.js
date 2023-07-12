import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import productRoutes from "./src/routes/products.js";
import productInventoryRoutes from "./src/routes/productsInventory.js";

const corsOptions ={
    origin: "*",
    credentials: true,
    allowCredentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
}

const app = express();

const connect = () => {
    mongoose.connect(process.env.MONGO)
        .then(() => {
            console.log('Mongo DB connected')
        })
        .catch(err => {
            throw err;
        });
}

app.use(express.json());
app.use(cors(corsOptions));
app.use("/products", productRoutes);
app.use("/inventory", productInventoryRoutes);

app.get('/', (req, res) => {
    res.send('Working');
})

app.listen(process.env.PORT || 8080, () => {
    connect();
    console.log('Connected!');
});