import SettingSpace from "@/components/SettingSpace";
import FileUpload from "@/components/UploadFile";
import UserProfile from "@/components/UserProfile";
import { FriendProfileProps, UserInfoProps } from "@/types/user-props";
import { useState } from "react";

export default function Setting() {
  const test: UserInfoProps = {
    id: "2",
    firstName: "Cam Lam",
    lastName: "Suk",
    nickName: "Linda",
    gender: false,
    avatar: "/UserAvatar.jpg",
    background: "/RainbowBG.jpg",
    birthday: "1990-01-01T00:00:00.000Z",
    address: "123 Main St, Anytown, USA",
    description: "Di len tren kia choi",
    phoneNumber: "0998467833",
    email: "dalin1990@gmail.com",
    personalPoint: 100.5,
  };
  
  return (
    <div>
      <main className="w-screen overflow-x-hidden scrollbar-hide  h-except-navbar flex flex-col sm:flex-row overflow-y-auto">
        <UserProfile {...test}></UserProfile>
        <SettingSpace></SettingSpace>
      </main>
    </div>
  );
}
