import { FriendsInfoProps } from "@/types/user-props";
import { Button } from "@nextui-org/react";
import Image from "next/image";

const RequestStatus: React.FC<{ relation: string }> = ({ relation }) => {
  switch (relation) {
    case "request":
      return (
        <Button
          color="secondary"
          startContent={
            <Image
              src="/assets/icons/AcceptRequestIcon.png"
              alt="accept"
              width={20}
              height={20}
            ></Image>
          }
        >
          Accept
        </Button>
      );
    case "requested":
      return (
        <Button
          color="secondary"
          startContent={
            <Image
              src="/assets/icons/SendRequestIcon.png"
              alt="accept"
              width={20}
              height={20}
            ></Image>
          }
        >
          Requested
        </Button>
      );
  }
};
export default RequestStatus;