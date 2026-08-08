// import React from 'react'
// import Footer from './Footer'

// const Education = () => {
//   return (
//     <section className='h-full'>
//         <div className='justify-center items-center pt-10 h-screen'>
//             <h1 className='text-4xl font-bold text-center mb-10 text-white underline'>Education</h1>
//         </div>

//         <Footer/>
//     </section>
//   )
// }

// export default Education



// =======================================================================

import React from 'react'
import Footer from './Footer'

const Education = () => {
  const educationData = [
    
    {
      degree: "Bachelor of Computer Engineering (B.E)",
      institution: "Savitribai Phule Pune University",
      year: "2021 - 2025",
      description: "Specialized in Computer Science and Engineering. Focused on full-stack development, data structures, and algorithms."
    },
    {
      degree: "Higher Secondary (12th Grade)",
      institution: "Bharay Junior College, Buldhana",
      year: "2018 - 2020",
      description: "Studied Physics, Chemistry, Mathematics and Biology. Graduated with First Class Grade."
    },
    {
      degree: "Secondary School (10th Grade)",
      institution: "DEF High School",
      year: "2016 - 2018",
      description: "Completed foundational education with strong interest in science and technology."
    }
  ];

  return (
    <section className="h-full text-white">
      <div className="pt-10 min-h-screen flex flex-col items-center pb-6">
        <h1 className="text-4xl font-bold text-center mb-10 underline decoration-blue-400">
          Education
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 w-full max-w-6xl">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:bg-gray-600"
            >
              <h2 className="text-xl font-semibold text-blue-300">{edu.degree}</h2>
              <p className="text-sm text-gray-300">{edu.institution}</p>
              <p className="text-sm italic text-gray-400">{edu.year}</p>
              <p className="mt-3 text-gray-200">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Education;
