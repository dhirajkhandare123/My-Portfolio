import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold text-white">
            Dhiraj Khandare
          </h2>
          <p className="text-sm text-gray-400">
            Java Full Stack Developer | React.js | Spring Boot
          </p>
        </div>

        {/* Center */}
        <div className="flex gap-5">
          <a
            href="https://github.com/dhirajkhandare123"
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-400 transition"
          >
            <GitHubIcon fontSize="large" />
          </a>

          <a
            href="https://linkedin.com/in/dhirajk889"
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-400 transition"
          >
            <LinkedInIcon fontSize="large" />
          </a>

          <a
            href="mailto:dhirajkhandare2025@gmail.com"
            className="hover:text-indigo-400 transition"
          >
            <EmailIcon fontSize="large" />
          </a>
        </div>

        {/* Right */}
        <div className="text-sm text-gray-400 text-center md:text-right">
          © {new Date().getFullYear()} Dhiraj Khandare
          <br />
          All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;