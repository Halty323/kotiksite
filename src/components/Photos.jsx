import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// 20 photos
const images = [
  '/assets/1.jpg',
  '/assets/2.jpg',
  '/assets/3.jpg',
  '/assets/4.jpg',
  '/assets/5.jpg',
  '/assets/6.jpg',
  '/assets/7.jpg',
  '/assets/8.jpg',
  '/assets/9.jpg',
  '/assets/10.jpg',
  '/assets/11.jpg',
  '/assets/12.jpg',
  '/assets/13.jpg',
  '/assets/14.jpg',
  '/assets/15.jpg',
  '/assets/16.jpg',
  '/assets/17.jpg',
  '/assets/18.jpg',
  '/assets/19.jpg',
  '/assets/20.jpg'
]

export default function Photos() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    const newIndex = (currentIndex === 0 ? images.length - 1 : currentIndex - 1)
    setCurrentIndex(newIndex)
  }

  const handleNext = () => {
    const newIndex = (currentIndex === images.length - 1 ? 0 : currentIndex + 1)
    setCurrentIndex(newIndex)
  }

  return (
    <div className="my-10">
      <h2 className="text-2xl font-semibold text-center text-pink-500 mb-8">Наши воспоминания 📸</h2>
      <div className="relative w-full h-[500px]">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="absolute inset-0"
              initial={{ 
                x: currentIndex === 0 ? 100 : -100,
                opacity: 0 
              }}
              animate={{ 
                x: 0,
                opacity: 1 
              }}
              exit={{ 
                x: currentIndex === 0 ? -100 : 100,
                opacity: 0 
              }}
              transition={{ 
                duration: 0.5,
                ease: "easeOut"
              }}
            >
              <img
                src={images[currentIndex]}
                alt={`Memory ${currentIndex}`}
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <motion.button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-pink-500/20 hover:bg-pink-500/30 text-pink-500 rounded-full p-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </motion.button>

        <motion.button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-pink-500/20 hover:bg-pink-500/30 text-pink-500 rounded-full p-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </motion.button>
      </div>
    </div>
  )
}
