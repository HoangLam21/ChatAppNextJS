import AuthCheckBox from "@/components/AuthCheckbox";
import { Button } from "@nextui-org/react";

const SignUp = () => {
  return (
    <form action="" className="auth-form sign-up-form ">
      <h1 className="login-title auth-header-title">Sign Up</h1>

      <AuthCheckBox content="Already have an account?"></AuthCheckBox>
    </form>
  );
};

export default SignUp;
