import React from "react";
import { FaLinkedinIn, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";
import { SectionWrapper } from "../hoc";

const socialLinks = [
  {
    href: import.meta.env.VITE_LINKEDIN_LINK,
    icon: <FaLinkedinIn />,
    textColor: "text-blue-500",
    hoverColor: "hover:text-blue-500",
  },
  {
    href: import.meta.env.VITE_INSTAGRAM_LINK,
    icon: <FaInstagram />,
    textColor: "text-pink-500",
    hoverColor: "hover:text-pink-500",
  },
  {
    href: import.meta.env.VITE_GITHUB_LINK,
    icon: <FaGithub />,
    textColor: "text-gray-900",
    hoverColor: "hover:text-gray-500",
  },
  {
    href: import.meta.env.VITE_TWITTER_LINK,
    icon: <FaTwitter />,
    textColor: "text-blue-400",
    hoverColor: "hover:text-blue-400",
  },
];

const LetsConnect = () => {
  return (
    <div>
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-center mt-10">
          Let's Connect
        </h1>
        <p className="text-sm md:text-lg font-light text-center text-gray-600 dark:text-gray-400 mt-4">
          Feel free to reach out and connect with me on social media!
        </p>
      </div>
      <div className="flex justify-center">
        <ul className="flex flex-wrap justify-center mt-6 md:mt-10 space-x-6 md:space-x-10">
          {socialLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-500 dark:text-gray-400 text-xl transition-colors duration-300 ${link.hoverColor}`}
              >
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SectionWrapper(LetsConnect, "letsconnect");
