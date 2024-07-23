"use client";
import { FriendsInfoProps, UserInfoProps } from "@/types/user-props";
import Image from "next/image";
import Link from "next/link";
import FileUpload from "./UploadFile";
import { useState } from "react";
import { Button } from "@nextui-org/react";
import FriendStatus from "./FriendStatus";

const FriendsProfile = (props: FriendsInfoProps) => {
  return (
    <div className="user-wrapper p-4 w-full sm:max-w-[400px] h-except-navbar transition-all relatvie">
      <div className="user-group w-full h-full flex flex-col place-items-center relative justify-center rounded-2xl shadow-2xl transition">
        <div className="background rounded-t-2xl relative bg-primary-300 w-full h-auto p-4 flex place-items-center justify-center">
          <button className="cancle hover:scale-95 absolute z-30 translate-x-40 -translate-y-32 transition after:z-10 place-self-end justify-self-end">
            <Image
              src="/assets/icons/BCancleIcon.png"
              alt="cancle"
              width={30}
              height={30}
            ></Image>
          </button>
          <Image
            className=" border-primary-400 rounded-full translate-y-14"
            src={props.avatar}
            alt="background"
            width={150}
            height={150}
          ></Image>
        </div>
        <div className="function-group flex mt-14 gap-3">
          {<FriendStatus relation={props.myRelation}></FriendStatus>}
          <Button color="danger" className="text-medium font-semibold">
            Block
          </Button>
        </div>
        <div className="information-wrap pb-10 flex flex-col justify-items-center place-items-center flex-1">
          <h1 className="fulmame text-2xl font-bold">
            {props.firstName} {props.lastName}
          </h1>
          <h2 className="nickname text-medium">({props.nickName})</h2>
          <p className="description">{props.description}</p>
          <div className="information-group  p-4 grid grid-rows-4 grid-flow-col gap-x-7 gap-y-5">
            <h6>Gender:</h6>
            <h6>Birthday:</h6>
            <h6>Address:</h6>
            <h6 className="font-semibold">Personal Point</h6>
            <h5 className="font-semibold">
              {props.gender ? "Male" : "Female"}
            </h5>
            <h5 className="font-semibold">{props.birthday}</h5>
            <h5 className="font-semibold">{props.address}</h5>
            <h5 className="font-bold text-2xl text-primary-300">
              {props.personalPoint.toString()}
            </h5>
          </div>
          <Button color="secondary" className="text-md font-semibold p-6">
            Give some vote
          </Button>
        </div>
      </div>
    </div>
  );
};
export default FriendsProfile;
