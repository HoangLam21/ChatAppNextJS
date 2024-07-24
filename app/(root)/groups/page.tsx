"use client";
import FriendsProfile from "@/components/FriendsProfile";
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
    <main className="flex-1 h-1/2 flex-col items-center justify-between p-0 gap-4 relative">
      <FriendsProfile {...test}></FriendsProfile>
    </main>
  );
}
