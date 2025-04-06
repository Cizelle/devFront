"use client";

import { useState, useEffect } from "react";

const DisplayExtractedText = () => {
  const [extractedText, setExtractedText] = useState("");
  const userId = "67e6e9a846db7a0f471f9c35";

  useEffect(() => {
    const fetchExtractedText = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/resumes/extracted/${userId}`
        );
        if (response.ok) {
          const data = await response.json();
          setExtractedText(data.extractedText || "No text extracted yet.");
        } else {
          console.error("Failed to fetch extracted text");
          setExtractedText("Error fetching extracted text.");
        }
      } catch (error) {
        console.error("Error connecting to server:", error);
        setExtractedText("Could not connect to server to fetch text.");
      }
    };

    fetchExtractedText();
  }, [userId]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-6">
      <h2 className="text-2xl font-bold mb-4">Extracted Resume Text</h2>
      <div className="bg-gray-100 rounded-md p-4 w-4/5 max-w-2xl">
        <pre className="whitespace-pre-wrap break-words font-mono text-sm">
          {extractedText}
        </pre>
      </div>
    </div>
  );
};

export default DisplayExtractedText;
