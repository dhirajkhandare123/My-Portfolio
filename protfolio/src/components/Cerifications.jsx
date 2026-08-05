import React from 'react'
import Footer from './Footer'

const Certifications = () => {
  const certifications = [
    {
      title: "Java Full Stack Developer Certification",
      issuer: "Firstbit Solutions",
      date: "Jun 2026",
      description: "Completed a comprehensive Java Full Stack Development course covering Core Java, OOP concepts, Data Structures, MySQL, Web Technologies (HTML, CSS, JavaScript), Java EE Servlets, Hibernate, Spring Core, and Spring Boot. Gained hands-on experience in developing scalable web applications using Java backend technologies, database integration, and MVC architecture.",
      image: "https://raw.githubusercontent.com/dhirajkhandare123/Images_for_projects/main/java_full_stack_certificate.png"
    },
    {
      title: "MySql",
      issuer: "Udemy",
      date: "Jan 2025",
      description: "Completed MySQL course on Udemy, gaining hands-on experience in database design, SQL queries, joins, CRUD operations, data manipulation, and database management.",
      image: "https://raw.githubusercontent.com/dhirajkhandare123/Images_for_projects/main/Dhiraj%20MySQL.jpg"
    },
    {
      title: "Data Science",
      issuer: "Code With Harry",
      date: "Nov 2025",
      description: "Completed Data Science course from CodeWithHarry, covering Python, data analysis, NumPy, Pandas, data visualization, machine learning fundamentals, and practical data science concepts.",
      image: "https://raw.githubusercontent.com/dhirajkhandare123/Images_for_projects/main/Data_Science_Certificate.png"
    },
    {
      title: "100 Days of Python",
      issuer: "Udemy",
      date: "Jan 2024",
      description: "Completed Python programming course, gaining knowledge of Python fundamentals, data types, control flow, functions, OOP concepts, modules, and hands-on programming skills.",
      image: "https://raw.githubusercontent.com/dhirajkhandare123/Images_for_projects/main/100_Days_of_python.png"
    },
    // Add more certifications up to 10
  ];

  return (
    <section className="h-full text-white">
      <div className="pt-10 min-h-screen flex flex-col items-center pb-10">
        <h1 className="text-4xl font-bold text-center mb-10 underline decoration-green-400">
          Certifications
        </h1>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 w-full max-w-6xl">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:bg-gray-600 
                 flex flex-col h-[450px]"  // 🔹 Fixed height for all cards
            >
              {/* Certificate image */}
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-40 object-cover"
              />

              {/* Details */}
              <div className="p-6 flex-1 overflow-y-auto"> {/* 🔹 Scroll if content exceeds fixed height */}
                <h2 className="text-lg font-semibold text-green-300">{cert.title}</h2>
                <p className="text-sm text-gray-300">{cert.issuer}</p>
                <p className="text-sm italic text-gray-400">{cert.date}</p>
                <p className="mt-3 text-gray-200 text-sm">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Certifications;
