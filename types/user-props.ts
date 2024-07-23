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
  phoneNumber: string;
  email: string;
  description: string;
  personalPoint: Number;
}

export interface FriendsInfoProps {
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
  phoneNumber: string;
  email: string;
  personalPoint: Number;
  myRelation: string;
}
