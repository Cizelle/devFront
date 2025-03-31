"use client";
import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
import Link from "next/link";
import { ReactLenis } from 'lenis/react'



export default function Home() {
  const words = ["better..", "modern..", "new.."];
  return (
    <ReactLenis root>
      <div className="flex justify-center flex-col gap-4 items-center my-10 h-[40vh] px-5 md:px-0 text-xs md:text-base ">
        <div className=" flex flex-col items-center justify-center">
          <h2 className="bg-clip-text text-center dark:text-black text-2xl md:text-4xl lg:text-6xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            Start something{" "}
            <span className="text-black">
              <FlipWords words={words} />
            </span>
          </h2>
          <div>
            <Link href="/register">
              <button className="p-[3px] relative my-3">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-8 py-2 bg-white text-black rounded-[6px]  relative group transition duration-200 font-semibold hover:bg-transparent hover:cursor-pointer">
                  Start Now
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-1 bg-purple-800 opacity-20" />
      <div className="text-black container mx-auto pb-32 pt-20 px-10 items-center justify-center">
        <h2 className="text-4xl font-bold text-center mb-14">We are here to help!</h2>
        <div className="flex gap-5 justify-around items-center">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/man.gif" alt="" />
            <p className="font-bold text-center">We want to help</p>
            <p className="text-center">We are available to support you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/Ai.webp" alt="" />
            <p className="font-bold text-center">Try our AI feauters</p>
            <p className="text-center">Try our new AI features and enjoy it</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/group.gif" alt="" />
            <p className="font-bold text-center">We want to collaborate</p>
            <p className="text-center">We are ready to collaborate with you😉</p>
          </div>
        </div>
      </div>
    </ReactLenis>
  );
}