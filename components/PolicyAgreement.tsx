
import { ContentMonoFuncProps, ContentProps } from "@/types/auth-props";
import { Checkbox } from "@nextui-org/react";
import Link from "next/link";
const PolicyAgreement = (props: ContentMonoFuncProps) => {
  return (
    <div className="check-box-group flex gap-1">
      <p className="text-white">{props.content}</p>
      <Link href={props.nav_link}>
        <p className="text-primary-500 font-semibold underline hover:-translate-y-1">
          {props.function}
        </p>
      </Link>
      <Checkbox color="secondary" radius="md" size="md"></Checkbox>
    </div>
  );
};
export default PolicyAgreement;
