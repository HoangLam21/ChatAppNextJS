import { MessageContent } from "@/types/message-props";
import { Avatar, Badge } from "@nextui-org/react";

const Message = (props: MessageContent) => {
  return props.isReceiver ? (
    <div className="message-line flex w-full h-auto">
      <div className="message-wrapper p-2 place-self-start  max-h-1/2 flex gap-2">
        <Avatar
          className="self-end"
          isBordered
          radius="full"
          src={props.avatar}
        />
        <div className="message-content-wrapper  ">
          <h5 className="message-content  bg-primary-200 p-2 rounded-t-xl rounded-br-xl">
            {props.messageContent}
          </h5>
          <p className="arrive-time text-xs text-gray-400">{props.time}</p>
        </div>
      </div>
    </div>
  ) : (
    <div className="message-line w-full h-auto justify-items-end flex">
      <div className="message-wrapper p-2 place-self-end justify-self-end flex gap-2 ml-auto">
        <div className="message-content-wrapper ">
          <h5 className="message-content  bg-gray-200 p-2  rounded-t-xl rounded-bl-xl">
            {props.messageContent}
          </h5>
          <p className="arrive-time text-xs text-gray-400">{props.time}</p>
        </div>
        <Avatar
          className="self-end"
          isBordered
          radius="full"
          src={props.avatar}
        />
      </div>
    </div>
  );
};

export default Message;
