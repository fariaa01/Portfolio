"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink, Eye } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface ProjectCardProps {
  title: string
  description: string
  link: string
  technologies?: string[]
  featured?: boolean
  liveUrl?: string
  imageUrl?: string
  previewImages?: string[]
}

export default function ProjectCard({ 
  title, 
  description, 
  link, 
  technologies = [], 
  featured = false,
  liveUrl,
  imageUrl,
  previewImages = []
}: ProjectCardProps) {
  const [showPreview, setShowPreview] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handlePreviewClick = () => {
    if (previewImages.length > 0) {
      setShowPreview(true)
    }
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % previewImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + previewImages.length) % previewImages.length)
  }

  return (
    <>
      <motion.div
        whileHover={{ y: -5 }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`bg-zinc-800 rounded-xl border transition-all duration-300 hover:shadow-2xl overflow-hidden group ${
          featured 
            ? "border-purple-600/50 shadow-purple-600/10" 
            : "border-zinc-700 hover:border-zinc-600"
        }`}
      >
        {/* Preview Image */}
        <div className="relative h-48 bg-gradient-to-br from-zinc-700 to-zinc-800 overflow-hidden">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={`${title} preview`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          ) : null}
          
          <div className={`flex items-center justify-center h-full ${imageUrl ? 'absolute inset-0 -z-10' : ''}`}>
            <div className="text-center">
              <div className="relative">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-purple-500/20">
                  {featured ? (
                    <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  ) : (
                    <Github className="w-10 h-10 text-purple-400" />
                  )}
                </div>
                
                {/* Project Title */}
                <h4 className="text-white text-lg font-semibold mb-2 line-clamp-2">{title}</h4>
                <div className="flex flex-wrap gap-1 justify-center mb-2">
                  {technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="text-purple-300 text-xs bg-purple-600/20 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          
          {/* Preview Button */}
          {previewImages.length > 0 && (
            <button
              onClick={handlePreviewClick}
              className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
            >
              <Eye className="w-4 h-4" />
            </button>
          )}

          {/* Featured Badge */}
          {featured && (
            <div className="absolute top-3 left-3 bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-medium">
              ⭐ Featured
            </div>
          )}
        </div>
        
        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white mb-3 line-clamp-1">{title}</h3>
          
          <p className="text-zinc-400 mb-4 leading-relaxed text-sm line-clamp-3">{description}</p>
          
          {/* Technologies */}
          {technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {technologies.slice(0, 4).map((tech, index) => (
                <span
                  key={index}
                  className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
              {technologies.length > 4 && (
                <span className="text-zinc-500 text-xs py-1">
                  +{technologies.length - 4} more
                </span>
              )}
            </div>
          )}
          
          {/* Links */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm font-medium transition"
              >
                <Github className="w-4 h-4" />
                Code
              </a>
              
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 text-sm font-medium transition"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live
                </a>
              )}
            </div>

            {previewImages.length > 1 && (
              <span className="text-zinc-500 text-xs">
                {previewImages.length} images
              </span>
            )}
          </div>
        </div>
      </motion.div>

      {showPreview && previewImages.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowPreview(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-4xl max-h-[80vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowPreview(false)}
              className="absolute -top-12 right-0 text-white hover:text-red-400 transition-colors z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative bg-zinc-900 rounded-lg overflow-hidden">
              <Image
                src={previewImages[currentImageIndex]}
                alt={`${title} preview ${currentImageIndex + 1}`}
                width={1200}
                height={600}
                className="w-full h-auto max-h-[70vh] object-contain"
              />

              {previewImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {previewImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="mt-4 text-center">
              <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
              <p className="text-zinc-400 text-sm">
                {currentImageIndex + 1} of {previewImages.length}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
