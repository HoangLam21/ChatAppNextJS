export interface MessageBoxProps {
  avatar: string;
  name: string;
  recentMessage: string;
  timeRecentMessage: string;
  isOnline: boolean;
}
export interface ReceiverInfo {
  avatar: string;
  name: string;
  isOnline: boolean;
}
export interface MessageContent {
  id: string;
  messageContent: string;
  time: string;
  isReceiver: boolean;
  avatar: string;
}
export interface MessageListOfAChat {
  messages: MessageContent[];
}
export interface ChatBoxProps{
  receiverInfo:ReceiverInfo,
  messages:MessageListOfAChat
}
