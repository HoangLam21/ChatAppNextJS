"use client";
import { randomAvatar } from "@/lib/utils/image";
import {
  Button,
  DatePicker,
  Input,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import Image from "next/image";

const CreateProfile = () => {
  const imageURL = "/assets/default-avatars/" + randomAvatar();
  const genders = [
    {
      key: "male",
      label: "Male",
    },
    {
      key: "female",
      label: "Female",
    },
    {
      key: "secret",
      label: "Secret",
    },
  ];
  return (
    <div className="create-profile-wrap text-medium w-[350px] sm:w-[600px] height-auto flex flex-col items-center justify-center gap-2 bg-white p-6 rounded-2xl ">
      <h1 className="text-2xl text-primary-500 font-extrabold">
        Profile Register
      </h1>
      <Image src={imageURL} alt="def-ava" width={120} height={120}></Image>
      <div className="flex gap-2 w-full">
        <Input color="secondary" label="First Name"></Input>
        <Input color="secondary" label="Last Name"></Input>
      </div>
      <Input color="secondary" label="Nick Name"></Input>
      <Select color="secondary" label="Gender" className="">
        {genders.map((gender) => (
          <SelectItem key={gender.key}>{gender.label}</SelectItem>
        ))}
      </Select>
      <DatePicker color="secondary" label="Birthday" className="" />
      <Input color="secondary" label="Phone Number" type="number"></Input>
      <Input color="secondary" label="Email" type="email"></Input>
      <Input color="secondary" label="Address"></Input>
      <Button className="mt-2 text-xl font-bold p-7" color="secondary">
        Submit
      </Button>
    </div>
  );
};
export default CreateProfile;
