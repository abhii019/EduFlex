import express, { application } from "express";
import dotenv from "dotenv";
import { connectDb } from "./database/db.js";
import Razorpay from 'razorpay';
import cors from 'cors';


dotenv.config();

 export const instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY,
    key_secret: process.env.RAZORPAY_SECRET
    ,
    
})

const app= express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use("/uploads" , express.static("uploads"));

app.get('/', (req, res) =>{
    res.send("server is working")
});

import userRoutes from './routes/user.js';
import courseRoutes from './routes/course.js';
import adminRoutes from './routes/admin.js';


app.use("/api", userRoutes);
app.use("/api", courseRoutes);
app.use("/api", adminRoutes);

app.listen(PORT , () => {
    console.log(`server is running on http://localhost:${PORT}`);
    connectDb();
})