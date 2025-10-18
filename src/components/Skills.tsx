"use client"
import "aos/dist/aos.css"
import { motion } from "framer-motion"
import {
  Github,
  Code,
  Server,
  FileCode,
  Mail,
  Phone,
  Linkedin,
  Github as GithubIcon,
} from "lucide-react"

export function Skills() {
    return (
        
              <section id="skills" className="py-16 px-4 bg-zinc-950 w-full" data-aos="fade-up">
                <div className="max-w-5xl mx-auto text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">Skills</h2>
        
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {[
                      { name: "HTML", icon: <i className="devicon-html5-plain colored text-4xl" /> },
                      { name: "CSS", icon: <i className="devicon-css3-plain colored text-4xl" /> },
                      { name: "JavaScript", icon: <Code className="text-yellow-400 w-8 h-8" /> },
                      { name: "TypeScript", icon: <FileCode className="text-blue-500 w-8 h-8" /> },
                      { name: "Node.js", icon: <Server className="text-green-500 w-8 h-8" /> },
                      { name: "Next.js", icon: <i className="devicon-nextjs-original text-white text-4xl" /> },
                      { name: "Tailwind CSS", icon: <i className="devicon-tailwindcss-plain colored text-4xl" /> },
                      { name: "Bootstrap", icon: <i className="devicon-bootstrap-plain colored text-4xl" /> },
                      { name: "MySQL", icon: <i className="devicon-mysql-plain colored text-4xl" /> },
                      { name: "Git", icon: <Github className="text-orange-500 w-8 h-8" /> },
                      { name: "Java", icon: <i className="devicon-java-plain colored text-4xl" /> },
                      { name: "C#", icon: <i className="devicon-csharp-plain colored text-4xl" /> },
                    ].map((skill, index) => (
                      <motion.div
                        key={index}
                        data-aos="zoom-in"
                        whileHover={{ scale: 1.05 }}
                        className="bg-zinc-900 rounded-lg p-6 flex flex-col items-center justify-center text-white hover:bg-purple-600 transition"
                      >
                        <div className="mb-2">{skill.icon}</div>
                        <div className="text-sm font-medium">{skill.name}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>
    )
}