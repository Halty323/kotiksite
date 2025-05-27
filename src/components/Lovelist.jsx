import { useState } from 'react'
import { motion } from 'framer-motion'

const reasons = [
  "Твои глазки самые милые и в них хочется смотреть не отводя свои",
  "Ты очень очень милая и красивая, ты такое солнышко, когда радостная ведешь себя как котик",
  "Ты мое сокровище, я так счастлив что у меня есть ты, все проведенное время с тобой дороже всех денег",
  "Ты самая самая добрая и всегда заботишься, всегда даже когда ты сама не замечаешь, я ценю все что ты делаешь для меня и я рад что ты со мной",
  "Я хочу чтобы в будущем ты была моей женой, хочу смотреть на тебя каждый день и думать о том что жизнь выиграна, я люблю тебя солнышко мое, ты мое счастье"
]

export default function LoveList() {
  const [visible, setVisible] = useState(Array(reasons.length).fill(false))

  const reveal = (index) => {
    const updated = [...visible]
    updated[index] = true
    setVisible(updated)
  }

  return (
    <div className="my-10">
      <h2 className="text-2xl font-semibold text-center text-pink-500 mb-4">Почему ты самая лучшая и любимая?</h2>
      <div className="space-y-4">
        {reasons.map((reason, i) => (
          <div key={i} className="text-center">
            {visible[i] ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 160, damping: 14 }}
                className="text-gray-700 font-medium"
              >
                {reason}
              </motion.div>
            ) : (
              <motion.button
                onClick={() => reveal(i)}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition"
              >
                Узнать причину почему ты самая лучшая номер {i + 1}
              </motion.button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
