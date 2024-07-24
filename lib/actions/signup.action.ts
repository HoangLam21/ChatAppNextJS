"use server";
import { connectToDatabase } from "../mongodb";

export const Signup = async () => {
  try {
    console.log("here");
    connectToDatabase();
  } catch (e) {
    console.log("here");
    console.log("Database Error: " + e);
  }
};
