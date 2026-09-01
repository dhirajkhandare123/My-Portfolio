import React from 'react'
import Typed from "typed.js";
import { useRef, useEffect } from "react"
import my_img from "../assets/image2.jpg"
import Footer from './Footer';

const Home = () => {

    const textRef = useRef(null);

    useEffect(() => {

        const typed = new Typed(textRef.current, {
            strings: [
                "Java Full Stack Developer",
                "Frontend Developer",
                "Backend Developer",
                "React JS Developer",
                "JavaScript Developer",
                "Computer Engineer"
            ],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true
        });

        return () => {
            typed.destroy();
        };

    }, []);


    return (

        <div className='w-full h-full'>

            <div className='min-h-screen w-full flex flex-col md:flex-row'>

                {/* Left Section */}
                <div className='w-full md:w-1/2 md:border-r h-auto md:h-screen flex flex-col items-center justify-center text-center px-5 py-10'>

                    <h1 className='animate-bounce text-3xl md:text-5xl font-bold md:leading-26'>
                        Hi, My name is
                    </h1>

                    <h1 className='animate-bounce text-4xl md:text-5xl font-bold font-serif bg-gradient-to-b from-orange-500 via-white to-green-600 bg-clip-text text-transparent'>
                        Dhiraj Khandare
                    </h1>

                    <h1 className='text-3xl md:text-5xl font-bold mt-6 md:mt-0 md:leading-24'>
                        And I am
                    </h1>

                    <h1 className='text-2xl md:text-5xl font-bold text-blue-400 text-center'>
                        <span ref={textRef}></span>
                    </h1>

                </div>

                {/* Right Section */}
                <div className='w-full md:w-1/2 h-auto md:h-screen flex flex-col items-center justify-center py-10'>

                    <div className='w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full border-4 border-white overflow-hidden'>
                        <img
                            src={my_img}
                            alt=""
                            className='w-full h-full object-cover'
                        />
                    </div>

                    <h1 className='text-2xl md:text-5xl font-bold text-red-600 mt-8 text-center'>
                        I am Open to work
                    </h1>

                    {/* Download Resume Button */}
    <a
        href="https://drive.google.com/file/d/1U_MgdlAlMa7OmMwDchwhvtCPiDw06dQW/view?usp=sharing"
        download="Dhiraj_Khandare_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className='mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300'
    >
        Download Resume
    </a>

                </div>

            </div>

            <Footer />

        </div>

    )
}

export default Home