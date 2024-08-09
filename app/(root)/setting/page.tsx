import SettingSpace from "@/components/SettingSpace";
import UserProfile from "@/components/UserProfile";
import { getMyProfile } from "@/lib/actions/info.action";



export default async function Setting() {
  const data = await getMyProfile();

 
  return (
    <div>
      <main className="w-screen overflow-x-hidden scrollbar-hide  h-except-navbar flex flex-col sm:flex-row overflow-y-auto justify-center">
        <UserProfile {...data}></UserProfile>
        <SettingSpace></SettingSpace>
      </main>
    </div>
  );
}
