import React from "react";
import {
  FaHome,
  FaUser,
  FaCode,
  FaLaptopCode,
  FaGraduationCap,
  FaEnvelope,
} from "react-icons/fa";

const Sidebar = () => {

  const menuItems = [
    {
      name: "Home",
      icon: <FaHome />
    },
    {
      name: "About",
      icon: <FaUser />
    },
    {
      name: "Projects",
      icon: <FaLaptopCode />
    },
    {
      name: "Skills",
      icon: <FaCode />
    },
    {
      name: "Education",
      icon: <FaGraduationCap />
    },
    {
      name: "Contact",
      icon: <FaEnvelope />
    }
  ];


  return (
    <aside className="
      fixed 
      top-0 
      left-0 
      h-screen 
      w-1/4
      bg-gradient-to-b
      from-black
      via-slate-900
      to-black
      text-white
      shadow-2xl
      p-6
    ">

      {/* Logo */}
      <div className="text-center mb-10">

        <h1 className="
          text-3xl 
          font-bold 
          bg-gradient-to-r 
          from-cyan-400 
          to-blue-500
          bg-clip-text
          text-transparent
        ">
          Dhiraj
        </h1>

        <p className="text-slate-400 mt-2">
          Java Full Stack Developer
        </p>

      </div>


      {/* Menu */}

      <nav>

        <ul className="flex flex-col items-center space-y-4 list-none p-0">

          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Skills</li>
          <li>Contact</li>


        </ul>

      </nav>


      {/* Footer */}

      <div className="
        absolute
        bottom-6
        left-0
        w-full
        text-center
        text-slate-500
      ">
        © 2026 Dhiraj
      </div>


    </aside>
  );
};

export default Sidebar;