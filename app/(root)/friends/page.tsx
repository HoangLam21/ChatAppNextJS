"use client";
import FriendsProfile from "@/components/FriendsProfile";
import MiniFriendBox from "@/components/MiniFriendBox";
import RecentRequestBox from "@/components/RecentRequestBox";
import { SearchIcon } from "@/components/SearchIcon";
import { FriendProfileProps, FriendsInfoProps } from "@/types/user-props";
import { Input } from "@nextui-org/react";
import { useState } from "react";

export default function Friends() {
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
    myRelation: "requested",
  };
  const times = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [friendInfo, setFriendInfo] = useState({});
  const friendProfileProps: FriendProfileProps = {
    ...test,
    isOpen: isProfileOpen,
    setIsOpen: setIsProfileOpen,
    data: friendInfo,
    setData: setFriendInfo,
  };

  return (
    <div>
      <main className="flex h-except-navbar flex-col justify-center">
          {isProfileOpen && (
            <FriendsProfile {...friendProfileProps}></FriendsProfile>
          )}
        <Input
          startContent={<SearchIcon></SearchIcon>}
          type="text"
          placeholder="Search here"
          className="transition-all rounded-none hover:border-primary-200 text-xl"
        ></Input>
        <div className="friends-wrap flex flex-col h-except-nav-and-search flex-1 sm:flex-row p-2 gap-2">
          <h5 className="sm:hidden font-bold text-primary-500 ">My request</h5>
          <div className="recent-list rounded-md h-2/5 sm:h-full scrollbar-hide overflow-y-auto shadow-3xl ">
            {times.map((m, index) =>
              test.myRelation === "request" ||
              test.myRelation === "requested" ? (
                <RecentRequestBox
                  key={index}
                  {...friendProfileProps}
                ></RecentRequestBox>
              ) : null
            )}
          </div>
          <h5 className="sm:hidden font-bold text-primary-500 ">My Friends</h5>
          <div className="friends-list rounded-md h-2/5 sm:h-full scrollbar-hide flex flex-col overflow-y-auto flex-1 shadow-3xl">
            {times.map((m, index) => (
              <MiniFriendBox
                key={index}
                {...friendProfileProps}
              ></MiniFriendBox>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
