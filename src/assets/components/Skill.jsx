import React from 'react'
import assets from '../assets/assets'

const skillsData = [
  {
    name: 'Laravel',
    proficiency: 95,
    color: 'bg-orange-500',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg'
  },
  {
    name: 'React',
    proficiency: 85,
    color: 'bg-blue-500',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'Tailwind CSS',
    proficiency: 92,
    color: 'bg-cyan-500',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  },
  {
    name: 'JavaScript',
    proficiency: 88,
    color: 'bg-yellow-500',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'Vue',
    proficiency: 80,
    color: 'bg-green-500',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  },
  {
    name: 'Python',
    proficiency: 75,
    color: 'bg-blue-400',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
  {
    name: 'Firebase',
    proficiency: 80,
    color: 'bg-green-400',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  },
  {
    name: 'Figma',
    proficiency: 90,
    color: 'bg-red-500',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  },
]

const Skills = () => {
  return (
    <div id="Myskills" className="flex flex-col items-center gap-7 py-20 px-4">

      <div className="flex flex-col items-center text-center">
        <h1 className="font-['Bebas_Neue'] text-5xl text-dark">
          My <span className="text-primary">Skills</span>
        </h1>
        <p className="font-['Manrope'] text-gray-500 text-sm mt-2">
          Technologies and tools I work with to create amazing web experiences
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full max-w-5xl mt-4">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-9 h-9 object-contain"
              />
              <span className="font-['Manrope'] font-semibold text-dark text-sm">
                {skill.name}
              </span>
            </div>

            <div className="flex items-center justify-between mb-1">
              <span className="font-['Manrope'] text-xs text-gray-400">Proficiency</span>
              <span className="font-['Manrope'] text-xs font-semibold text-primary">
                {skill.proficiency}%
              </span>
            </div>

            <div className="w-full bg-gray-100 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${skill.color}`}
                style={{ width: `${skill.proficiency}%` }}
              />
            </div>

          </div>
        ))}
      </div>

    </div>
  )
}

export default Skills