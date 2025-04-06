"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { WordRotate } from "@/components/ui/word-rotate";
import Accordion from "@/components/ui/accordian";
import { ReactLenis } from "lenis/react";
import { motion } from "framer-motion";
import { FaRocket } from "react-icons/fa";

const ProgressBarBlock = () => {
  const [progress, setProgress] = useState(0);
  const numRoadblocks = 5;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 150,
      easing: "ease-out",
    });
  }, []);

  const handleRoadblockCheck = (index) => {
    if (progress <= index) {
      setProgress(index + 1);
    }
  };

  const rocketPosition = (progress / numRoadblocks) * 100;

  return (
    <motion.div
      className="bg-purple-100 p-8 rounded-2xl shadow-lg mt-8 w-[90%] md:w-[80%] mx-auto"
      data-aos="zoom-in-up"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
    >
      <h2 className="text-xl font-semibold mb-4">See your progress here</h2>
      <div className="relative bg-gray-300 rounded-full h-6 overflow-hidden">
        <motion.div
          className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full rounded-full absolute top-0 left-0"
          style={{ width: `${rocketPosition}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />

        <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between items-center h-full px-2">
          {Array.from({ length: numRoadblocks + 1 }, (_, i) => (
            <div
              key={i}
              className={`absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${
                i <= progress ? "bg-green-500" : "bg-gray-500"
              }`}
              style={{ left: `${(i / numRoadblocks) * 100}%` }}
            />
          ))}
        </div>

        <motion.div
          className="absolute top-1/2 -translate-y-1/2 -ml-4 w-8 h-8 flex items-center justify-center"
          style={{ left: `${rocketPosition}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <FaRocket className="w-8 h-8" style={{ color: "#FF4500" }} />
        </motion.div>
      </div>

      <div className="mt-6 flex justify-around">
        {Array.from({ length: numRoadblocks }, (_, i) => (
          <button
            key={i}
            className={`px-4 py-2 rounded-md text-black font-semibold ${
              i < progress
                ? "bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-md hover:from-purple-600 hover:to-purple-800"
                : "bg-gradient-to-r from-purple-200 to-purple-300 text-purple-700 hover:from-purple-300 hover:to-purple-400 shadow-sm"
            }`}
            onClick={() => handleRoadblockCheck(i)}
          >
            Roadblock {i + 1}
          </button>
        ))}
      </div>
    </motion.div>
  );
};

const page = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 150,
      easing: "ease-out",
    });
  }, []);

  return (
    <>
      <ReactLenis root>
        <main>
          {/* HERO SECTION */}
          <section className="min-h-[100vh] grid grid-cols-1 md:grid-cols-2 px-4 sm:px-6 md:px-8">
            <motion.div
              className="flex justify-center flex-col ml-0 md:ml-[5vw] lg:ml-[10vw] gap-1 mt-16"
              data-aos="fade-right"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <p className="text-[#571b98] font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                Everything you
              </p>
              <p className="text-[#571b98] font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                want. Let us,
              </p>
              <p className="text-[#571b98] font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                know we will guide you.
              </p>
              <p className="text-[#571b98] text-base md:text-lg lg:text-xl my-4">
                Your learning journey, your way. Tell us your interests, goals,
                or even just your confusion — and we’ll craft a personalized
                roadmap to get you there. No more guesswork. Just clear
                direction, step by step. Start now — because the right guidance
                changes everything.
              </p>

              <div className="input-group">
                <Link href="/start">
                  <motion.button
                    className="my-3 font-bold bg-purple-300 rounded-full p-3 md:p-4 cursor-pointer transition-all duration-300 hover:scale-105"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Started
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center justify-center flex-col mx-auto mt-8 md:mt-0 md:ml-[5vw] md:m-10"
              data-aos="flip-left"
              initial={{ opacity: 0, rotate: 30 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
            >
              <img
                className="mt-8 md:mt-20 rounded-xl w-full max-w-md md:max-w-lg"
                src="/Road.png"
                alt="homepage image"
              />
            </motion.div>
          </section>

          {/* CHAT SECTION */}
          <motion.section
            className="bg-[#4c1f79] min-h-[100vh] m-4 sm:m-6 md:m-10 rounded-xl grid grid-cols-1 md:grid-cols-2 overflow-hidden"
            data-aos="fade-up"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center justify-center flex-col order-2 md:order-1 h-full py-6 md:py-0">
              <Link href="/">
                <motion.img
                  data-aos="flip-right"
                  className="m-4 md:m-8 rounded-xl w-[90%] max-w-md md:max-w-full object-contain"
                  src="/Resume.png"
                  alt="homepage image"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </div>

            <motion.div
              className="flex justify-center flex-col order-1 md:order-2 mx-4 md:mx-8 gap-1 py-8 md:py-0"
              data-aos="fade-left"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <p className="text-pink-200 font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                Build and showcase
              </p>
              <p className="text-pink-200 font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                your skills
              </p>
              <p className="text-pink-200 font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                in just a few clicks...
              </p>
              <p className="text-pink-200 text-base md:text-lg lg:text-xl my-4">
                Create a professional resume tailored to your goals. Highlight
                your achievements, projects, and skills with ease. Whether
                you're a student or a job seeker, or dont't have a resume yet.
                Don't worry we've got you covered.
              </p>
              <div className="input-group">
                <Link href="/resume-check">
                  <motion.button
                    className="my-2 font-bold bg-pink-100 rounded-full p-3 md:p-5 cursor-pointer transition-all duration-300 hover:scale-105"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Build Resume
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </motion.section>

          {/* TRUSTED BY SECTION */}
          <motion.section
            className="min-h-[100vh] items-center justify-center px-4 sm:px-6 md:px-8 pb-6 md:pb-16"
            data-aos="fade-in"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex mx-0 sm:mx-4 md:mx-12 flex-col gap-1 mt-16 md:mt-30 text-center">
              <p className="text-[#571b98] font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                The only career guide trusted by
              </p>
              <WordRotate
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#571b98]"
                words={["Students..", "Job Seekers..", "Employees.."]}
              />

              <div className="my-12 md:my-24 overflow-hidden">
                <InfiniteSlider
                  durationOnHover={100}
                  gap={20}
                  className="w-full"
                >
                  {[
                    "/ipshita_m.jpg",
                    "/krish_m.jpg",
                    "/rachit_m.png",
                    "/kohli_m.jpg",
                    "/umang_m.jpg",
                    "/kd_m.jpg",
                  ].map((src, index) => (
                    <motion.img
                      key={index}
                      src={src}
                      alt={`profile-${index}`}
                      className="aspect-square w-[150px] sm:w-[180px] md:w-[200px] rounded-[4px]"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    />
                  ))}
                </InfiniteSlider>
              </div>

              <div className="plans-section flex flex-col items-center">
                <div className="input-group mb-2 md:my-4">
                  <Link href="/mentors">
                    <motion.button
                      className="font-bold bg-purple-300 shadow-purple-900 rounded-full p-3 md:p-5 cursor-pointer transition-all duration-300 hover:scale-105"
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Study with Mentors
                    </motion.button>
                  </Link>
                </div>

                <ProgressBarBlock />
              </div>
            </div>
          </motion.section>

          {/* FAQ SECTION */}
          <motion.section
            className="bg-[#4c1f79] min-h-[100vh] px-4 sm:px-6 md:px-8 mt-2 md:mt-0"
            data-aos="fade-up"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex justify-center flex-col gap-1 py-6 md:py-10">
              <p className="text-pink-200 text-center my-4 md:my-16 font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                Got questions?
              </p>
              <div className="max-w-4xl mx-auto w-full">
                <Accordion animate={true} />
              </div>
            </div>
          </motion.section>
        </main>
      </ReactLenis>
    </>
  );
};

export default page;
