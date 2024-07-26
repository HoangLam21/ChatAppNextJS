"use client";
import AlertBox from "@/components/AlertBox";
import FriendsProfile from "@/components/FriendsProfile";
import { AlertBoxProps } from "@/types/function-props";
import { FriendsInfoProps } from "@/types/user-props";
import { useState, useEffect } from "react";

export default function Groups() {
  const test: FriendsInfoProps = {
    id: "2",
    firstName: "Coco",
    lastName: "Suk",
    nickName: "Coconut",
    gender: false,
    avatar: "/UserAvatar2.jpg",
    background: "/RainbowBG.jpg",
    birthday: "1990-01-01T00:00:00.000Z",
    address: "123 Main St, Anytown, USA",
    description: "Di len tren kia choi",
    phoneNumber: "0933897781",
    email: "cocochanel99@gmail.com",
    personalPoint: 20.7,
    myRelation: "friend",
  };
  
  return (
    <main className="flex h-1/2 flex-col items-center justify-between p-0 gap-4 relative">
      <div className="text-4xl font-bold">Comming Soon</div>
     
    </main>
  );
}
