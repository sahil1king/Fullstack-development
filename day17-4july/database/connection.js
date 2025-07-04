// const mongoose = require("mongoose");

// async function connecTODB() {
//     mongoose.connect(process.env.DB_URL).then(() => {
//         console.log("DB connected");
//     }).catch((error) => {
//         console.log(error);
//     });
// }

// module.exports = connecTODB;

import mongoose from "mongoose";

export const connectDb = async() => {
    
    try {
        const conn = await mongoose.connect(process.env.DB_URL);
        console.log("connected")
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}