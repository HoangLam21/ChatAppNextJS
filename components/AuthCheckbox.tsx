import { ContentProps } from "@/types/auth-props";
import { Checkbox } from "@nextui-org/react";
const AuthCheckBox = (props: ContentProps) => {
  return (
    <div className="check-box-group flex gap-1">
      <p className="text-white">{props.content}</p>
      <Checkbox color="secondary" radius="md" size="md"></Checkbox>
    </div>
  );
};
export default AuthCheckBox;
