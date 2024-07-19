import { ReceiverInfo } from "@/types/message-props";
import { User } from "@nextui-org/react";
import { InformationIcon, NormalCallIcon, VideoCallIcon } from "./MessageIcon";

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
      <div className="function-btn flex gap-2 justify-self-end justify-items-center align-middle place-items-center">
        <NormalCallIcon color={color} size={size}></NormalCallIcon>
        <VideoCallIcon color={color} size={size}></VideoCallIcon>
        <InformationIcon color={color} size={size}></InformationIcon>
      </div>
    </div>
  );
};
export default MessageBoxHeader;
