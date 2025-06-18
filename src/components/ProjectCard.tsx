"use client"

import { motion } from "framer-motion"
import { Github } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  link: string
}

export default function ProjectCard({ title, description, link }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 shadow hover:shadow-lg transition"
    >
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-zinc-400 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm font-medium transition"
      >
        <Github className="w-4 h-4" />
        View on GitHub
      </a>
    </motion.div>
  )
}
