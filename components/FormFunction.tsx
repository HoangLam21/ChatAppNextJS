import { ContentMonoFuncProps } from "@/types/auth-props";
import { Checkbox } from "@nextui-org/react";
import Link from "next/link";
const FormFunction = (props: ContentMonoFuncProps) => {
  return (
    <div className="wrap flex gap-1">
      <p className="text-text-w text-sm">{props.content}</p>
      <Link href={props.nav_link}><p className="text-primary-500 font-semibold underline hover:-translate-y-1">{props.function}</p></Link>
    </div>
  );
};
export default FormFunction;
