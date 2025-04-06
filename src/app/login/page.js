"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { WordRotate } from "@/components/ui/word-rotate";
import Accordion from "@/components/ui/accordian";
import { ReactLenis } from "lenis/react";

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
            <div className="flex justify-center flex-col ml-0 md:ml-[5vw] lg:ml-[10vw] gap-1 mt-16">
              <p className="text-[#571b98] font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                Everything you{" "}
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
                <Link href={"/start"}>
                  <button className="my-3 font-bold bg-purple-300 rounded-full p-3 md:p-4 cursor-pointer">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-center flex-col mx-auto mt-8 md:mt-0 md:ml-[5vw] md:m-10">
              <img
                data-aos="flip-left"
                className="mt-8 md:mt-20 rounded-xl w-full max-w-md md:max-w-lg"
                src="/Road.png"
                alt="homepage image"
              />
            </div>
          </section>

          {/* CHAT SECTION */}
          <section className="bg-[#4c1f79] min-h-[100vh] m-4 sm:m-6 md:m-10 rounded-xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
            <div className="flex items-center justify-center flex-col order-2 md:order-1 h-full py-6 md:py-0">
              <Link href="/">
                <img
                  data-aos="flip-right"
                  className="m-4 md:m-8 rounded-xl w-[90%] max-w-md md:max-w-full object-contain"
                  src="/Resume.png"
                  alt="homepage image"
                />
              </Link>
            </div>

            <div className="flex justify-center flex-col order-1 md:order-2 mx-4 md:mx-8 gap-1 py-8 md:py-0">
              <p className="text-pink-200 font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                Chat and ask
              </p>
              <p className="text-pink-200 font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                us about your goal in
              </p>
              <p className="text-pink-200 font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                minutes...
              </p>
              <p className="text-pink-200 text-base md:text-lg lg:text-xl my-4">
                Meet our smart chatbot – your instant learning guide! Whether
                you’re confused about which domain to choose or what skills to
                learn next, just start a chat and we’ll help you figure it out
                in minutes. It’s fast, friendly, and fully personalized. No
                forms, no stress – just tell us your interest, and we’ll handle
                the rest!
              </p>
              <div className="input-group">
                <Link href="/resume-check">
                  <button className="my-2 font-bold bg-pink-100 rounded-full p-3 md:p-5 cursor-pointer">
                    Chat with AI
                  </button>
                </Link>
              </div>
            </div>
          </section>

          {/* TRUSTED BY SECTION */}
          <section className="min-h-[100vh] items-center justify-center px-4 sm:px-6 md:px-8 pb-6 md:pb-16">
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
                  <img
                    src="/ipshita_m.jpg"
                    alt="Ip"
                    className="aspect-square w-[150px] sm:w-[180px] md:w-[200px] rounded-[4px]"
                  />
                  <img
                    src="/krish_m.jpg"
                    alt="Krish"
                    className="aspect-square w-[150px] sm:w-[180px] md:w-[200px] rounded-[4px]"
                  />
                  <img
                    src="/rachit_m.png"
                    alt="Rachit"
                    className="aspect-square w-[150px] sm:w-[180px] md:w-[200px] rounded-[4px]"
                  />
                  <img
                    src="/kohli_m.jpg"
                    alt="Kohli"
                    className="aspect-square w-[150px] sm:w-[180px] md:w-[200px] rounded-[4px]"
                  />
                  <img
                    src="/rohit_m.png"
                    alt="Rohit"
                    className="aspect-square w-[150px] sm:w-[180px] md:w-[200px] rounded-[4px]"
                  />
                  <img
                    src="/kd_m.jpg"
                    alt="KD"
                    className="aspect-square w-[150px] sm:w-[180px] md:w-[200px] rounded-[4px]"
                  />
                </InfiniteSlider>
              </div>
              <Link href="/mentors">
                <div className="input-group mb-2 md:my-8">
                  <button className="font-bold bg-purple-300 shadow-purple-900 rounded-full p-3 md:p-5 cursor-pointer">
                    Explore All Plans
                  </button>
                </div>
              </Link>
            </div>
          </section>

          {/* FAQ SECTION */}
          <section className="bg-[#4c1f79] min-h-[100vh] px-4 sm:px-6 md:px-8 mt-2 md:mt-0">
            <div className="flex justify-center flex-col gap-1 py-6 md:py-10">
              <p className="text-pink-200 text-center my-4 md:my-16 font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                Got questions?
              </p>
              <div className="max-w-4xl mx-auto w-full">
                <Accordion />
              </div>
            </div>
          </section>
        </main>
      </ReactLenis>
    </>
  );
};

export default page;
