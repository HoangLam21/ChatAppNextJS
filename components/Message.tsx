import { MessageContent } from "@/types/message-props";
import { Avatar, Badge } from "@nextui-org/react";

const Message = (props: MessageContent) => {
  return props.isReceiver ? (
    <div className="message-line flex w-full h-auto flex">
      <div className="message-wrapper place-self-start bg-primary-200 max-h-1/2">
        <Avatar isBordered radius="full" src={props.avatar} />
        <h5 className="message-content">{props.messageContent}</h5>
        <p className="arrive-time">{props.time}</p>
      </div>
    </div>
  ) : (
    <div className="message-line w-full h-auto justify-items-end flex">
      <div className="message-wrapper place-self-end justify-self-end bg-primary-100">
        <Avatar isBordered radius="full" src={props.avatar} />
        <h5 className="message-content">{props.messageContent}</h5>
        <p className="arrive-time">{props.time}</p>
      </div>
    </div>
  );
};

export default Message;
