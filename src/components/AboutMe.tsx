"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function AboutMe() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
    return (
        <section id="about" className="pt-16 pb-16 px-4 bg-zinc-900 w-full" data-aos="fade-up">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">About Me</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto rounded"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-zinc-300 text-lg leading-relaxed">
                I&apos;m a passionate <span className="text-purple-400 font-semibold">Frontend Developer</span> with 
                a strong focus on creating modern, performant, and user-centric web applications.
              </p>
              
              <p className="text-zinc-400 leading-relaxed">
                My journey into development started with curiosity about how websites work, and it quickly became 
                a passion for solving complex problems through clean, efficient code. I specialize in the 
                <span className="text-purple-400"> React ecosystem</span> and love building applications that 
                make a real difference in people&apos;s lives.
              </p>
              
              <p className="text-zinc-400 leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open source 
                projects, or mentoring fellow developers. I believe in continuous learning and staying 
                updated with the latest industry trends.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="bg-zinc-800 px-4 py-2 rounded-lg">
                  <span className="text-purple-400 font-semibold">1</span>
                  <span className="text-zinc-400 ml-2">Year Experience</span>
                </div>
                <div className="bg-zinc-800 px-4 py-2 rounded-lg">
                  <span className="text-purple-400 font-semibold">15+</span>
                  <span className="text-zinc-400 ml-2">Projects Completed</span>
                </div>
                <div className="bg-zinc-800 px-4 py-2 rounded-lg">
                  <span className="text-purple-400 font-semibold">100%</span>
                  <span className="text-zinc-400 ml-2">Client Satisfaction</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-zinc-800 p-6 rounded-lg">
                <h3 className="text-white font-semibold mb-4 flex items-center">
                  Current Focus
                </h3>
                <ul className="space-y-2 text-zinc-400">
                  <li>• Building scalable SaaS platforms</li>
                  <li>• Advanced React patterns & performance</li>
                  <li>• TypeScript best practices</li>
                  <li>• Modern UI/UX implementation</li>
                </ul>
              </div>

              <div className="bg-zinc-800 p-6 rounded-lg">
                <h3 className="text-white font-semibold mb-4 flex items-center">
                 What I Bring
                </h3>
                <ul className="space-y-2 text-zinc-400">
                  <li>• Clean, maintainable code architecture</li>
                  <li>• Pixel-perfect responsive designs</li>
                  <li>• Performance optimization expertise</li>
                  <li>• Strong problem-solving mindset</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

