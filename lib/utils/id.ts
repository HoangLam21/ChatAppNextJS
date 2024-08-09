import { v4 as uuidv4 } from "uuid";
export const generateFileName = (originalName: string) => {
  const extension = originalName.split(".").pop();
  return `${uuidv4()}.${extension}`;
};
