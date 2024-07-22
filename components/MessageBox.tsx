import { MessageBoxProps } from "@/types/message-props";
import { Avatar, Badge } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
const MessageBox = (props: MessageBoxProps) => {
  return (
    <div className="message-box-wrapper flex p-2 shadow-md cursor-pointer transition hover:bg-primary-100 place-items-center gap-4">
      <Badge
        content=""
        color={props.receiverInfo.isOnline ? "secondary" : "default"}
        shape="circle"
        showOutline={false}
      >
        <Avatar isBordered radius="full" src={props.receiverInfo.avatar} />
      </Badge>
      <div className="content-wrapper hidden sm:flex sm:flex-col">
        <h4 className="receiver-name font-bold text-primary-500">
          {props.receiverInfo.name}
        </h4>
        <p className="recent-message text-sm">
          {props.messages.at(-1)?.sender_id === "2"
            ? "You " + props.messages.at(-1)?.messageContent
            : props.messages?.at(-1)?.messageContent}
        </p>
        <p className="recent-time text-sm text-gray-400">
          {props.messages.at(-1)?.time}
        </p>
      </div>
    </div>
  );
};
export default React.memo(MessageBox);
