import React from 'react'
import Footer from './Footer'

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";


const Projects = () => {
  return (
    <section className='h-full'>


      <h1
        className="
        text-center
        text-white
        text-4xl
        md:text-5xl
        font-bold
        mb-12
        "
      >
        My Projects
      </h1>



      <div
        className="
        max-w-6xl
        mx-auto
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-8
        "
      >



        {/* Project 1 */}

        <ProjectCard

          image="https://raw.githubusercontent.com/dhirajkhandare123/Images_for_projects/main/library_management.png"

          title="Library Management System"

          description="
          Full stack library management application built using
          Spring Boot, React.js, JPA and MySQL.
          "

          github="https://github.com/yourusername/library-management"

          visit="https://your-library-project.com"

        />



        {/* Project 2 */}

        <ProjectCard

          image="https://raw.githubusercontent.com/dhirajkhandare123/Images_for_projects/main/Portfolio_website.png"

          title="Portfolio Website"

          description="
          Responsive personal portfolio website developed
          using React.js and Tailwind CSS.
          "

          github="https://github.com/yourusername/portfolio"

          visit="https://yourportfolio.com"

        />



        {/* Project 3 */}

        <ProjectCard

          image="https://raw.githubusercontent.com/dhirajkhandare123/Images_for_projects/refs/heads/main/ecommerce.png"

          title="E-Commerce Application"

          description="
          Online shopping application with authentication,
          products, cart and payment features.
          "

          github="https://github.com/yourusername/ecommerce"

          visit="https://your-ecommerce.com"

        />



        {/* Project 4 */}

        <ProjectCard

          image="https://raw.githubusercontent.com/dhirajkhandare123/Images_for_projects/refs/heads/main/console_based.jpg"

          title="Hotel Reservation System"

          description="
           Developed a Java-based desktop application with a menu-driven interface for managing hotel bookings and guest details.
          React.js, Spring Boot and WebSocket.
          "

          github="https://github.com/yourusername/chat-app"

          visit="https://your-chat-app.com"

        />



        {/* Project 5 */}

        <ProjectCard

          image="https://raw.githubusercontent.com/dhirajkhandare123/Images_for_projects/main/Travels_Ticket_Booking.png"

          title="Travels Ticket Booking"

          description="
          Travels Ticket Boking System is a web application develope
          using HTML,CSS, Django
          "

          github="https://github.com/yourusername/task-manager"

          visit="https://your-task-manager.com"

        />



        {/* Project 6 */}

        <ProjectCard

          image="https://your-cloudinary-url/blog.png"

          title="Blog Application"

          description="
          Full stack blog application with user authentication,
          CRUD operations and database integration.
          "

          github="https://github.com/yourusername/blog"

          visit="https://your-blog.com"

        />


      </div>



      <Footer/>


    </section>
  )
}





function ProjectCard({ image, title, description, github, visit }) {

  return (

    <div
      className="
      
      border border-gray-700
      rounded-xl
      overflow-hidden
      shadow-lg
      hover:scale-105
      transition duration-300
      h-[360px]
      flex
      flex-col
      bg-slate-700
      "
    >



      {/* Project Image */}

      <img
        src={image}
        alt={title}
        className="
        w-full
        h-48
        object-cover
        "
      />




      {/* Project Details */}

      <div
        className="
        p-5
        flex
        flex-col
        flex-1
        "
      >


        <h2
          className="
          text-xl
          font-bold
          text-white
          mb-3
          "
        >
          {title}
        </h2>



        <p
          className="
          text-gray-300
          text-sm
          leading-6
          mb-5
          "
        >
          {description}
        </p>




        {/* Links */}

        <div className="flex gap-4 mt-auto">


          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="
            flex
            items-center
            gap-2
            px-4
            py-2
            bg-gray-900
            text-white
            rounded-lg
            text-sm
            hover:bg-black
            "
          >
            <FaGithub />
            Github
          </a>



          <a
            href={visit}
            target="_blank"
            rel="noopener noreferrer"
            className="
            flex
            items-center
            gap-2
            px-4
            py-2
            bg-blue-600
            text-white
            rounded-lg
            text-sm
            hover:bg-blue-700
            "
          >
            <FaExternalLinkAlt />
            Visit
          </a>


        </div>


      </div>


    </div>

  );
}


export default Projects