"use client";
import AuthCheckBox from "@/components/AuthCheckbox";
import ButtonType1 from "@/components/ButtonType1";
import { EyeFilledIcon } from "@/components/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/components/EyeSlashFilledIcon";
import FormFunction from "@/components/FormFunction";
import { Button, Input, Link, LinkIcon } from "@nextui-org/react";
import React from "react";

const SignUp = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <form action="" className="auth-form sign-up-form h-900">
      <h1 className="login-title auth-header-title">Sign Up</h1>
      <Input
        className="max-w-xs mt-8"
        type="text"
        variant="bordered"
        label="Fullname"
        classNames={{
          label: "text-text-w focus:text-white",
          input: "text-text-w",
          inputWrapper: "group-data-[focus=true]:border-primary-400",
        }}
      />
      <Input
        className="max-w-xs"
        type="Tel"
        variant="bordered"
        label="PhoneNumber"
        classNames={{
          label: "text-text-w focus:text-white",
          input: "text-text-w",
          inputWrapper: "group-data-[focus=true]:border-primary-400",
        }}
      />
      <Input
        className="max-w-xs"
        type="text"
        variant="bordered"
        label="Email"
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
        className="max-w-xs"
      />
      <Input
        classNames={{
          label: "text-text-w focus:text-white",
          input: "text-text-w",
          inputWrapper: "group-data-[focus=true]:border-primary-400",
        }}
        label="Verify Password"
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

      <ButtonType1 content="Sign up"></ButtonType1>
      <FormFunction
        content="Already have an account?"
        function="Log in"
        nav_link="/login"
      ></FormFunction>
    </form>
  );
};

export default SignUp;
