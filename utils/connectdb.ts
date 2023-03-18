// getting-started.js
// const mongoose = require("mongoose");
import mongoose from "mongoose";

connectdb().catch((err) => console.log(err));
const MONGO_URI = process.env.MONGO_URI!;

async function connectdb() {
    console.log("MONGO_URI", MONGO_URI);
    await mongoose.connect(MONGO_URI);
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

export default connectdb;
