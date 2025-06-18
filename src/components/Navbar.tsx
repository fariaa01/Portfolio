"use client"

import { useState, useEffect } from "react"
import {
  Menu,
  X,
  Home,
  User,
  Layers,
  Folder,
  Mail,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const links = [
  { icon: Home, label: "Home", id: "home" },
  { icon: User, label: "About", id: "about" },
  { icon: Layers, label: "Skills", id: "skills" },
  { icon: Folder, label: "Projects", id: "projects" },
  { icon: Mail, label: "Contact", id: "contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"
  }, [])

  const handleScroll = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-zinc-900/60 backdrop-blur-sm border-b border-zinc-800 shadow-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-center relative">

        <nav className="hidden md:flex gap-8">
          {links.map(({ icon: Icon, label, id }, i) => (
            <button
              key={i}
              onClick={() => handleScroll(id)}
              className="group relative flex flex-col items-center text-zinc-300 hover:text-purple-400 transition"
            >
              <Icon className="w-5 h-5" />
              <span className="absolute -bottom-6 text-xs opacity-0 group-hover:opacity-100 transition">
                {label}
              </span>
            </button>
          ))}
        </nav>

        <button
          onClick={() => setIsOpen(true)}
          className="absolute right-6 md:hidden text-purple-400 hover:text-purple-300 transition"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="fixed top-0 right-0 w-64 h-full bg-zinc-950 z-50 shadow-xl border-l border-purple-600"
            >
              <div className="flex items-center justify-between px-6 h-16 border-b border-zinc-800">
                <h2 className="text-white font-semibold text-lg">Menu</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-zinc-400 hover:text-white transition"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <ul className="flex flex-col gap-6 p-6">
                {links.map(({ icon: Icon, label, id }, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleScroll(id)}
                      className="flex items-center gap-2 text-white text-base hover:text-purple-400 transition"
                    >
                      <Icon className="w-5 h-5" />
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
