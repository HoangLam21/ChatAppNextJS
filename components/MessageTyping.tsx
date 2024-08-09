import { Button, Input } from "@nextui-org/react";

const MessageTyping = () => {
  return (
    <div className="message-typing-wrapper place-self-end ml-auto flex gap-2 w-full p-2 sticky">
      <Input
        type="text"
        placeholder="Type message..."
        className="input-message bg-primary-100 w-full p-2 rounded-xl border-2 focus:outline-primary-200 transition hover:border-2 hover:border-primary-200"
      />
      <Button className="bg-primary-500 text-text-w font-bold" content="Send">
        Send
      </Button>
    </div>
  );
};
export default MessageTyping;
