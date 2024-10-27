import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "afcf4fe3-656d-427c-8303-1d322a6af46b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
     
      setResult(data.message);
    }
  };
  return (
    <section
      id="contact"
      className="h-auto w-full py-10 md:py-14 lg:24 my-5 md:my-7 lg:my-12 overflow-hidden"
    >
      <div className="w-full flex flex-col md:flex-row lg:flex-row justify-between gap-5">
        <div className="w-full flex flex-col px-5">
          <h1 className="text-xl font-bold text-white my-2">Lets connect</h1>
          <p className="text-[#ADB7BE] mb-4 max-w-md">
            I'm currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I'll try
            my best to get back to you!
          </p>
          <div className="flex gap-4 w-full">
            <a href="https://github.com/nanakwametuffour" className="text-4xl">
              <FaGithub className="" />
            </a>
            <a
              href="https://www.linkedin.com/in/nana-kwame-b984b62a8/"
              className="text-4xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="w-full max-w-6xl mx-auto px-5 z-20">
          <form onSubmit={onSubmit} className="flex flex-col">
            <div className="py-2">
              <label
                for="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full p-3 text-base bg-[#18191E] focus:outline-none border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 rounded-lg"
                placeholder="exmple@gmail.com"
              />
            </div>
            <div className="py-2">
              <label
                for="subject"
                className="text-white block mb-2 text-sm font-medium"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                className="w-full p-3 text-base bg-[#18191E] focus:outline-none border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 rounded-lg"
                placeholder="just saying hi"
              />
            </div>
            <div className="py-2">
              <label
                for="message"
                className="text-white block mb-2 text-sm font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                required
                className="w-full p-3 text-base bg-[#18191E] focus:outline-none border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 rounded-lg"
                placeholder="Lets talk about..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-3 rounded-lg mt-2 active:scale-105 duration-300"
            >
              Send Message
            </button>
          </form>
          <span className="flex items-center mt-2">{result}</span>
        </div>
      </div>
    </section>
  );
}
