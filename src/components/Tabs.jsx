import { useState } from "react";
import { motion } from "framer-motion";
const tabsData = [
  {
    label: "Skills",
    content: (
      <div className="text-base lg:text-lg">
        <ul className="list-disc list-inside">
          <li>JavaScript (ES6+)</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>MongoDB</li>
          <li>Git</li>
        </ul>
      </div>
    ),
  },
  {
    label: "Education",
    content: (
      <div className="text-base lg:text-lg">
        <p>
          Bachelor of Science in Information Technology
          <br />
          Garden City University College
        </p>
      </div>
    ),
  },
  {
    label: "Certifications",
    content: (
      <div className="text-base lg:text-lg">
        <ul className="list-disc list-inside">
          <li>Meta Back-End Developer Professional Certificate</li>
          <li>Google Advanced Data Analytics</li>
          <li>Meta Front-End Developer Professional Certificate</li>
          <li>Google IT Support Professional Certificate</li>
        </ul>
      </div>
    ),
  },
];
export function Tabs() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className="w-full p-5">
      <div className="flex space-x-3 border-b overflow-hidden">
        {tabsData.map((tab, idx) => {
          return (
            <button
              
              key={idx}
              className={`py-2 border-b-4 transition-colors duration-300 ${
                idx === activeTabIndex
                  ? "border-purple-500"
                  : "border-transparent"
              }`}
              // Change the active tab on click.
              onClick={() => setActiveTabIndex(idx)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="py-4 overflow-hidden">
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            X: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
        >
          {tabsData[activeTabIndex].content}
        </motion.p>
      </div>
    </div>
  );
}