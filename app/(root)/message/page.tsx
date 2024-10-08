"use client";
import ChatBox from "@/components/ChatBox";
import MessageBox from "@/components/MessageBox";
import MessageBoxHeader from "@/components/MessageBoxHeader";
import MessageTyping from "@/components/MessageTyping";
import SearchBox from "@/components/SearchBox";
import { ChatBoxProps, MessageContent } from "@/types/message-props";
import { useState, useEffect } from "react";
import { pusherClient } from "@/lib/pusher";
import { useAuth } from "@clerk/nextjs";
export default function Home() {
  const testDatas: ChatBoxProps[] = [
    {
      receiverInfo: {
        id: "1",
        name: "Cristina",
        avatar: "/UserAvatar2.jpg",
        isOnline: true,
      },
      messages: [
        {
          id: "145448",
          messageContent: "Hello!",
          time: "15:56",
          sender_id: "2",
          receiver_id: "3",
        },
        {
          id: "145447",
          messageContent: "Hi!",
          time: "15:58",
          sender_id: "3",
          receiver_id: "2",
        },
      ],
    },
    {
      receiverInfo: {
        id: "2",
        name: "Lonysa",
        avatar: "/UserAvatar1.webp",
        isOnline: true,
      },
      messages: [
        {
          id: "145446",
          messageContent:
            "Tháo dỡ xuống đi bạn, công an xẽ điều cha đó, toi khuyên thiệt!",
          time: "15:56",
          sender_id: "1",
          receiver_id: "2",
        },
        {
          id: "145447",
          messageContent: "Đéo!",
          time: "15:58",
          sender_id: "2",
          receiver_id: "1",
        },
      ],
    },
  ];
  const { userId } = useAuth();
  sessionStorage.setItem("userId", userId!);
  const [chatBoxData, setChatBoxData] = useState<ChatBoxProps[]>(testDatas);
  const [friendId, setFriendId] = useState("");
  useEffect(() => {
    if (!!sessionStorage.getItem("userId")) {
      const channelName = `private-chat-${[
        sessionStorage.getItem("userId"),
        friendId,
      ]
        .sort()
        .join("-")}`;
      pusherClient.subscribe(channelName);
      console.log("Has subscribed: ", channelName);

      pusherClient.bind(
        "upcoming-message",
        (data: { message: MessageContent }) => {}
      );
      return () => pusherClient.unsubscribe(channelName);
    }
    console.log("You are not authenticated");
  }, [friendId]);

  const [chatData, setChatData] = useState(testDatas[0]);
  return (
    <main className="flex-1 h-1/2 flex-col items-center justify-between p-0 gap-4 relative">
      <div className="relative w-screen h-full flex-1 border-4 message-page-wrapper flex flex-col sm:flex-row">
        <div className="message-list h-auto w-screen sm:w-1/4 flex flex-col ">
          <SearchBox></SearchBox>
          <div className="messagebox-list sm:h-except-navbar flex sm:flex-col overflow-auto scrollbar-thin">
            {testDatas.map((data, index) => (
              <div
                onClick={() => {
                  setChatData(data);
                  setFriendId(data.receiverInfo.id);
                  console.log(data.receiverInfo.id);
                }}
                key={index}
              >
                <MessageBox {...data}></MessageBox>
              </div>
            ))}
          </div>
        </div>
        <div className="sm:flex-1 chat-box h-full sm:w-auto sm:h-except-navbar  flex flex-col transition">
          <ChatBox {...chatData}></ChatBox>
          <MessageTyping></MessageTyping>
        </div>
      </div>
    </main>
  );
}
