"use client";
import { EditProfileProps, UserInfoProps } from "@/types/user-props";
import Image from "next/image";
import Link from "next/link";
import FileUpload from "./UploadFile";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import EditProfile from "./EditProfile";
import { getMyProfile } from "@/lib/actions/info.action";
const UserProfile = (props: UserInfoProps) => {
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [myInfo,setMyInfo] = useState({});
  const editProfileProps: EditProfileProps = {
    ...props,
    isOpen: isEditOpen,
    setIsOpen: setIsEditOpen,
  };
  return (
    <div className="user-wrapper p-4 w-full sm:max-w-[400px] h-except-navbar transition-all relatvie flex items-center justify-center animate-slideInFromLeft">
      <div className="user-group w-full h-full flex flex-col place-items-center relative justify-center rounded-2xl shadow-2xl transition">
        {isEditOpen && <EditProfile {...editProfileProps}></EditProfile>}
        <div className="background rounded-t-2xl relative bg-primary-300 w-full h-auto p-4 flex place-items-center justify-center">
          <Image
            className=" border-primary-400 rounded-full translate-y-14"
            src={props.avatar}
            alt="background"
            width={150}
            height={150}
          ></Image>
          <button
            className="change-image translate-x-14 translate-y-28 hover:scale-95 transition absolute"
            onClick={() => {
              setIsUploadOpen(!isUploadOpen);
              console.log(!isUploadOpen);
            }}
          >
            <Image
              src="/assets/icons/CameraIconUnselected.png"
              alt="change-img"
              width={30}
              height={30}
            ></Image>
          </button>
          <FileUpload
            isOpen={isUploadOpen}
            setIsOpen={setIsUploadOpen}
          ></FileUpload>
        </div>

        <div className="information-wrap py-10 flex flex-col justify-items-center place-items-center flex-1">
          <h1 className="fulmame text-2xl font-bold">
            {props.firstName} {props.lastName}
          </h1>
          <h2 className="nickname text-medium">({props.nickName})</h2>
          <p className="description">{props.description}</p>
          <Button
            onClick={() => setIsEditOpen(!isEditOpen)}
            color="secondary"
            className="m-2"
          >
            Profile Setting
          </Button>
          <div className="information-group  p-4 grid grid-rows-4 grid-flow-col gap-x-7 gap-y-5">
            <h6>Gender:</h6>
            <h6>Birthday:</h6>
            <h6>Address:</h6>
            <h6 className="font-semibold">Personal Point</h6>
            <h5 className="font-semibold">
              {props.gender === "male"? "Male":"Female"}
            </h5>
            <h5 className="font-semibold">{props.birthday}</h5>
            <h5 className="font-semibold">{props.address}</h5>
            <h5 className="font-bold text-2xl text-primary-300">
              {props.personalPoint.toString()}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserProfile;
