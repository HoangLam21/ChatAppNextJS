import SettingSpace from "@/components/SettingSpace";
import FileUpload from "@/components/UploadFile";
import UserProfile from "@/components/UserProfile";
import { UserInfoProps } from "@/types/user-props";

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
    personalPoint: 100.5,
  };
  return (
    <div>
      <main className="w-screen h-screen flex flex-col sm:flex-row overflow-y-auto">
        <UserProfile {...test}></UserProfile>
        <SettingSpace></SettingSpace>
      </main>
    </div>
  );
}
