import { MessageBoxProps } from "@/types/message-props";
import Image from "next/image";
import React from "react";
const MessageBox = (props: MessageBoxProps) => {
  return (
    <div className="message-box-wrapper flex p-2 shadow-md cursor-pointer transition hover:bg-primary-100">
        <Image className="rounded-full" src={props.avatar} alt="receiver-avatar" width={60} height ={30}></Image>
      <div className="content-wrapper">
        <h4 className="receiver-name font-bold text-primary-500">{props.name}</h4>
        <p className="recent-message text-sm">{props.recentMessage}</p>
        <p className="recent-time text-sm text-gray-400">
          {props.timeRecentMessage}
        </p>
      </div>
    </div>
  );
};
export default React.memo(MessageBox);
