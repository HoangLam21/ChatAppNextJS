import { Double } from "mongodb";
import { DataState, ToggleState } from "./icon-props";

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
  createAt:Date
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
export interface EditProfileProps extends UserInfoProps, ToggleState {}
export interface FriendProfileProps extends FriendsInfoProps, ToggleState,DataState {}
