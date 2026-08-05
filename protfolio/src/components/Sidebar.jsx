import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import image from "../assets/image.png"
import FirstPageIcon from '@mui/icons-material/FirstPage';

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from '@mui/icons-material/Info';
import CodeIcon from "@mui/icons-material/Code";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import LastPageIcon from '@mui/icons-material/LastPage';


const Sidebar = () => {
    const [expand, setExpand] = useState(false)

    return (
        <aside className={`fixed top-0 left-0 h-screen ${expand ? "w-54" : "w-20"}`}>
            <nav className='h-full flex flex-col border-r bg-gray-800'>
                <div className={`p-2 pb-4 flex ${expand ? "" : "flex-col"} items-center justify-between`}>
                    <div className='flex flex-col justify-between items-center flex-shrink-0'>
                        <img src={image} alt="error" className={`${expand ? "w-20 h-20" : "w-15 h-15"} rounded-md`} />
                        <span className={`block text-amber-50 ${expand ? "" : "hidden"}`}>Dhiraj Khandare</span>
                    </div>
                    <button onClick={() => setExpand(curr => !curr)}>
                        {
                            expand
                                ?
                                <FirstPageIcon
                                    sx={{ fontSize: 40, cursor: "pointer", color: "white" }}
                                    className='hover:bg-indigo-500 rounded-full'
                                />
                                :
                                <LastPageIcon
                                    sx={{ fontSize: 40, cursor: "pointer", color: "white" }}
                                    className='hover:bg-indigo-500 rounded-full'
                                />
                        }


                    </button>
                </div>

                <ul className="flex-1 px-3 mt-4 text-white">

                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `flex items-center gap-3 p-3 rounded-lg cursor-pointer ${isActive ? "bg-indigo-600" : "hover:bg-indigo-600"
                            }`
                        }
                    >
                        <HomeIcon />
                        {expand && <span>Home</span>}
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `flex items-center gap-3 p-3 rounded-lg cursor-pointer ${isActive ? "bg-indigo-600" : "hover:bg-indigo-600"
                            }`
                        }
                    >
                        <InfoIcon />
                        {expand && <span>About</span>}
                    </NavLink>

                    <NavLink
                        to="/skills"
                        className={({ isActive }) =>
                            `flex items-center gap-3 p-3 rounded-lg cursor-pointer ${isActive ? "bg-indigo-600" : "hover:bg-indigo-600"
                            }`
                        }
                    >
                        <CodeIcon />
                        {expand && <span>Skills</span>}
                    </NavLink>



                    <NavLink
                        to="/projects"
                        className={({ isActive }) =>
                            `flex items-center gap-3 p-3 rounded-lg cursor-pointer ${isActive ? "bg-indigo-600" : "hover:bg-indigo-600"
                            }`
                        }
                    >
                        <LaptopMacIcon />
                        {expand && <span>Projects</span>}
                    </NavLink>

                    <NavLink
                        to="/education"
                        className={({ isActive }) =>
                            `flex items-center gap-3 p-3 rounded-lg cursor-pointer ${isActive ? "bg-indigo-600" : "hover:bg-indigo-600"
                            }`
                        }
                    >

                        <SchoolIcon />
                        {expand && <span>Education</span>}
                    </NavLink>


                    <NavLink
                        to="/internship"
                        className={({ isActive }) =>
                            `flex items-center gap-3 p-3 rounded-lg cursor-pointer ${isActive ? "bg-indigo-600" : "hover:bg-indigo-600"
                            }`
                        }
                    >

                        <WorkIcon />
                        {expand && <span>Internship</span>}
                    </NavLink>

                    
                    




                    <NavLink
                    to="/coursework"
                    className={({ isActive }) =>
                            `flex items-center gap-3 p-3 rounded-lg cursor-pointer ${isActive ? "bg-indigo-600" : "hover:bg-indigo-600"
                            }`
                        }>
                            <MenuBookIcon />
                        {expand && <span>Course Work</span>}
                    </NavLink>

                    <NavLink
                    to="/certifications"
                    className={({ isActive }) =>
                            `flex items-center gap-3 p-3 rounded-lg cursor-pointer ${isActive ? "bg-indigo-600" : "hover:bg-indigo-600"
                            }`
                        }
                    >
                        <WorkspacePremiumIcon />
                        {
                            expand && <span>Certifications</span>
                        }
                    </NavLink>

                    

                    <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                            `flex items-center gap-3 p-3 rounded-lg cursor-pointer ${isActive ? "bg-indigo-600" : "hover:bg-indigo-600"
                            }`
                        }
                    >
                        <ContactMailIcon />
                        {
                            expand && <span>Contact</span>
                        }
                    </NavLink>

                    

                </ul>



            </nav>
        </aside>
    )
}

export default Sidebar