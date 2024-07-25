import { EditProfileProps, UserInfoProps } from "@/types/user-props";
import {
  Button,
  DatePicker,
  Input,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import Image from "next/image";

const EditProfile = (props: EditProfileProps) => {
  return (
    <div className="edit-wrap flex flex-col gap-2 absolute items-center justify-center bg-white p-10 z-50 drop-shadow-xl rounded-xl h-full w-full m-4 transtion-all animate-fadeIn">
      <button onClick={()=>props.setIsOpen(!props.isOpen)} className="bg-primary-300 rounded-full p-2 absolute z-50 top-1 left-1 hover:scale-90 transition">
        <Image
          src="/assets/icons/BackIcon.png"
          alt="back"
          width={20}
          height={20}
        ></Image>
      </button>
      <div className="flex flex-between w-full gap-2">
        <Input
          label="First Name"
          color="secondary"
          placeholder={props.firstName}
          defaultValue={props.firstName}
        ></Input>
        <Input
          label="Last Name"
          color="secondary"
          placeholder={props.lastName}
          defaultValue={props.lastName}
        ></Input>
      </div>
      <Input
        label="Nick Name"
        color="secondary"
        placeholder={props.nickName}
        defaultValue={props.nickName}
      ></Input>
      <Select color="secondary" label="Gender" className="">
        <SelectItem color="secondary" key="male" value={0}>
          Male
        </SelectItem>
        <SelectItem color="secondary" key="female" value={1}>
          Male
        </SelectItem>
        <SelectItem color="secondary" key="private" value={-1}>
          Private
        </SelectItem>
      </Select>
      <DatePicker color="secondary" label="Birthday" className="" />
      <Input
        color="secondary"
        placeholder={props.address}
        defaultValue={props.address}
      ></Input>
      <Textarea
        color="secondary"
        label="Description"
        variant="bordered"
        labelPlacement="outside"
        placeholder="Enter your description"
        defaultValue={props.description}
        className=""
      />
      <Button className="mt-4" color="secondary">
        Update Profile
      </Button>
    </div>
  );
};
export default EditProfile;
