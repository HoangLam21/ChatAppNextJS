import { ChatBoxProps } from "@/types/message-props";
import MessageBoxHeader from "./MessageBoxHeader";
import Message from "./Message";

const ChatBox = (props: ChatBoxProps) => {
  return (
    <div className="chatbox-container flex-grow transition">
      <MessageBoxHeader
        id={props.receiverInfo.id}
        avatar={props.receiverInfo.avatar}
        name={props.receiverInfo.name}
        isOnline={props.receiverInfo.isOnline}
      ></MessageBoxHeader>
      <div className="message-list">
        {props.messages.map((m, index) => (
          <Message
            key={m.id}
            messageContent={m.messageContent}
            time={m.time}
            receiver_id={m.receiver_id}
            sender_id={m.sender_id}
            id={m.id}
          ></Message>
        ))}
      </div>
    </div>
  );
};
export default ChatBox;
