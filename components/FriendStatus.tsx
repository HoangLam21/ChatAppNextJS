import { Button } from "@nextui-org/react";

const FriendStatus: React.FC<{ relation: string }> = ({ relation })  => {
  switch (relation) {
    case "friend":
      return (
        <Button color="secondary" className="text-sm font-semibold sm:text-medium">
          Unfriend
        </Button>
      );
    case "stranger":
      return (
        <Button color="secondary" className="text-sm font-semibold sm:text-medium">
          Add Friend
        </Button>
      );
    case "request":
      return (
        <Button color="secondary" className="text-sm font-semibold sm:text-medium">
          Accept
        </Button>
      );
    case "requested":
      return (
        <Button color="secondary" className="text-medium font-semibold">
          Requested
        </Button>
      );
    default:
      return <h3 className="text-red-700">This account is not legacy</h3>;
  }
};
export default FriendStatus;
