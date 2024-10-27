import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row justify-between w-full h-auto py-7">
      <div
        
        className="flex flex-col gap-2 w-full overflow-hidden"
      >
        <div className="">
          <span className=" text-6xl text-transparent font-semibold bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Hello, I am
          </span>
        </div>
        <div className="">
          <Typewriter
            options={{
              strings: [
                "Nana Kwame Tuffour",
                "A Frontend Engineer",
                "A Backend Engineer",
              ],
              autoStart: true,
              loop: true,
              cursorClassName: "text-5xl font-bold text-[#ADB7BE]",
              wrapperClassName: "text-3xl font-bold text-[#ADB7BE]",
            }}
          />
        </div>
        <div className="">
          <p className="max-w-2xl text-[#ADB7BE] text-base sm:text-lg lg:text-xl ">
            Full Stack Engineer specializing in Express, Node.js, and React,
            dedicated to building scalable and innovative web applications.
          </p>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row gap-5 w-full items-center mt-1">
          <div className="w-full sm:w-fit">
            <button className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white px-6 py-3 w-full sm:w-fit rounded-full">
              <span className="p-2 capitalize">hire me</span>
            </button>
          </div>
          <div className="w-full sm:w-fit">
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-transparent bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white">
              <span className="block text-base font-medium capitalize bg-[#121212] hover:bg-slate-800 rounded-full p-2">
                download CV
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center relative p-5">
        <div
         
          className="w-[420]  h-[320px] md:h-[420px] lg:h-[420px] max-w-lg relative mx-auto px-5 p-5 overflow-hidden flex items-center"
        >
          <div className="absolute animate-blob top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className="absolute animate-blob animation-delay-200 top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className="absolute animate-blob animation-delay-400 -bottom-20 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className=" relative flex items-center h-auto justify-center">
            <div className="rounded-full bg-[#181818]/50 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative"></div>
            <img
              src="/logo.JPG"
              alt="image"
              className="absolute w-[70%] h-[70%] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
