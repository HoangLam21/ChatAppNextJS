import ChatBox from "@/components/ChatBox";
import MessageBox from "@/components/MessageBox";
import MessageBoxHeader from "@/components/MessageBoxHeader";
import MessageTyping from "@/components/MessageTyping";
import SearchBox from "@/components/SearchBox";
import {
  ChatBoxProps,
  MessageBoxProps,
  MessageListOfAChat,
  ReceiverInfo,
} from "@/types/message-props";

export default function Home() {
  const test:ChatBoxProps = {
    receiverInfo:{
      name: "CamLanSuk",
      avatar: "/UserAvatar.jpg",
      isOnline: true,
    },
    messages: {
      messages: [
        {
          avatar: "/UserAvatar.jpg",
          id: "145446",
          messageContent:
            "Tháo dỡ xuống đi bạn, công an xẽ điều cha đó, toi khuyên thiệt!",
          time: "15:56",
          isReceiver: true,
        },
        {
          avatar: "/UserAvatar.jpg",
          id: "145447",
          messageContent: "Đéo!",
          time: "15:58",
          isReceiver: false,
        },
      ],
    }
  }
  const testMessage: MessageBoxProps = {
    avatar: "/UserAvatar.jpg",
    name: "CamLanSuk",
    recentMessage: "Nhan cai gi?????",
    timeRecentMessage: "14:54",
    isOnline: true,
  };
  const times = [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
  const info: ReceiverInfo = {
    name: "CamLanSuk",
    avatar: "/UserAvatar.jpg",
    isOnline: true,
  };
  const messagelist: MessageListOfAChat = {
    messages: [
      {
        avatar: info.avatar,
        id: "145446",
        messageContent:
          "Tháo dỡ xuống đi bạn, công an xẽ điều cha đó, toi khuyên thiệt!",
        time: "15:56",
        isReceiver: true,
      },
      {
        avatar: info.avatar,
        id: "145447",
        messageContent: "Đéo!",
        time: "15:58",
        isReceiver: false,
      },
    ],
  };
  return (
    <main className="flex h-screen flex-col items-center justify-between p-0 gap-4">
      <div className=" w-screen h-screen border-4 message-page-wrapper flex flex-row">
        <div className="message-list flex-1 h-screen w-screen flex flex-col ">
          <SearchBox></SearchBox>
          <div className="messagebox-list flex flex-col overflow-auto  scrollbar-thin">
            {times.map((t, index) => (
              <MessageBox
                key={index}
                avatar={testMessage.avatar}
                name={testMessage.name}
                recentMessage={testMessage.recentMessage}
                timeRecentMessage={testMessage.timeRecentMessage}
                isOnline={testMessage.isOnline}
              ></MessageBox>
            ))}
          </div>
        </div>
        <div className="chat-box w-3/4 h-except-navbar flex-2 hidden sm:flex sm:flex-col">
          <ChatBox {...test}></ChatBox>
          <MessageTyping></MessageTyping>
      </div>
      
      </div>
      <div className="">Message</div>
    </main>
  );
}
