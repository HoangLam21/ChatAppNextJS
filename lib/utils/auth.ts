import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export const getAuthId = () => {
  const { userId } = auth();
  if (!userId) redirect("/log-in");
  return userId;
};
