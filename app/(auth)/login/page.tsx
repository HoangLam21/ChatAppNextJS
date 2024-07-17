"use client";
import AuthCheckBox from "@/components/AuthCheckbox";
import ButtonType1 from "@/components/ButtonType1";
import { EyeFilledIcon } from "@/components/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/components/EyeSlashFilledIcon";
import FormFunction from "@/components/FormFunction";
import { Input } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
const Login = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <form action="" className="login-form ">
      <h1 className="login-title auth-header-title">Login</h1>
      <Input
        className="max-w-xs mb-4 mt-8"
        type="text"
        variant="bordered"
        label="PhoneNumber"
        classNames={{
          label: "text-text-w focus:text-white",
          input: "text-text-w",
          inputWrapper: "group-data-[focus=true]:border-primary-400",
        }}
      />
      <Input

        classNames={{
          label: "text-text-w focus:text-white",
          input: "text-text-w",
          inputWrapper: "group-data-[focus=true]:border-primary-400",
        }}
        label="Password"
        variant="bordered"
        endContent={
          <button
            className="focus:outline-none"
            type="button"
            onClick={toggleVisibility}
          >
            {isVisible ? (
              <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            ) : (
              <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
        }
        type={isVisible ? "text" : "password"}
        className="max-w-xs mb-4"
      />
      <ButtonType1 content="Log in"></ButtonType1>
      <AuthCheckBox content="Rememer me!"></AuthCheckBox>
      <FormFunction content="Don't have account yet?" function="Sign up" nav_link="/sign-up"></FormFunction>
      <FormFunction content="Forgot your password?" function="Click here" nav_link="/forgot-password"></FormFunction>
    </form>
  );
};

export default Login;
