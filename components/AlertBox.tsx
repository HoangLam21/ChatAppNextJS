import { AlertBoxProps } from "@/types/function-props";
import { Button } from "@nextui-org/react";
import Image from "next/image";

const AlertBox = (props: AlertBoxProps) => {
  return (
    <div className="alert-box-wrap flex flex-col items-center justify-center p-7 bg-primary-100 shadow-lg rounded-3xl gap-4 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
      <Image src={props.icon} alt="alert" width={100} height={100}></Image>
      <h3 className="text-xl font-bold text-primary-500">{props.message}</h3>
      <div className="flex gap-6">
        <Button
          onClick={() => props.setIsOpen(!props.isOpen)}
          className="font-semibold text-medium"
          color="default"
        >
          Back
        </Button>
        <Button
          onClick={() => props.do()}
          className="font-semibold text-medium"
          color="danger"
        >
          Yes
        </Button>
      </div>
    </div>
  );
};
export default AlertBox;
