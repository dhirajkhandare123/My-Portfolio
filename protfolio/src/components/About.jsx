import React from 'react'
import Footer from './Footer'

const About = () => {
  return (
    <div className='h-full'>
        <div className='h-screen flex flex-col items-center justify-center'>
            <h1 className='font-bold text-white underline text-4xl leading-18'>About</h1>
            <div className='w-2xl text-justify text-xl font-bold'>
                A motivated and detail-oriented Computer Engineering graduate actively seeking entry-level opportunities in Software Development or Data Analytics. Possesses a solid academic background with hands-on project experience in Java Full-Stack (Core Java, Spring Boot, REST APIs) and Python Full-Stack (Python, Django), along with React.js for building responsive frontend interfaces. Proficient in Data Analysis using SQL, Pandas, NumPy, and visualization techniques to solve real-world problems. A fast learner and resilient problem-solver eager to contribute technical skills, adapt to industry workflows, and add value to an innovative engineering team.
            </div>

            
            
        </div>
        <hr className='h-0.5 bg-amber-50 w-full'/>
        <div>
            <Footer className='w-full bottom-0 left-0 fixed'/>
        </div>
    </div>
  )
}

export default About