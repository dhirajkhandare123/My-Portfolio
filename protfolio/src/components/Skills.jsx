import React from 'react'


import { FaJava, FaReact, FaGitAlt, FaGithub } from "react-icons/fa6";
import { SiSpringboot, SiJavascript, SiHtml5, SiTailwindcss, SiMysql } from "react-icons/si";

import CssIcon from "@mui/icons-material/Css";

import {
    SiHibernate,
    SiSpringsecurity,
    SiJsonwebtokens,
    SiPostman,
    SiNumpy,
    SiPandas,
    SiApachetomcat

} from "react-icons/si";

import {
    FaDatabase,
    // FaJava,
    FaShieldAlt,
    FaChartBar
} from "react-icons/fa";
import Footer from './Footer';

// import { FaChartBar } from "react-icons/fa";

const Skills = () => {
    return (
        <section className="min-h-screen text-white pt-5 px-3 sm:px-5 md:px-0">
            <h1 className="font-extrabold text-white text-5xl animate-bounce sm:text-3xl md:text-4xl text-center mb-6 md:mb-10">
                My Skills
            </h1>
            
            <div className="grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 min-h-screen px-8  py-10 pb-32">

                {/* Card 1 */}
                <div className="bg-slate-800 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 p-6 flex flex-col items-center">
                    <FaJava className="text-7xl text-orange-500 mb-4" />
                    <h2 className="text-xl font-semibold">Java</h2>
                </div>

                {/* Card 2 */}
                <div className="bg-slate-800 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 p-6 flex flex-col items-center">
                    <SiSpringboot className="text-7xl text-green-500 mb-4" />
                    <h2 className="text-xl font-semibold">Spring Boot</h2>
                </div>

                {/* Card 3 */}
                <div className="bg-slate-800 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 p-6 flex flex-col items-center">
                    <FaReact className="text-7xl text-cyan-400 mb-4" />
                    <h2 className="text-xl font-semibold">React JS</h2>
                </div>

                {/* Card 4 */}
                <div className="bg-slate-800 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 p-6 flex flex-col items-center">
                    <SiJavascript className="text-7xl text-yellow-400 mb-4" />
                    <h2 className="text-xl font-semibold">JavaScript</h2>
                </div>

                {/* Card 5 */}
                <div className="bg-slate-800 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 p-6 flex flex-col items-center">
                    <SiHtml5 className="text-7xl text-orange-600 mb-4" />
                    <h2 className="text-xl font-semibold">HTML</h2>
                </div>

                {/* Card 6 */}
                <div className="bg-slate-800 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 p-6 flex flex-col items-center">
                    <CssIcon className="text-12xl text-blue-500 mb-4" sx={{
                        fontSize: 80,
                        color: "#1572B6"
                    }} />
                    <h2 className="text-xl font-semibold">CSS</h2>
                </div>

                {/* Card 7 */}
                <div className="bg-slate-800 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 p-6 flex flex-col items-center">
                    <SiTailwindcss className="text-7xl text-sky-400 mb-4" />
                    <h2 className="text-xl font-semibold">Tailwind CSS</h2>
                </div>

                {/* Card 8 */}
                <div className="bg-slate-800 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 p-6 flex flex-col items-center">
                    <SiMysql className="text-7xl text-blue-400 mb-4" />
                    <h2 className="text-xl font-semibold">MySQL</h2>
                </div>

                {/* Card 9 */}
                <div className="bg-slate-800 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 p-6 flex flex-col items-center">
                    <FaGitAlt className="text-7xl text-orange-500 mb-4" />
                    <h2 className="text-xl font-semibold">Git</h2>
                </div>

                {/* Card 10 */}
                <div className="bg-slate-800 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 p-6 flex flex-col items-center">
                    <FaGithub className="text-7xl text-white mb-4" />
                    <h2 className="text-xl font-semibold">GitHub</h2>
                </div>


                {/* Card 11 */}
                <div className="bg-slate-800 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 p-6 flex flex-col items-center">
                    <SiHibernate className="text-7xl text-orange-400 mb-4" />
                    <h2 className="text-xl font-semibold">Hibernate</h2>
                </div>


                {/* Card 12 */}
                <div className="bg-slate-800 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 p-6 flex flex-col items-center">
                    <SiSpringsecurity className="text-7xl text-green-600 mb-4" />
                    <h2 className="text-xl font-semibold">Spring Security</h2>
                </div>


                {/* Card 13 */}
                <div className="bg-slate-800 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 p-6 flex flex-col items-center">
                    <SiJsonwebtokens className="text-7xl text-purple-400 mb-4" />
                    <h2 className="text-xl font-semibold">JWT</h2>
                </div>


                {/* Card 14 */}
                <div className="bg-slate-800 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 p-6 flex flex-col items-center">
                    <FaDatabase className="text-7xl text-blue-400 mb-4" />
                    <h2 className="text-xl font-semibold">SQL</h2>
                </div>


                {/* Card 15 */}
                <div className="bg-slate-800 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 p-6 flex flex-col items-center">
                    <SiPostman className="text-7xl text-orange-500 mb-4" />
                    <h2 className="text-xl font-semibold">Postman API</h2>
                </div>


                {/* Card 16 */}
                <div className="bg-slate-800 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 p-6 flex flex-col items-center">
                    <SiApachetomcat className="text-7xl text-red-500 mb-4" />
                    <h2 className="text-xl font-semibold">Servlets</h2>
                </div>


                {/* Card 17 */}
                <div className="bg-slate-800 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 p-6 flex flex-col items-center">
                    <SiNumpy className="text-7xl text-blue-500 mb-4" />
                    <h2 className="text-xl font-semibold">NumPy</h2>
                </div>


                {/* Card 18 */}
                <div className="bg-slate-800 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 p-6 flex flex-col items-center">
                    <SiPandas className="text-7xl text-indigo-400 mb-4" />
                    <h2 className="text-xl font-semibold">Pandas</h2>
                </div>


                {/* Card 19 */}
                <div className="bg-slate-800 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 p-6 flex flex-col items-center">
                    <FaChartBar className="text-7xl text-yellow-400 mb-4" />
                    <h2 className="text-xl font-semibold">Power BI</h2>
                </div>


                {/* Card 20 */}
                <div className="bg-slate-800 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 p-6 flex flex-col items-center">
                    <FaShieldAlt className="text-7xl text-green-400 mb-4" />
                    <h2 className="text-xl font-semibold">Manual Testing</h2>
                </div>

            </div>

            <div className="mt-20 w-full">
                <Footer />
            </div>
        </section>
    )
}

export default Skills