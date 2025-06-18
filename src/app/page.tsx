"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { motion } from "framer-motion"
import { Typewriter } from "react-simple-typewriter"
import { Navbar } from "@/components/Navbar"
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
import ProjectCard from "@/components/ProjectCard"

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  return (
    <>
      <Navbar />

      <section
        className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4"
        data-aos="fade-up"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hello, I am{" "}
          <span className="text-purple-500">
            <Typewriter
              words={["Gustavo Faria."]}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={0}
              delaySpeed={2000}
            />
          </span>
        </h1>

        <p className="text-lg text-zinc-400 mb-8 h-6">
          <Typewriter
            words={[
              "Full-Stack Developer",
              "Node.js",
              "Next.js",
              "MySQL",
              "Tailwind CSS",
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>

        <div className="flex gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/cv-gustavo-faria.pdf"
            className="bg-purple-600 text-white px-5 py-3 rounded-lg hover:bg-purple-700 transition"
          >
            Download CV
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="border border-purple-600 text-purple-500 px-5 py-3 rounded-lg hover:bg-purple-600 hover:text-white transition"
          >
            Contact Me
          </motion.a>
        </div>
      </section>

      <section id="about" className="pt-10 pb-16 px-4 bg-zinc-900 w-full" data-aos="fade-up">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">About Me</h2>
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
            I&apos;m a passionate full-stack developer with a focus on building modern, fast, and scalable web applications.
            I love turning complex problems into simple, elegant solutions using technologies like Node.js, Next.js, MySQL, and Tailwind CSS.
            <br /><br />
            Currently, I&apos;ve been working on SaaS platforms, management systems, and personalized tools for independent professionals and small businesses.
            I&apos;m constantly learning and improving to deliver high-quality code and user experiences.
          </p>
        </div>
      </section>

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

      <section id="projects" className="py-16 px-4 bg-zinc-900 w-full" data-aos="fade-up">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ProjectCard
              title="Private Teachers Platform"
              description="Scheduling, reports, payments and full dashboard."
              link="https://github.com/seuusuario/projeto-professores"
            />
            <ProjectCard
              title="Food Truck Management"
              description="Inventory control, costs and smart ingredients per dish."
              link="https://github.com/seuusuario/projeto-foodtruck"
            />
          </div>
        </div>
      </section>

      <footer
        id="contact"
        className="py-20 px-4 bg-zinc-950 w-full border-t border-zinc-800"
        data-aos="fade-up"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Contact</h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-center text-center">
            {[
              {
                icon: Mail,
                title: "E-mail",
                value: "gustavofaria985@gmail.com",
                href: "mailto:gustavofaria985@gmail.com",
              },
              {
                icon: Phone,
                title: "Phone",
                value: "(19) 99838-9595",
                href: "tel:+5519998389595",
              },
              {
                icon: Linkedin,
                title: "LinkedIn",
                value: "@fariaa01",
                href: "https://www.linkedin.com/in/gustavo-faria-239345333",
              },
              {
                icon: GithubIcon,
                title: "GitHub",
                value: "@fariaa01",
                href: "https://github.com/fariaa01",
              },
            ].map(({ icon: Icon, title, value, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center gap-3 text-zinc-400 hover:text-white transition"
              >
                <div className="bg-zinc-800 hover:bg-purple-600 text-purple-400 p-4 rounded-full transition">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-sm font-semibold">{title}</div>
                <div className="text-xs text-zinc-500">{value}</div>
              </motion.a>
            ))}
          </div>

          <p className="mt-12 text-xs text-zinc-600">
            © {new Date().getFullYear()} Gustavo Faria. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}
