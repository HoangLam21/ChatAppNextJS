import { ReceiverInfo } from "@/types/message-props";
import { User } from "@nextui-org/react";
import { InformationIcon, NormalCallIcon, VideoCallIcon } from "./MessageIcon";
import Image from "next/image";

const MessageBoxHeader = (props: ReceiverInfo) => {
  const color = "#ffffff";
  const size = "26";
  return (
    <div className="messagebox-header-wrapper flex bg-primary-500 p-4">
      <User
        className="left-0 justify-self-start text-4xl font-bold text-text-w"
        avatarProps={{ src: props.avatar }}
        name={props.name}
      ></User>
      <div className="flex-1"></div>
      <div className="function-btn flex gap-4 justify-self-end justify-items-center align-middle place-items-center">
        <button className="hover:scale-95 transition ">
          <Image
            src="/assets/icons/VideoIcon.png"
            alt="video"
            width={25}
            height={25}
          ></Image>
        </button>
        <button className="hover:scale-95 transition ">
          <Image
            src="/assets/icons/TelephoneIcon.png"
            alt="video"
            width={25}
            height={25}
          ></Image>
        </button>
        <button className="hover:scale-95 transition ">
          <Image
            src="/assets/icons/InformationIcon.png"
            alt="video"
            width={25}
            height={25}
          ></Image>
        </button>
      </div>
    </div>
  );
};
export default MessageBoxHeader;
