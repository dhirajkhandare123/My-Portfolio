import React from 'react'
import Typed from "typed.js";
import {useRef, useEffect} from "react" 
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
        "Data Analyst",
        "Data Scientist",
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
    
    <div className='h-screen w-full flex'>
        <div className='w-1/2 border-r h-full flex flex-col items-center justify-center'>
            <h1 className='text-5xl font-bold leading-26'>Hi, My name is</h1>
            <h1 className='text-5xl font-bold font-serif bg-gradient-to-b from-orange-500 via-white to-green-600 bg-clip-text text-transparent'>
                Dhiraj Khandare
            </h1>
            <h1 className='text-5xl leading-24 font-bold'>And I am</h1>
            <h1 className='text-5xl font-bold'><span ref={textRef}></span></h1>
        </div>



        <div className='w-1/2 h-full items-center justify-center flex flex-col'>
            <div className='w-80 h-80 rounded-full border-4 border-white overflow-hidden'>
                <img src={my_img} alt=""
                 className='w-full h-full object-cover'
                />
            </div>

            <h1 className='text-5xl font-bold leading-26 text-red-600'>I am Open to work</h1>
        </div>


    </div>

    <Footer/>

    </div>


  )
}

export default Home