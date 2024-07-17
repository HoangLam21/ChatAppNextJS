"use client";
import AuthCheckBox from "@/components/AuthCheckbox";
import { EyeFilledIcon } from "@/components/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/components/EyeSlashFilledIcon";
import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import React from "react";
const Login = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <form action="" className="auth-form login-form ">
      <h1 className="login-title auth-header-title">Login</h1>
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
      <button className="log-btn btn-1st-type">Login</button>
      <AuthCheckBox content="Forgot your password?"></AuthCheckBox>
    </form>
  );
};

export default Login;
