import React from 'react'
import Footer from './Footer'

const Internship = () => {
  const internships = [
    {
      role: "Web Developement, Python-Djamgo Framework Intern",
      company: "Elite Softwares, Pune",
      duration: "December 2024 - February 2024",
      description: "Worked on web application development using Python and Django framework, gaining hands-on experience in backend development, database integration, and RESTful web services. Developed and optimized web components while improving skills in Python programming, Django architecture, HTML, CSS, and frontend-backend integration."
    },
    {
      role: "Application Developer Intern",
      company: "Nex Nova ProTech, Pune",
      duration: "Jan 2026 - Jun 2026",
      description: "Developed and enhanced full-stack web applications using Java, Spring Boot, React.js, and related technologies, focusing on backend API development and responsive frontend interfaces. Gained hands-on experience in REST API integration, database management, authentication, and building scalable applications using modern full-stack development practices."
    }
  ];

  return (
    <section className="h-full text-white">
      <div className="pt-10 min-h-screen flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center mb-10 underline decoration-pink-400">
          Internship
        </h1>

        {/* Timeline container */}
        <div className="w-full max-w-5xl px-6">
          {/* Desktop: horizontal timeline */}
          <div className="hidden md:flex justify-between items-start relative">
            {/* Line across */}
            <div className="absolute top-5 left-0 w-full h-1 bg-pink-500"></div>

            {internships.map((intern, index) => (
              <div key={index} className="flex flex-col items-center w-1/2 px-4">
                {/* Step circle */}
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-500 text-white font-bold shadow-lg z-10">
                  {index + 1}
                </div>

                {/* Internship card */}
                <div className="mt-6 bg-gray-700 rounded-xl shadow-lg p-6 text-center transform transition duration-300 hover:scale-105 hover:bg-gray-600">
                  <h2 className="text-xl font-semibold text-pink-300">{intern.role}</h2>
                  <p className="text-sm text-gray-300">{intern.company}</p>
                  <p className="text-sm italic text-gray-400">{intern.duration}</p>
                  <p className="mt-3 text-gray-200">{intern.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: vertical timeline */}
          <div className="md:hidden flex flex-col items-center">
            {internships.map((intern, index) => (
              <div key={index} className="flex flex-col items-center mb-12">
                {/* Step circle */}
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-500 text-white font-bold shadow-lg">
                  {index + 1}
                </div>

                {/* Internship card */}
                <div className="mt-6 bg-gray-700 rounded-xl shadow-lg p-6 text-center w-full">
                  <h2 className="text-xl font-semibold text-pink-300">{intern.role}</h2>
                  <p className="text-sm text-gray-300">{intern.company}</p>
                  <p className="text-sm italic text-gray-400">{intern.duration}</p>
                  <p className="mt-3 text-gray-200">{intern.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Internship;
