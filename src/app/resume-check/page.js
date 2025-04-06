"use client";

import Link from "next/link";
import { useState } from "react";

const ResumeCheckPage = () => {
  const [hasResume, setHasResume] = useState(null);

  const handleOptionChange = (value) => {
    setHasResume(value);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-md rounded-lg p-12 max-w-xl w-full min-h-[400px]">
        <h2 className="text-2xl font-bold text-purple-700 mb-10 text-center">
          Do you already have a resume?
        </h2>
        <div className="flex flex-col space-y-8">
          <label className="flex items-center space-x-6">
            <input
              type="radio"
              name="hasResume"
              value="yes"
              className="form-radio h-6 w-6 text-purple-600 focus:ring-purple-500 border-gray-300"
              onChange={() => handleOptionChange("yes")}
              checked={hasResume === "yes"}
            />
            <span className="text-lg text-gray-700">Yes, I have a resume</span>
          </label>
          <label className="flex items-center space-x-6">
            <input
              type="radio"
              name="hasResume"
              value="no"
              className="form-radio h-6 w-6 text-purple-600 focus:ring-purple-500 border-gray-300"
              onChange={() => handleOptionChange("no")}
              checked={hasResume === "no"}
            />
            <span className="text-lg text-gray-700">
              No, I don't have a resume
            </span>
          </label>
        </div>
        {hasResume === "yes" && (
          <Link href="/submit-resume" className="w-full mt-10 block">
            <button className="w-full bg-purple-300 hover:bg-purple-400 text-white font-bold py-3 rounded-md focus:outline-none focus:shadow-outline">
              Proceed to Upload
            </button>
          </Link>
        )}
        {hasResume === "no" && (
          <Link href="/start" className="w-full mt-10 block">
            <button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 rounded-md focus:outline-none focus:shadow-outline">
              Let's Create One
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ResumeCheckPage;
