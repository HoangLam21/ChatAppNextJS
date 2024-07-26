"use server";
import { UserInfoProps } from "@/types/user-props";
import { connectToDatabase } from "../mongodb";
import { User } from "@/database/user.model";
import { getAuthId } from "../utils/auth";
export const createInfo = async (param: any) => {
  param.id = getAuthId();
  connectToDatabase();
  try {
    const user = await User.findOne({ id: param.id });
    if (!!user) {
      throw () => {
        console.log("User " + param.id + " has been exist!");
      };
    }
    const newUser = await User.create(param);
    console.log("User created successfully:", newUser);
  } catch (err) {
    console.log("Create info err: " + err);
  }
};
export const getMyProfile = async () => {
  try {
    connectToDatabase();
    const userId = getAuthId();
    const myProfile = await User.findOne({ id: userId });
    console.log(getAuthId());
    if (!myProfile) {
      console.log("User " + getAuthId() + "is not exist");
    }
    return myProfile.toObject();
  } catch (err) {
    console.log("Fetch profile data err: " + err);
  }
};
