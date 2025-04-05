"use client";

import { useState } from "react";
import Link from "next/link";

const SubmitResumePage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (!selectedFile) {
      setUploadStatus("Please select a file.");
      return;
    }

    setUploadStatus("Uploading...");

    try {
      const formData = new FormData();
      formData.append("submit-resume", selectedFile); // Correct key name

      const userId = "67e6e9a846db7a0f471f9c35"; // Hardcoded user ID for testing

      if (userId) {
        formData.append("userId", userId); // Include userId
      } else {
        setUploadStatus("Upload failed: User ID not found.");
        return;
      }

      const response = await fetch("http://localhost:5000/api/upload-resume", {
        // Full backend URL
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setUploadStatus("Resume uploaded successfully!");
        // Optionally, you can redirect the user or update UI upon success
      } else {
        const errorData = await response.json();
        setUploadStatus(
          `Upload failed: ${errorData.message || "An error occurred."}`
        );
      }
    } catch (error) {
      console.error("Error uploading resume:", error);
      setUploadStatus("Upload failed: Could not connect to the server.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-purple-50 py-12 px-4 sm:px-6 lg:px-8 bg-[url('/grid.svg')] bg-repeat">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">
          Submit Your Resume
        </h2>
        <p className="text-gray-700 mb-4">
          Please upload your resume file here. We support PDF and DOC/DOCX
          formats.
        </p>
        <div className="mb-4">
          <label
            htmlFor="resume-upload"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Choose File:
          </label>
          <input
            type="file"
            id="resume-upload"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx"
          />
        </div>
        <button
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-md focus:outline-none focus:shadow-outline"
          onClick={handleFileUpload}
          disabled={uploadStatus === "Uploading..."}
        >
          {uploadStatus === "Uploading..." ? "Uploading..." : "Upload Resume"}
        </button>
        {uploadStatus && (
          <p
            className={`mt-4 text-sm ${
              uploadStatus.startsWith("Upload failed")
                ? "text-red-500"
                : "text-green-500"
            }`}
          >
            {uploadStatus}
          </p>
        )}
        <p className="mt-6 text-gray-500 text-xs italic">
          By uploading your resume, you agree to our privacy policy.
        </p>
        <div className="mt-4">
          <Link
            href="/chat?hasResume=true"
            className="text-purple-600 hover:underline text-sm"
          >
            Go back to chat (without uploading)
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SubmitResumePage;
