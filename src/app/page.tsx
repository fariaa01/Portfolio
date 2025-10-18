"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { motion } from "framer-motion"
import { Typewriter } from "react-simple-typewriter"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Skills } from "@/components/Skills"
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

      <Skills />

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

            <ProjectCard
              title="Landing Page for easybank"
              description="A modern landing page for a banking application."
              link="https://github.com/fariaa01/Landing-page-2.git"
            />

            <ProjectCard
              title="Dashboard for managing finances"
              description="A comprehensive dashboard for tracking and managing financial data."
              link="https://github.com/seuusuario/projeto-dashboard-financeiro"
            />

            <ProjectCard
              title="Extensions manager"
              description="A tool for managing browser extensions."
              link="https://github.com/seuusuario/projeto-extensions-manager"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}


