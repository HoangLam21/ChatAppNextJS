import { Double } from "mongodb";

export interface UserInfoProps {
  id: string;
  firstName: string;
  lastName: string;
  nickName: string;
  avatar: string;
  background: string;
  gender: boolean;
  birthday: string;
  address: string;
  description: string;
  personalPoint: Number;
}

