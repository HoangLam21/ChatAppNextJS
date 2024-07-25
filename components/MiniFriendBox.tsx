"use client";
import { FriendProfileProps, FriendsInfoProps } from "@/types/user-props";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import FriendUserBox from "./FriendUserBox";
import FriendsProfile from "./FriendsProfile";
const MiniFriendBox = (props: FriendProfileProps) => {
  return (
    <div onClick={()=>{props.setIsOpen(!props.isOpen); props.setData(props);}} className="h-auto friend-mini-wrap flex justify-between p-2 shadow-md items-center cursor-pointer hover:bg-primary-100 transition">
      <FriendUserBox {...props}></FriendUserBox>
      <div className="contact-wrap h-auto w-auto flex gap-2 p-2">
        <button className="bg-primary-500 rounded-full p-1 sm:p-3 h-auto w-auto hover:bg-primary-300 transition">
          {" "}
          <Image
            src="/assets/icons/VideoIcon.png"
            alt="video"
            width={25}
            height={25}
          ></Image>
        </button>
        <button className="bg-primary-500 rounded-full p-1 sm:p-3 h-auto w-auto  hover:bg-primary-300 transition">
          {" "}
          <Image
            src="/assets/icons/TelephoneIcon.png"
            alt="telephone"
            width={25}
            height={25}
          ></Image>
        </button>
        <button className="bg-primary-500 rounded-full p-1 sm:p-3 h-auto w-auto  hover:bg-primary-300 transition">
          {" "}
          <Image
            src="/assets/icons/ChatIcon.png"
            alt="chat"
            width={25}
            height={25}
          ></Image>
        </button>
      </div>
    </div>
  );
};
export default MiniFriendBox;
