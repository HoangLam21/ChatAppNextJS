import { Button, Checkbox } from "@nextui-org/react";
import Image from "next/image";
export default function Home() {
  return (
    <div>

      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Checkbox color="secondary">Secondary</Checkbox>
      <Button color="primary">Hi</Button>
      </main>
    </div>
  );
}
