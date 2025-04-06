"use client";
import React, { useState, useEffect } from "react";

const RoadmapPage = () => {
  const [roadmapData, setRoadmapData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const roadmapId = localStorage.getItem("generatedRoadmapId");
    if (roadmapId) {
      const fetchRoadmap = async () => {
        setLoading(true);
        setError(null);
        try {
          const response = await fetch(
            `http://localhost:5000/api/roadmaps/${roadmapId}`
          );
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(
              errorData.message || "Failed to fetch roadmap details"
            );
          }
          const data = await response.json();
          setRoadmapData(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchRoadmap();
    } else {
      setError("Roadmap ID not found in local storage.");
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (roadmapData?.description) {
      const parsedSections = [];
      const headingRegex =
        /(##|###|####)\s+(.*)\n([\s\S]*?)(?=(##|###|####|$))/g;
      let match;

      while ((match = headingRegex.exec(roadmapData.description)) !== null) {
        const level = match[1];
        const title = match[2]?.trim();
        const content = match[3]?.trim();
        parsedSections.push({ level, title, content });
      }
      if (
        parsedSections.length === 0 &&
        roadmapData.description.trim() !== ""
      ) {
        parsedSections.push({
          level: "##",
          title: "Overview",
          content: roadmapData.description.trim(),
        });
      }

      setSections(parsedSections);
    }
  }, [roadmapData]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-purple-50">
               {" "}
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
             {" "}
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-purple-50">
               {" "}
        <div className="bg-white shadow-md rounded-lg px-8 py-6">
                   {" "}
          <h2 className="text-xl font-bold text-red-500 mb-4">Error</h2>       
            <p className="text-gray-700">{error}</p>       {" "}
        </div>
             {" "}
      </div>
    );
  }

  if (!roadmapData) {
    return (
      <div className="flex justify-center items-center h-screen bg-purple-50">
               {" "}
        <div className="bg-white shadow-md rounded-lg px-8 py-6">
                   {" "}
          <h2 className="text-xl font-bold text-gray-700 mb-4">
                        Roadmap Not Found          {" "}
          </h2>
                    <p className="text-gray-600">No roadmap data available.</p> 
               {" "}
        </div>
             {" "}
      </div>
    );
  }

  const renderStepWithBold = (step) => {
    return step.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  };

  return (
    <div className="bg-purple-50 min-h-screen py-6">
      {" "}
      {/* Removed mt-8 */}     {" "}
      <div className="container mx-auto p-4 bg-white shadow-md rounded-lg max-w-2xl">
               {" "}
        <h1 className="text-2xl font-bold text-purple-700 mb-4 text-center">
                    {roadmapData.title || "Personalized Learning Roadmap"}     
           {" "}
        </h1>
               {" "}
        {sections.length > 0 ? (
          sections.map((section, index) => (
            <div
              key={index}
              className="mb-6 p-4 rounded-lg shadow-md border border-purple-200 bg-purple-100"
            >
                           {" "}
              {section.title && (
                <>
                                   {" "}
                  {section.level === "##" && (
                    <h2 className="text-2xl font-bold text-purple-700 mb-3">
                                            {section.title}                   {" "}
                    </h2>
                  )}
                                   {" "}
                  {section.level === "###" && (
                    <h3 className="text-xl font-bold text-purple-600 mb-2">
                                            {section.title}                   {" "}
                    </h3>
                  )}
                                   {" "}
                  {section.level === "####" && (
                    <h4 className="text-lg font-bold text-purple-500 mb-1">
                                            {section.title}                   {" "}
                    </h4>
                  )}
                                 {" "}
                </>
              )}
                           {" "}
              <div className="space-y-2">
                               {" "}
                {section.content
                  .split("\n\n")
                  .filter((item) => item.trim() !== "")
                  .map((step, stepIndex) => (
                    <div
                      key={stepIndex}
                      className="py-2 px-3 rounded-lg bg-white shadow-sm border border-gray-200"
                    >
                                           {" "}
                      <p
                        className="text-gray-800"
                        dangerouslySetInnerHTML={{
                          __html: renderStepWithBold(step),
                        }}
                      />
                                         {" "}
                    </div>
                  ))}
                             {" "}
              </div>
                         {" "}
            </div>
          ))
        ) : (
          <div
            className="prose prose-sm md:prose-base lg:prose-lg max-w-none text-gray-800"
            dangerouslySetInnerHTML={{
              __html: roadmapData.description.replace(
                /\*\*(.*?)\*\*/g,
                "<strong>$1</strong>"
              ),
            }}
          />
        )}
             {" "}
      </div>
         {" "}
    </div>
  );
};

export default RoadmapPage;
