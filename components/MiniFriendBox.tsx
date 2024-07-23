"use client";
import { ProfileState } from "@/types/icon-props";
import { FriendsInfoProps } from "@/types/user-props";
import { Button, Card, CardHeader } from "@nextui-org/react";
import { useScroll } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import FriendsProfile from "./FriendsProfile";
const handleButtonClick = (e: React.MouseEvent) => {
  e.stopPropagation();
  console.log("Btn");
};
const MiniFriendBox = (props: FriendsInfoProps) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  return (
    <div className="relative h-full w-full group">
      <Card className="h-full relative overflow-hidden shadow-lg cursor-pointer">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            {props.phoneNumber} {props.nickName}
          </p>
          <h4 className="text-white font-medium text-large">
            {props.firstName} {props.lastName}
          </h4>
        </CardHeader>
        <Image
          alt="Card background"
          className="z-0 w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          src={props.avatar}
          width={500}
          height={500}
        />
        <div className="absolute w-full inset-0 bg-black opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-40 group-hover:blur-sm"></div>
        <div
          onClick={() => {
            setIsProfileOpen(!isProfileOpen);
            console.log(!isProfileOpen);
          }}
          className="absolute inset-0 flex items-end pb-5 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 z-20 justify-center gap-2"
        >
          <button
            className="function-btn bg-primary-400 transition-all hover:bg-primary-200 rounded-full p-3 z-50 "
            onClick={handleButtonClick}
          >
            <Image
              src="/assets/icons/VideoIcon.png"
              alt="video"
              width={25}
              height={25}
            ></Image>
          </button>
          <button
            className="function-btn bg-primary-400 transition-all hover:bg-primary-200 rounded-full p-3 z-50"
            onClick={handleButtonClick}
          >
            <Image
              src="/assets/icons/TelephoneIcon.png"
              alt="video"
              width={25}
              height={25}
            ></Image>
          </button>
          <button
            className="function-btn bg-primary-400 transition-all hover:bg-primary-200 rounded-full p-3 z-50"
            onClick={handleButtonClick}
          >
            <Image
              src="/assets/icons/ChatIcon.png"
              alt="video"
              width={25}
              height={25}
            ></Image>
          </button>
        </div>
      </Card>
    </div>
  );
};
export default MiniFriendBox;
