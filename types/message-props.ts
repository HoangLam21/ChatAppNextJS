export interface MessageBoxProps {
  receiverInfo: ReceiverInfo;
  messages: MessageContent[];
}
export interface ReceiverInfo {
  id: string;
  avatar: string;
  name: string;
  isOnline: boolean;
}
export interface MessageContent {
  id: string;
  sender_id: string;
  receiver_id: string;
  messageContent: string;
  time: string;
}
// export interface MessageListOfAChat {
//   messages: MessageContent[];
// }
export interface ChatBoxProps {
  receiverInfo: ReceiverInfo;
  messages: MessageContent[];
}
