import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://dhritishree:25Bonny2004.@cluster0.hhtr9rl.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}