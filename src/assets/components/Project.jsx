import React from 'react'
import assets from '../assets/assets'

const projectData = [
  {
    title: 'E-Commerce Website',
    description: 'A modern and responsive e-commerce website with clean UI and smooth user experience.',
    tag: 'Web Design',
    image: assets.work_dashboard_management, 
  },
  {
    title: 'Dashboard Management',
    description: 'A powerful dashboard for managing data with intuitive design and real-time updates.',
    tag: 'UI/UX',
    image: assets.work_fitness_app,
  },
  {
    title: 'Mobile App Design',
    description: 'A sleek mobile app design focused on usability and modern aesthetics.',
    tag: 'Mobile',
    image: assets.work_mobile_app,
  },
  {
    title: 'Smart Mobile App Experience',
    description: 'A modern mobile app design that combines intuitive user experience, clean visuals, and seamless performance.',
    tag: 'App Design',
    image: assets.uiux,
  },
  {
    title: 'Digital Book App Design',
    description: 'A modern book app designed to provide a comfortable reading experience with clean layout and intuitive navigation.',
    tag: 'Reading App',
    image: assets.book_app,
  },
  {
    title: 'Smart Travel Web And App Experience',
    description: 'A responsive travel website designed to deliver a smooth browsing experience with clean layout and user-friendly interface.',
    tag: 'Travel',
    image: assets.travel,
  },
]

const Project = () => {
  return (
    <div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="Myproject"
      className="flex flex-col items-center gap-7 py-20 px-4"
    >

      <div className="flex flex-col items-center">
        <h1 className="font-['Bebas_Neue'] text-5xl text-dark">
          My Project
        </h1>
        <div className="w-24 h-[2px] bg-dark mt-2" />
        <p className="font-['Manrope'] text-gray-500 text-sm mt-3 text-center">
          View and explore my latest projects
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
        {projectData.map((project, index) => (
          <div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="hover:scale-105 duration-500 transition-all cursor-pointer"
          >

            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover rounded-xl"
            />

            <span className="font-['Manrope'] text-xs bg-primary text-dark px-2 py-1 rounded-sm mt-3 inline-block">
              {project.tag}
            </span>

            <h3 className="font-['Bebas_Neue'] text-2xl text-dark mt-2">
              {project.title}
            </h3>


            <p className="font-['Manrope'] text-sm text-gray-500 w-5/6">
              {project.description}
            </p>
          </div>
        ))}
      </div>


      <a
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        href="#"
        className="font-['Manrope'] border border-dark text-dark text-sm font-medium px-8 py-3 rounded-sm hover:bg-dark hover:text-white transition-all mt-8"
      >
        View All Projects
      </a>

    </div>
  )
}

export default Project