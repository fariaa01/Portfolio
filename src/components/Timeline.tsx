"use client"

import { motion } from "framer-motion"

interface TimelineItem {
  year: string
  title: string
  company?: string
  description: string
  technologies: string[]
  type: "work" | "education" | "project"
}

const timelineData: TimelineItem[] = [
  {
    year: "2025",
    title: "Frontend Developer",
    company: "Freelance",
    description: "Developing custom SaaS platforms and management systems for small businesses. Focus on React, Next.js, and modern web technologies.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    type: "work"
  },
  {
    year: "2025",
    title: "Full-Stack Development",
    company: "Personal Projects",
    description: "Built multiple full-stack applications including teacher management platform and food truck inventory system.",
    technologies: ["React", "Node.js", "MySQL", "Express", "JWT"],
    type: "project"
  },
  {
    year: "2024",
    title: "Web Development Journey",
    description: "Started learning web development, focusing on modern JavaScript, React, and backend technologies.",
    technologies: ["JavaScript", "HTML/CSS", "React", "Git"],
    type: "education"
  }
]

export function Timeline() {
  return (
    <section className="py-16 px-4 bg-zinc-950 w-full" data-aos="fade-up">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">My Journey</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto rounded"></div>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-purple-600/30 hidden md:block"></div>

          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative flex items-start mb-8 last:mb-0"
            >

              <div className={`absolute left-6 w-4 h-4 rounded-full border-2 border-purple-600 hidden md:block ${
                item.type === 'work' ? 'bg-purple-600' :
                item.type === 'education' ? 'bg-blue-600' : 'bg-green-600'
              }`}></div>

              <div className="md:ml-16 bg-zinc-800 p-6 rounded-lg w-full">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <div>
                    <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                    {item.company && (
                      <p className="text-purple-400 font-medium">{item.company}</p>
                    )}
                  </div>
                  <span className="text-zinc-400 text-sm bg-zinc-700 px-3 py-1 rounded-full mt-2 sm:mt-0">
                    {item.year}
                  </span>
                </div>

                <p className="text-zinc-400 mb-4 leading-relaxed">{item.description}</p>

                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}