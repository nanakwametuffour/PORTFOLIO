import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full border-t border-t-[#33353F]  text-white relative h-auto py-12 -z-1">
      <div className=" absolute w-72 h-72 bg-yellow-200/15 hover:bg-violet-500/15 cursor-pointer -top-32 rounded-full -z-1 overflow-hidden">
        <div className="absolute animate-blob  top-12 left-30 w-32 h-32  bg-purple-500 rounded-full mix-blend-multiply filter blur-xl "></div>
        <div className="absolute animate-blob animation-delay-200    top-12 right-4 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply  filter blur-xl"></div>
        <div className="absolute animate-blob animation-delay-400    -bottom-3 left-40 w-32 h-32 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>
      <div className="  w-full relative flex justify-between items-center h-auto">
        <h1>NANAKWAME</h1>
        <p> &copy; All rights reserved.</p>
      </div>
    </footer>
  );
}
