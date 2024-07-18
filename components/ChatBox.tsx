import {
  ChatBoxProps,
  MessageListOfAChat,
  ReceiverInfo,
} from "@/types/message-props";
import MessageBoxHeader from "./MessageBoxHeader";
import Message from "./Message";

const ChatBox = (props: ChatBoxProps) => {
  return (
    <div className="chatbox-container">
      <MessageBoxHeader
        avatar={props.receiverInfo.avatar}
        name={props.receiverInfo.name}
        isOnline={props.receiverInfo.isOnline}
      ></MessageBoxHeader>
      <div className="message-list">
        {props.messages.messages.map((m, index) => (
          <Message
            key={m.id}
            messageContent={m.messageContent}
            time={m.time}
            isReceiver={m.isReceiver}
            avatar={m.avatar}
            id={m.id}
          ></Message>
        ))}
      </div>
    </div>
  );
};
export default ChatBox;
