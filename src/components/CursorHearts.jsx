import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorHearts = () => {
  const [hearts, setHearts] = useState([]);
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Update dimensions on window resize
  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Create hearts every 300ms (adjustable for performance)
    const interval = setInterval(() => {
      const heart = {
        x: Math.random() * (dimensions.width - 100) + 50, // 50px padding
        y: Math.random() * (dimensions.height - 100) + 50,
        scale: Math.random() * 0.8 + 0.8, // Scale between 0.8 and 1.6
        opacity: 0.8,
        key: Date.now(),
        delay: Math.random() * 2,
      };
      setHearts((prev) => [...prev, heart]);

      // Remove hearts after 3 seconds
      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.key !== heart.key));
      }, 3000);
    }, 100); // Slower interval for better performance

    return () => clearInterval(interval);
  }, [dimensions]);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {hearts.map((heart) => (
        <motion.div
          key={heart.key}
          className="text-pink-500 text-2xl"
          initial={{
            x: heart.x,
            y: heart.y,
            scale: heart.scale,
            opacity: heart.opacity,
          }}
          animate={{
            x: heart.x + Math.random() * 20 - 10, // Reduced horizontal movement
            y: Math.max(50, heart.y - 100), // Ensure hearts don't go above top
            scale: heart.scale * 0.8,
            opacity: 0,
          }}
          transition={{
            duration: 2,
            ease: 'easeOut',
            delay: heart.delay,
          }}
          style={{
            position: 'fixed', // Use fixed to ensure viewport-relative positioning
            left: 0,
            top: 0,
            transform: `translate(${heart.x}px, ${heart.y}px)`, // Use transform for positioning
            pointerEvents: 'none',
            zIndex: 10, // Higher z-index to ensure visibility
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
};

export default CursorHearts;