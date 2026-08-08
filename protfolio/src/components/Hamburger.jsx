import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Hamburger = () => {
    const [open, setOpen] = useState(false);

    const menuItems = [
        { to: "/", label: "Home" },
        { to: "/about", label: "About" },
        { to: "/skills", label: "Skills" },
        { to: "/projects", label: "Projects" },
        { to: "/education", label: "Education" },
        { to: "/internship", label: "Internship" },
        { to: "/coursework", label: "Course Work" },
        { to: "/certifications", label: "Certifications" },
        { to: "/contact", label: "Contact" },
    ];

    return (
        <div className="md:hidden w-full">

            {/* Hamburger Button */}
            <div className="w-full flex justify-end p-3 bg-gray-800">
                <button onClick={() => setOpen(!open)}>
                    {open ? (
                        <CloseIcon
                            sx={{ fontSize: 35, color: "white" }}
                        />
                    ) : (
                        <MenuIcon
                            sx={{ fontSize: 35, color: "white" }}
                        />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="w-full bg-gray-900 text-white p-4">
                    <ul className="space-y-2 w-full">

                        {menuItems.map((item, index) => (
                            <NavLink
                                key={index}
                                to={item.to}
                                onClick={() => setOpen(false)}
                                className={({ isActive }) =>
                                    `flex p-3 rounded-lg cursor-pointer justify-center ${
                                        isActive
                                            ? "bg-indigo-600"
                                            : "hover:bg-indigo-600"
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}

                    </ul>
                </div>
            )}

        </div>
    );
};

export default Hamburger;