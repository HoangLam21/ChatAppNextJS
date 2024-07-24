import { FriendsInfoProps } from "@/types/user-props";
import { User } from "@nextui-org/react";

const FriendUserBox = (props: FriendsInfoProps) => {
  return (
    <div className="user-wrap h-full w-auto flex item-center font-bold">
      {" "}
      <User
        name={props.firstName + " " + props.lastName}
        description={props.nickName}
        avatarProps={{
          src: props.avatar,
          size: "lg",
        }}
      />
    </div>
  );
};
export default FriendUserBox;
