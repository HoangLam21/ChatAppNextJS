"use_server";
import Pusher from "pusher-js";
import PusherServer from "pusher";
export const pusherServer = new PusherServer({
  appId: process.env.PUBLIC_PUSHER_APP_ID!,
  key: process.env.PUBLIC_PUSHER_KEY!,
  secret: process.env.PUSHER_SECRET_KEY!,
  cluster: process.env.PUSHER_CLUSTER!,
});
export const pusherClient = new Pusher("1844795", {
  cluster: "ap1",
});
