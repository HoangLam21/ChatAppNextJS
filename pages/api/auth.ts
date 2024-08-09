import { NextApiRequest, NextApiResponse } from "next";
import { getAuthId } from "@/lib/utils/auth"; // Đảm bảo rằng module này chỉ dùng trên server

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const id = getAuthId(); // Chỉ chạy trên server
      console.log("Workinggggggggggggggg");
      return res.status(200).json({ userId: id });
    } catch (error) {
      return res.status(500).json({ error: "Failed to retrieve user ID" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
};
export default handler;
