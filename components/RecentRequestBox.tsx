import { FriendProfileProps, FriendsInfoProps } from "@/types/user-props";
import FriendUserBox from "./FriendUserBox";
import { Button } from "@nextui-org/react";
import FriendStatus from "./FriendStatus";
import RequestStatus from "./RequestStatus";

const RecentRequestBox = (props: FriendProfileProps) => {
  return (
    <div
      onClick={() => {
        props.setIsOpen(!props.isOpen);
        props.setData(props.data);
      }}
      className="recent-wrap flex border-b-2 border-opacity-20 p-2 items-center justify-between gap-4 transition hover:bg-primary-100 cursor-pointer"
    >
      <FriendUserBox {...props}></FriendUserBox>
      {<RequestStatus relation={props.myRelation}></RequestStatus>}
    </div>
  );
};
export default RecentRequestBox;
