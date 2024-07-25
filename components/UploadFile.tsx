"use client";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { ToggleState } from "@/types/icon-props";

const UploadFile = (props: ToggleState) => {
  return props.isOpen ? (
    <div className="upload-wrap w-[300px] h-[300px] rounded-md shadow-2xl absolute translate-y-40 z-50 bg-white flex flex-col justify-center items-center transition-all">
      <div className="upload-header flex justify-between w-full bg-primary-500 text-text-w p-4 font-semibold text-lg">
        <p>Upload your image</p>
        <Image
          onClick={() => {
            if (props.isOpen) {
              props.setIsOpen(!props.isOpen);
            }
          }}
          className="hover:scale-95 transition cursor-pointer"
          src="/assets/icons/WCancleIcon.png"
          alt="cancle"
          width={30}
          height={20}
        ></Image>
      </div>
      <input
        type="file"
        placeholder="Chose Your Image"
        className="p-5 flex-1"
      />
      <Button color="secondary" className="w-full rounded-none">
        Set new Avatar
      </Button>
    </div>
  ) : null;
};
export default UploadFile;
