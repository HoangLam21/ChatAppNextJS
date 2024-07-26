"use client";
import { Button, Select, SelectItem, Switch } from "@nextui-org/react";
import SunIcon from "./SunIcon";
import MoonIcon from "./MoonIcon";
import { useClerk } from "@clerk/nextjs";
import AlertBox from "./AlertBox";
import { AlertBoxProps } from "@/types/function-props";
import { useState } from "react";

const SettingSpace = () => {
  const [isSignOut, setIsSignOut] = useState(false);
  const notificationOptions = ["Allow", "Block"];
  const cookieOptions = ["Allow", "Block"];
  const microandcamOpstions = ["test1", "test2"];
  const { signOut } = useClerk();
  const signOutAlert: AlertBoxProps = {
    icon: "/assets/alerts/CryingAlert.png",
    message: "Are you sure to Sign Out?",
    isOpen: isSignOut,
    setIsOpen: setIsSignOut,
    do: () => signOut({ redirectUrl: "/sign-in" }),
  };
  return (
    <div className="setting-wrap h-fit sm:h-except-navbar w-full p-4 sm:pl-0 flex relative animate-slideInFromRight">
      <div className="setting-group h-fit w-full rounded-2xl shadow-2xl flex flex-col">
        <div className="function-group flex place-items-center p-8 justify-between items-center border-b-2">
          <h5 className="text-xl">Dark mode</h5>
          <Switch
            className=""
            defaultSelected
            size="lg"
            color="secondary"
            thumbIcon={({ isSelected, className }) =>
              isSelected ? (
                <SunIcon className={className} />
              ) : (
                <MoonIcon className={className} />
              )
            }
          ></Switch>
        </div>
        <div className="function-group flex place-items-center p-8 justify-between items-center border-b-2">
          <h5 className="text-xl">Notification</h5>
          <Select
            defaultSelectedKeys={notificationOptions}
            className="w-[150px]"
          >
            {notificationOptions.map((option) => (
              <SelectItem key={option}>{option}</SelectItem>
            ))}
          </Select>
        </div>
        <div className="function-group flex place-items-center p-8 justify-between items-center border-b-2">
          <h5 className="text-xl">Change Password</h5>
          <Button color="default">Change password</Button>
        </div>
        <div className="function-group flex place-items-center p-8 justify-between items-center border-b-2">
          <h5 className="text-xl">Cookie</h5>
          <Select defaultSelectedKeys={cookieOptions} className="w-[150px]">
            {cookieOptions.map((option) => (
              <SelectItem key={option}>{option}</SelectItem>
            ))}
          </Select>
        </div>
        <div className="function-group flex place-items-center p-8 justify-between items-center border-b-2">
          <h5 className="text-xl">Micro</h5>
          <Select
            defaultSelectedKeys={microandcamOpstions}
            className="w-[150px]"
          >
            {microandcamOpstions.map((option) => (
              <SelectItem key={option}>{option}</SelectItem>
            ))}
          </Select>
        </div>
        <div className="function-group flex place-items-center p-8 justify-between items-center border-b-2">
          <h5 className="text-xl">Camera</h5>
          <Select
            defaultSelectedKeys={microandcamOpstions}
            className="w-[150px]"
          >
            {microandcamOpstions.map((option) => (
              <SelectItem key={option}>{option}</SelectItem>
            ))}
          </Select>
        </div>
        <div className="function-group flex place-items-center p-8 justify-end border-b-2">
          <Button
            color="danger"
            className="text-lg font-semibold p-5"
            onClick={() => setIsSignOut(!isSignOut)}
          >
            Log out
          </Button>
        </div>
      </div>
      {isSignOut && <AlertBox {...signOutAlert}></AlertBox>}
    </div>
  );
};
export default SettingSpace;
