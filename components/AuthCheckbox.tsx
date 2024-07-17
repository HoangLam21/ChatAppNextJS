import { CheckBoxProps } from "@/types/auth-props";
import { Checkbox } from "@nextui-org/react";
const AuthCheckBox = (props: CheckBoxProps) => {
  return (
    <div className="check-box-group flex ">
      <Checkbox color="secondary" radius="md" size="md"></Checkbox>
      <p className="text-white">{props.content}</p>
    </div>
  );
};
export default AuthCheckBox;
