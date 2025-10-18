"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { motion } from "framer-motion"
import { Typewriter } from "react-simple-typewriter"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Skills } from "@/components/Skills"
import { ContactForm } from "@/components/ContactForm"
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
              link="https://github.com/fariaa01/extensions-manager.git"
            />
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 px-4 bg-zinc-950 w-full" data-aos="fade-up">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Get In Touch</h2>
            <p className="text-zinc-400 text-lg">
              Ready to work together? Send me a message and let&apos;s discuss your project!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="bg-purple-600 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Email</h3>
                  <p className="text-zinc-400">gustavofaria985@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-purple-600 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Phone</h3>
                  <p className="text-zinc-400">+55 (19) 99838-9595</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-purple-600 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold">LinkedIn</h3>
                  <p className="text-zinc-400">linkedin.com/in/gustavo-faria</p>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}


