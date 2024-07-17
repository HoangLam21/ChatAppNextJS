"use client";
import { useState, useEffect } from "react";
const Policy = () => {
  const [fileContent, setFileContent] = useState("");
  useEffect(() => {
    async function fetchFile() {
      try {
        const response = await fetch("/Policy.txt");
        const text = await response.text();
        setFileContent(text);
      } catch (error) {
        console.error("Error fetching file:", error);
      }
    }
    fetchFile();
  }, []);
  return (
    <div className="long-p-wrap before-overlay">
      <p className="long-p">{fileContent}</p>
    </div>
  );
};
export default Policy;
