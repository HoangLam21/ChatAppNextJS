import MessageBox from "@/components/MessageBox";
import MessageBoxHeader from "@/components/MessageBoxHeader";
import SearchBox from "@/components/SearchBox";
import { MessageBoxProps } from "@/types/message-props";

export default function Home() {
  const testMessage: MessageBoxProps = {
    avatar: "/UserAvatar.jpg",
    name: "CamLanSuk",
    recentMessage: "Nhan cai gi?????",
    timeRecentMessage: "14:54",
    isOnline: true,
  };
  const times = [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-0 gap-4">
        <div className=" w-screen h-screen border-4 message-page-wrapper flex flex-row">
          <div className="message-list h-screen w-screen flex flex-col ">
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
          <div className="chat-box"></div>
        </div>
        <div className="">Message</div>
      </main>
    </div>
  );
}
