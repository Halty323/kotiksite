import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Surprise() {
  const [show, setShow] = useState(false)

  return (
    <div className="text-center my-10">
      <button
        onClick={() => setShow(true)}
        className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition"
      >
        Тык лапкой
      </button>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-6"
        >
          <img
            src="/assets/kitty.jpg"
            alt="Kitty photo"
            className="rounded-lg shadow-2xl mx-auto"
            style={{ maxWidth: '600px', width: '100%' }}
          />
          <p className="text-pink-500 font-semibold text-lg mt-4">Кажется это ты</p>
        </motion.div>
      )}
    </div>
  )
}
