"use server"
import { UserInfoProps } from "@/types/user-props"
import { connectToDatabase } from "../mongodb"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
export const createInfo = async (param:UserInfoProps)=>{
    const {userId} = auth();
    if(!userId) redirect("/sign-in");
    console.log(userId);
    connectToDatabase();
    try{
        param.id = userId;
        
    }catch(e){
        console.log("Create info err: "+e);
    }
}