import { motion } from 'framer-motion'
import Welcome from './components/Welcome'
import Photos from './components/Photos'
import Timeline from './components/Timeline'
import LoveList from './components/LoveList'
import Surprise from './components/Surprise'
import Footer from './components/Footer'
import CursorHearts from './components/CursorHearts'

function App() {
  return (
    <div className="max-w-3xl mx-auto relative">
      <CursorHearts />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Welcome />
        <Photos className="mt-8" />
        <Timeline className="mt-8" />
        <LoveList className="mt-8" />
        <Surprise className="mt-8" />
        <Footer className="mt-8" />
      </motion.div>
    </div>
  )
}

export default App
