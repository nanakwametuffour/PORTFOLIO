import React, { useState } from 'react'
import { motion } from 'framer-motion';
export default function Projects() {
  const [projects, setProjects] = useState(false)
  return (
    <section id="projects" className="h-auto mt-8 py-10">
      <div className="flex flex-col w-full mt-5 gap-5">
        <motion.p
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            X: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="w-full flex text-3xl font-bold justify-center"
        >
          Some of my Projects
        </motion.p>
        <div className="flex w-full justify-center gap-4 mt-3 transition-all duration-300">
          <motion.button
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              X: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            onClick={() => setProjects(true)}
            className="text-white  border-slate-600 hover:border-white rounded-full w-[30%] md:w-[20%] lg:w-[20%] border-2 px-6 py-3 text-xl"
          >
            All
          </motion.button>
          <motion.button
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              X: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            onClick={() => setProjects(false)}
            className="text-white border-[#a452f2]  rounded-full w-[30%] md:w-[20%] lg:w-[20%] border-2 px-6 py-3 text-xl hover:border-pink-500"
          >
            Web
          </motion.button>
        </div>
        {projects ? (
          <div className="w-full flex flex-col md:flex-row lg:flex-row justify-between gap-10 mt-6">
            <div className="flex flex-col gap-5 justify-center w-full">
              <div className="">
                <img
                  src="/club house.png"
                  alt=""
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4 relative overflow-hidden">
                <div className="absolute animate-blob  top-0 left-30 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl "></div>
                <div className="absolute animate-blob animation-delay-200  top-0 right-14 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply  filter blur-xl"></div>
                <div className="absolute animate-blob animation-delay-400  -bottom-20 left-40 w-32 h-32 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl"></div>
                <div className="flex flex-col gap-4 relative">
                  <h1>subject to name</h1>
                  <p className="text-[#ADB7BE]">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptatibus, totam. Aspernatur, quasi nesciunt earum at
                    fuga quia, vel consequatur neque magni
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5 justify-center w-full">
              <div className="">
                <img
                  src="/club house.png"
                  alt=""
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4 overflow-hidden relative">
                <div className="absolute animate-blob  top-0 left-30 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl "></div>
                <div className="absolute animate-blob animation-delay-200  top-0 right-14 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply  filter blur-xl"></div>
                <div className="absolute animate-blob animation-delay-400  -bottom-20 left-40 w-32 h-32 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl"></div>
                <div className="flex flex-col gap-4 relative">
                  <h1>subject to name</h1>
                  <p className="text-[#ADB7BE]">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptatibus, totam. Aspernatur, quasi nesciunt earum at
                    fuga quia, vel consequatur neque magni
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 justify-center w-full">
              <div className="">
                <img
                  src="/club house.png"
                  alt=""
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4 relative overflow-hidden">
                <div className="absolute animate-blob  top-0 left-30 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl "></div>
                <div className="absolute animate-blob animation-delay-200  top-0 right-14 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply  filter blur-xl"></div>
                <div className="absolute animate-blob animation-delay-400  -bottom-20 left-40 w-32 h-32 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl"></div>
                <div className="flex flex-col gap-4 relative">
                  <h1>subject to name</h1>
                  <p className="text-[#ADB7BE]">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptatibus, totam. Aspernatur, quasi nesciunt earum at
                    fuga quia, vel consequatur neque magni
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full flex flex-col md:flex-row lg:flex-row justify-between gap-10 mt-6">
            <div className="flex flex-col gap-5 justify-center w-full">
              <div className="overflow-hidden h-[300px]">
                <img
                  src="/yellow design.png"
                  alt=""
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4 relative overflow-hidden">
                <div className="absolute animate-blob  top-0 left-30 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl "></div>
                <div className="absolute animate-blob animation-delay-200  top-0 right-14 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply  filter blur-xl"></div>
                <div className="absolute animate-blob animation-delay-400  -bottom-20 left-40 w-32 h-32 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl"></div>
                <div className="flex flex-col gap-4 relative">
                  <h1>subject to name</h1>
                  <p className="text-[#ADB7BE]">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptatibus, totam. Aspernatur, quasi nesciunt earum at
                    fuga quia, vel consequatur neque magni
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5 justify-center w-full">
              <div className=" overflow-hidden h-[300px]">
                <img
                  src="/expedia_frontpage.jpg"
                  alt=""
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4 relative overflow-hidden">
                <div className="absolute animate-blob  top-0 left-30 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl "></div>
                <div className="absolute animate-blob animation-delay-200  top-0 right-14 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply  filter blur-xl"></div>
                <div className="absolute animate-blob animation-delay-400  -bottom-20 left-40 w-32 h-32 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl"></div>
                <div className="flex flex-col gap-4 relative">
                  <h1>subject to name</h1>
                  <p className="text-[#ADB7BE]">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptatibus, totam. Aspernatur, quasi nesciunt earum at
                    fuga quia, vel consequatur neque magni.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 justify-center w-full">
              <div className="overflow-hidden h-[300px]">
                <img
                  src="/vans.jpg"
                  alt=""
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4 relative overflow-hidden">
                <div className="absolute animate-blob  top-0 left-30 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl "></div>
                <div className="absolute animate-blob animation-delay-200  top-0 right-14 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply  filter blur-xl"></div>
                <div className="absolute animate-blob animation-delay-400  -bottom-20 left-40 w-32 h-32 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl"></div>
                <div className="flex flex-col gap-4 relative">
                  <h1>subject to name</h1>
                  <p className="text-[#ADB7BE]">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptatibus, totam. Aspernatur, quasi nesciunt earum at
                    fuga quia, vel consequatur neque magni
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
