"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { motion, AnimatePresence } from "framer-motion"
import { Typewriter } from "react-simple-typewriter"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Skills } from "@/components/Skills"
import { ContactForm } from "@/components/ContactForm"
import  AboutMe from "@/components/AboutMe"
import { Timeline } from "@/components/Timeline"
import { Loading } from "@/components/Loading"
import { useLoading } from "@/contexts/LoadingContext"
import ProjectCard from "@/components/ProjectCard"

export default function Home() {
  const { isLoading } = useLoading()

  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  return (
    <>
      <AnimatePresence>
        {isLoading && <Loading />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
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

      <AboutMe />
      
      <Timeline />

      <Skills />

      <section id="projects" className="py-16 px-4 bg-zinc-900 w-full" data-aos="fade-up">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Featured Projects</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto rounded mb-6"></div>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills in modern web development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="Private Teachers Platform"
              description="Complete SaaS platform with scheduling, reports, payments and full dashboard. Built with React, Node.js and MySQL."
              link="https://github.com/seuusuario/projeto-professores"
              technologies={["React", "Node.js", "MySQL", "JWT", "Express"]}
              featured={true}
              imageUrl="/projects/private-teachers/main.png"
              previewImages={[
                "/projects/private-teachers/main.png",
                "/projects/private-teachers/dashboard.png",
                "/projects/private-teachers/schedule.png",
                "/projects/private-teachers/reports.png"
              ]}
            />
            
            <ProjectCard
              title="Food Truck Management"
              description="Smart inventory control system with cost calculation and ingredients management per dish."
              link="https://github.com/seuusuario/projeto-foodtruck"
              technologies={["React", "Express", "MySQL", "Charts.js"]}
              featured={true}
              imageUrl="/projects/food-truck/main.png"
              previewImages={[
                "/projects/food-truck/main.png",
                "/projects/food-truck/inventory.png",
                "/projects/food-truck/analytics.png",
                "/projects/food-truck/menu.png"
              ]}
            />

            <ProjectCard
              title="Landing Page for Easybank"
              description="Modern, responsive landing page for a banking application with smooth animations."
              link="https://github.com/fariaa01/Landing-page-2.git"
              technologies={["Next.js", "Tailwind CSS", "TypeScript"]}
              liveUrl="https://landing-page-2-delta-teal.vercel.app/"
              imageUrl="/projects/easybank-landing/landingpage- easyBank.png"
              previewImages={[
                "/projects/easybank-landing/landingpage- easyBank.png"
              ]}
            />

            <ProjectCard
              title="Financial Dashboard"
              description="Comprehensive dashboard for tracking and managing financial data with interactive charts."
              link="https://github.com/seuusuario/projeto-dashboard-financeiro"
              technologies={["React", "TypeScript", "Tailwind", "Recharts"]}
              imageUrl="/projects/financial-dashboard/Dashboard.png"
              previewImages={[
                "/projects/financial-dashboard/loginDashboard.png",
                "/projects/financial-dashboard/Register.png",
                "/projects/financial-dashboard/Dashboard.png"
              ]}
            />

            <ProjectCard
              title="Extensions Manager"
              description="Modern tool for managing browser extensions with drag & drop functionality."
              link="https://github.com/fariaa01/extensions-manager.git"
              technologies={["Next.js", "TypeScript", "Framer Motion", "DnD Kit"]}
              liveUrl="https://extensions-manager-nu.vercel.app/"
              imageUrl="/projects/extensions-manager/extension-menager01.png"
              previewImages={[
                "/projects/extensions-manager/extension-menager01.png",
                "/projects/extensions-manager/extensio-menager02.png"
              ]}
            />
          </div>

          <div className="text-center mt-12">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/fariaa01"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition font-semibold"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View All Projects on GitHub
            </motion.a>
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
      </motion.div>
    </>
  )
}


