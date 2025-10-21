"use client"

import { motion } from 'framer-motion'

export function Loading() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950"
    >
      <div className="text-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="mb-8"
        >
          <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-2xl font-bold text-white">GF</span>
          </div>
        </motion.div>

        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-zinc-400 font-medium"
        >
          Loading Portfolio...
        </motion.p>

        {/* Barra de progresso */}
        <div className="mt-6 w-64 h-1 bg-zinc-800 rounded-full overflow-hidden">
          <motion.div
            animate={{ x: [-256, 256] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="h-full w-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
          />
        </div>
      </div>
    </motion.div>
  )
}