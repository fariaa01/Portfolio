"use client"

import { Mail, Phone, Linkedin, Github as GithubIcon } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  return (
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
    )
}

export default Footer;