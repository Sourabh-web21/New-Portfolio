import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BlobCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e) => {
      if (e.target.matches('button, a, .cursor-pointer, [role="button"]')) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e) => {
      if (e.target.matches('button, a, .cursor-pointer, [role="button"]')) {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
    };
  }, []);

  return (
    <>
      {/* Main blob cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.5,
        }}
      >
        <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-sm opacity-80" />
      </motion.div>

      {/* Trailing blob */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-40"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 0.8 : 1,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 100,
          mass: 0.8,
        }}
      >
        <div className="w-2 h-2 bg-white rounded-full opacity-90" />
      </motion.div>

      {/* Outer glow */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-30"
        animate={{
          x: mousePosition.x - 30,
          y: mousePosition.y - 30,
          scale: isHovering ? 2 : 1,
          opacity: isHovering ? 0.3 : 0.1,
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 150,
          mass: 1,
        }}
      >
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-400/30 to-purple-500/30 rounded-full blur-xl" />
      </motion.div>
    </>
  );
};

export default BlobCursor;
