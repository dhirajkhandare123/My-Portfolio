import React, { useState } from 'react'
import image from "../assets/image.png"
import FirstPageIcon from '@mui/icons-material/FirstPage';

import HomeIcon from "@mui/icons-material/Home";
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
        <aside className={`sticky h-screen ${expand ? "w-64" : "w-20"}`}>
            <nav className='h-full flex flex-col border-r bg-gray-800'>
                <div className={`p-2 pb-4 flex ${expand ? "" : "flex-col"} items-center justify-between`}>
                    <div className='flex flex-col justify-between items-center flex-shrink-0'>
                        <img src={image} alt="error" className={`${expand?"w-20 h-20":"w-15 h-15"} rounded-md`} />
                        <span className={`block text-amber-50 ${expand ? "": "hidden"}`}>Dhiraj Khandare</span>
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

                    <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-indigo-600 cursor-pointer">
                        <HomeIcon />
                        {
                            expand && <span>Home</span>
                        }
                        
                    </li>

                    <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-indigo-600 cursor-pointer">
                        <CodeIcon />
                        {
                            expand && <span>Skills</span>
                        }
                        
                    </li>

                    <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-indigo-600 cursor-pointer">
                        <LaptopMacIcon />
                        {
                            expand && <span>Projects</span>
                        }
                        
                    </li>

                    <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-indigo-600 cursor-pointer">
                        <SchoolIcon />
                        {
                            expand && <span>Education</span>
                        }
                        
                    </li>

                    <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-indigo-600 cursor-pointer">
                        <WorkIcon />
                        {
                            expand && <span>Internship</span>
                        }
                        
                    </li>

                    <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-indigo-600 cursor-pointer">
                        <MenuBookIcon />
                        {
                            expand && <span>Course Work</span>
                        }
                        
                    </li>

                    <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-indigo-600 cursor-pointer">
                        <WorkspacePremiumIcon />
                        {
                            expand && <span>Certifications</span>
                        }
                        
                    </li>

                    <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-indigo-600 cursor-pointer">
                        <ContactMailIcon />
                        {
                            expand && <span>Contact</span>
                        }
                        
                    </li>

                </ul>



            </nav>
        </aside>
    )
}

export default Sidebar