"use server";
import { UserInfoProps } from "@/types/user-props";
import { connectToDatabase } from "../mongodb";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { User } from "@/database/user.model";
export const createInfo = async (param: any) => {
  const { userId } = auth();
  if (!userId) redirect("/sign-in");
  param.id = userId;

  connectToDatabase();
  try {
    const user = await User.findOne({ id: userId });
    if (!!user) {
      throw () => {
        console.log("User " + userId + " has been exist!");
      };
    } // Trả về true nếu user tồn tại, ngược lại false
    // const userData = {
    //   id: userId,
    //   firstName: param.firstName,
    //   lastName: param.lastName,
    //   nickName: param.nickName,
    //   birthday: param.birthday,
    //   phoneNumber: param.phoneNumber,
    //   email: param.email,
    //   address: param.address,
    //   createAt: Date.now(),
    //   personalPoint: 100,
    // };

    // Create a new user with the sanitized data
    const newUser = await User.create(param);
    console.log("User created successfully:", newUser);
  } catch (e) {
    console.log("Create info err: " + e);
  }
};
