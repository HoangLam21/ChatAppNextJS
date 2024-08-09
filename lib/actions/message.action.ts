"use server";

import { pusherServer } from "@/lib/pusher";
import { MessageContent } from "@/types/message-props";

export const sendMessage = async (message: MessageContent) => {
  try {
    // Store the message inside ur db

    // 1
    pusherServer.trigger("chat-app", "upcoming-message", {
      message,
    });
  } catch (error: any) {
    throw new Error(error.message);
  }
};