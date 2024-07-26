"use client";
import { createInfo } from "@/lib/actions/info.action";
import { randomAvatar } from "@/lib/utils/image";
import {
  Button,
  ButtonGroup,
  DatePicker,
  Input,
  RadioGroup,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import {
  startOfWeek,
  startOfMonth,
  getLocalTimeZone,
  today,
} from "@internationalized/date";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { genderVals } from "@/constants/selections";
const CreateProfile = () => {
  let defaultDate = today(getLocalTimeZone());
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nickName, setNickName] = useState("");
  const [gender, setGender] = useState("male");
  const [birthday, setBirthday] = useState(defaultDate);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const imageURL = "/assets/default-avatars/" + randomAvatar();
  const profileData = {
    firstName,
    lastName,
    nickName,
    gender,
    birthday: birthday.toString(),
    phoneNumber,
    email,
    address,
  };
  const handleSelectionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setGender(e.target.value);
  };
  const handleSubmit = () => {
    createInfo(profileData);
  };

  return (
    <div className="create-profile-wrap text-medium w-[350px] sm:w-[600px] height-auto flex flex-col items-center justify-center gap-2 p-6 rounded-2xl ">
      <h1 className="text-2xl text-primary-500 font-extrabold">
        Profile Register
      </h1>
      <Image src={imageURL} alt="def-ava" width={120} height={120}></Image>
      <div className="flex gap-2 w-full">
        <Input
          color="secondary"
          label="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        ></Input>
        <Input
          color="secondary"
          label="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        ></Input>
      </div>
      <Input
        color="secondary"
        label="Nick Name"
        value={nickName}
        onChange={(e) => setNickName(e.target.value)}
      ></Input>
      <Select
        color="secondary"
        label="Gender"
        className=""
        selectedKeys={[gender]}
        onChange={handleSelectionChange}
      >
        {genderVals.map((genderVal) => (
          <SelectItem key={genderVal.key}>{genderVal.label}</SelectItem>
        ))}
      </Select>
      <DatePicker
        label="Birth date"
        pageBehavior="single"
        value={birthday}
        onChange={setBirthday}
      />
      <Input
        color="secondary"
        label="Phone Number"
        type="number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      ></Input>
      <Input
        color="secondary"
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></Input>
      <Input
        color="secondary"
        label="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      ></Input>
      <Button
        className="mt-2 text-xl font-bold p-7"
        color="secondary"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </div>
  );
};
export default CreateProfile;
