"use client";
import Image from "next/image";
import { ToggleState } from "@/types/function-props";
import { ChangeEvent, useState } from "react";
import { Button } from "@nextui-org/react";
import { updateAvatar } from "@/lib/actions/info.action";

const UploadFile = (props: ToggleState) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setLoading(true);
      setError(null);
      try {
        const formData = new FormData();
        formData.append("file", file);

        const response = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        const data = await response.json();

        if (response.ok) {
          const image = {
            imgURL: data.url,
          };
          await updateAvatar(image);
        } else {
          setError(data.error);
        }
      } catch (err) {
        setError("Failed to upload image");
      } finally {
        setLoading(false);
      }
    } else {
      console.log("File not selected");
    }
  };

  return props.isOpen ? (
    <div className="upload-wrap w-[300px] h-[300px] rounded-lg shadow-2xl absolute translate-y-40 z-50 bg-white flex flex-col justify-center items-center transition-all animate-fadeIn">
      <div className="upload-header flex justify-between w-full bg-primary-500 text-text-w p-4 font-semibold text-lg rounded-t-lg">
        <p>Upload your image</p>
        <Image
          onClick={() => {
            if (props.isOpen) {
              props.setIsOpen(!props.isOpen);
            }
          }}
          className="hover:scale-95 transition cursor-pointer"
          src="/assets/icons/WCancleIcon.png"
          alt="cancel"
          width={30}
          height={20}
        />
      </div>
      <input
        type="file"
        placeholder="Choose Your Image"
        className="p-5 flex-1"
        onChange={handleImageUpload}
      />
      <Button
        color="secondary"
        className="w-full rounded-t-none rounded-b-lg"
        onClick={() => {
          const inputElement = document.querySelector(
            "input[type='file']"
          ) as HTMLInputElement;
          if (inputElement && inputElement.files && inputElement.files[0]) {
            handleImageUpload({
              target: inputElement,
            } as ChangeEvent<HTMLInputElement>);
          }
        }}
        disabled={loading}
      >
        {loading ? "Uploading..." : "Set new Avatar"}
      </Button>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  ) : null;
};

export default UploadFile;
