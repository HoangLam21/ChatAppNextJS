import FriendsProfile from "@/components/FriendsProfile";
import MiniFriendBox from "@/components/MiniFriendBox";
import { SearchIcon } from "@/components/SearchIcon";
import { FriendsInfoProps } from "@/types/user-props";
import { Input } from "@nextui-org/react";
import { profile } from "console";

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
    myRelation: "friend",
  };
  const times = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  return (
    <div>
      <main className="flex min-h-screen flex-col">
        <Input
          startContent={<SearchIcon></SearchIcon>}
          type="text"
          placeholder="Search here"
          className="transition-all rounded-none hover:border-primary-200 text-xl"
        ></Input>
        <div className="myfriends-wrap h-except-navbar scrollbar-thin overflow-y-scroll grid grid-flow-row grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 xl:grid-cols-8 gap-3 p-3">
          {times.map((t, index) => (
            <MiniFriendBox key={t} {...test}></MiniFriendBox>
          ))}
        </div>
      </main>
    </div>
  );
}
