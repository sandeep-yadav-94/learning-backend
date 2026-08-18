import connectDB from "./db/index.js";
import dotenv from 'dotenv';



connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on PORT ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("Mongodb connection falide...", err);
})



















// import express from 'express';
// import dotenv from 'dotenv';

// const app = express();

// ;( async()=>{
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//        app.on("error", (error)=>{
//         console.log("ERROR", error);
//         throw error;
//        });
//        app.listen(process.env.PORT, ()=>{
//         console.log(`App is running on port ${process.env.PORT}`);
//        })
//     } catch (error) {
//         console.error("ERROR", error);
//         throw error;
//     }
// })()