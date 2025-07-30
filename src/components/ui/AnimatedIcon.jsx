import { motion } from "framer-motion";

const AnimatedIcon = ({ 
  icon: Icon, 
  className = "", 
  variant = "bounce",
  size = 24,
  color = "currentColor",
  ...props 
}) => {
  const variants = {
    bounce: {
      y: [0, -8, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    rotate: {
      rotate: [0, 360],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "linear"
      }
    },
    pulse: {
      scale: [1, 1.2, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    float: {
      y: [0, -10, 0],
      x: [0, 5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    glow: {
      filter: [
        "drop-shadow(0 0 0px rgba(6, 182, 212, 0.5))",
        "drop-shadow(0 0 20px rgba(6, 182, 212, 0.8))",
        "drop-shadow(0 0 0px rgba(6, 182, 212, 0.5))"
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    shake: {
      x: [0, -2, 2, -2, 2, 0],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatDelay: 3
      }
    }
  };

  return (
    <motion.div
      className={`inline-flex items-center justify-center ${className}`}
      animate={variants[variant]}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      <Icon size={size} color={color} />
    </motion.div>
  );
};

export default AnimatedIcon;
