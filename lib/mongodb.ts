"use server";
import mongoose from "mongoose";
let isConnected: boolean;
const DB_URL = process.env.MONGODB_URL!;
export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);
  if (!process.env.MONGODB_URL) console.log("Missing database URL");
  if (isConnected) console.log("Database already connected");
  try {
    await mongoose.connect(DB_URL, { dbName: "TuCuChat" });
    isConnected = true;
    console.log("Connected");
  } catch (e) {
    console.log("Error: " + e);
  }
};
