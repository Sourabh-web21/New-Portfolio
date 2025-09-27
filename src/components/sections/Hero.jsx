import { motion } from "framer-motion";
import { ChevronDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useRef } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import Button from "../ui/Button";
import GlowButton from "../ui/GlowButton";
import TypewriterEffect from "../ui/TypewriterEffect";

// Code Rain Component
const CodeRain = ({ isDark }) => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Set canvas size to match parent container
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
    };
    
    // Initial resize
    resizeCanvas();
    
    // Add resize listener
    window.addEventListener('resize', resizeCanvas);
    
    // Also observe parent size changes
    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(canvas.parentElement);
    
    // Code characters to use
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789{}[]()<>=+-*/%&|^~!@#$';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    
    // Array to track drops
    const drops = [];
    
    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * canvas.height / fontSize);
    }
    
    const draw = () => {
      // Semi-transparent background to create trail effect
      ctx.fillStyle = isDark 
        ? 'rgba(15, 23, 42, 0.05)' // slate-900 with low opacity
        : 'rgba(248, 250, 252, 0.1)'; // slate-50 with low opacity
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Set text properties
      ctx.font = `${fontSize}px monospace`;
      
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const char = chars[Math.floor(Math.random() * chars.length)];
        
        // Color gradient effect
        const opacity = Math.random() * 0.5 + 0.1;
        if (isDark) {
          // Blue to purple gradient for dark mode
          ctx.fillStyle = Math.random() > 0.5 
            ? `rgba(59, 130, 246, ${opacity})` // blue-500
            : `rgba(147, 51, 234, ${opacity})`; // purple-600
        } else {
          // Darker blues/purples for light mode
          ctx.fillStyle = Math.random() > 0.5 
            ? `rgba(30, 64, 175, ${opacity})` // blue-800
            : `rgba(88, 28, 135, ${opacity})`; // purple-800
        }
        
        // Draw character
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        ctx.fillText(char, x, y);
        
        // Move drop down or reset to top
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };
    
    const interval = setInterval(draw, 100);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
      resizeObserver.disconnect();
    };
  }, [isDark]);
  
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

const Hero = () => {
  const { isDark } = useTheme();
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const floatingAnimation = {
    y: [-20, 20, -20],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section id="home" className="min-h-screen h-screen relative overflow-hidden flex items-center justify-center">
      {/* Base Background */}
      <div className={`absolute inset-0 transition-all duration-500 ${
        isDark
          ? 'bg-gradient-to-br from-slate-900 via-blue-900/30 to-purple-900/30'
          : 'bg-gradient-to-br from-blue-50 via-purple-50/70 to-pink-50/70'
      }`} />

      {/* Code Rain Background */}
      <CodeRain isDark={isDark} />

      {/* Subtle overlay for better text readability */}
      <div className={`absolute inset-0 ${
        isDark 
          ? 'bg-slate-900/20' 
          : 'bg-white/30'
      }`} style={{ zIndex: 2 }} />

      {/* Floating Elements - reduced opacity to not compete with code rain */}
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"
        animate={floatingAnimation}
        style={{ zIndex: 3 }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
        animate={{
          ...floatingAnimation,
          transition: { ...floatingAnimation.transition, delay: 2 }
        }}
        style={{ zIndex: 3 }}
      />

      {/* Content */}
      <motion.div
        className="relative text-center px-6 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ zIndex: 10 }}
      >
        <motion.div variants={textVariants} className="mb-6">
          <span className={`inline-block px-4 py-2 backdrop-blur-sm rounded-full text-sm border mb-6 ${
            isDark
              ? 'bg-white/10 text-blue-300 border-white/20'
              : 'bg-white/70 text-blue-700 border-blue-200'
          }`}>
            Hello, I'm Sourabh
          </span>
        </motion.div>

        <motion.h1
          variants={textVariants}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          <TypewriterEffect
            words={["Developer", "Programmer", "Problem Solver", "Tech Enthusiast"]}
            className={`text-5xl md:text-7xl font-bold ${
              isDark
                ? 'text-white drop-shadow-lg'
                : 'text-gray-900 drop-shadow-sm'
            }`}
          />
        </motion.h1>

        <motion.p
          variants={textVariants}
          className={`text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed transition-colors duration-500 ${
            isDark 
              ? 'text-gray-200 drop-shadow-md' 
              : 'text-gray-800 drop-shadow-sm'
          }`}
        >
          Frontend Developer & Python Enthusiast specializing in React, AI/ML projects, and modern web technologies
        </motion.p>

        <motion.div
          variants={textVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <GlowButton size="lg" variant="glow" className="group backdrop-blur-sm" onClick={scrollToProjects}>
            <span>View My Work</span>
            <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </GlowButton>
          <a href="https://drive.google.com/file/d/1vAblyBJ4H0coguBMz4YHEHlPD65RJcsr/view?usp=sharing" download>
            <Button
              variant="secondary"
              size="lg"
              className={`backdrop-blur-sm transition-colors duration-300 ${
                isDark
                  ? 'text-white border-white/20 hover:bg-white/10'
                  : 'text-gray-900 border-gray-300 hover:bg-gray-100'
              }`}
            >
              <Download className="mr-2 w-5 h-5" />
              Download CV
            </Button>
          </a>
        </motion.div>

        <motion.div
          variants={textVariants}
          className="flex justify-center space-x-6"
        >
          {[
            { icon: Github, href: "https://github.com/sourabh-web21", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/sourabh-agarwal-41b13b301/", label: "LinkedIn" },
            { icon: Mail, href: "mailto:sourabh.agarwal2023@vitstudent.ac.in", label: "Email" }
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              className={`p-3 backdrop-blur-sm rounded-full border transition-all duration-300 ${
                isDark
                  ? 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                  : 'bg-white/70 border-gray-300 text-gray-700 hover:bg-white shadow-lg hover:shadow-xl'
              }`}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={24} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      {/* <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        style={{ zIndex: 10 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className={`w-6 h-10 border-2 rounded-full flex justify-center ${
            isDark ? 'border-white/30' : 'border-gray-600/50'
          }`}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`w-1 h-3 rounded-full mt-2 ${
              isDark ? 'bg-white/60' : 'bg-gray-600/70'
            }`}
          />
        </motion.div>
      </motion.div> */}
    </section>
  );
};

export default Hero;