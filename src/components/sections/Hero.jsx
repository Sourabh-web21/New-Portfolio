import { motion } from "framer-motion";
import { ChevronDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import Button from "../ui/Button";
import GlowButton from "../ui/GlowButton";
import TypewriterEffect from "../ui/TypewriterEffect";

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
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center justify-center bg-slate-900">
      {/* Modern Animated Background - Temporarily disabled */}
      {/* <AnimatedBackground /> */}

      {/* Enhanced Gradient Background */}
      <div className={`absolute inset-0 transition-all duration-500 ${
        isDark
          ? 'bg-gradient-to-br from-slate-900 via-blue-900/50 to-purple-900/50'
          : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'
      }`}>
        <div className={`absolute inset-0 ${isDark ? 'opacity-20' : 'opacity-30'}`} style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${isDark ? '9C92AC' : '6366F1'}' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
        animate={floatingAnimation}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          ...floatingAnimation,
          transition: { ...floatingAnimation.transition, delay: 2 }
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"
        animate={{
          rotate: 360,
          transition: { duration: 20, repeat: Infinity, ease: "linear" }
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={textVariants} className="mb-6">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-blue-300 border border-white/20 mb-6">
            Hello, I'm Sourabh
          </span>
        </motion.div>

        <motion.h1
          variants={textVariants}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          {/* <span className={`transition-all duration-500 ${
            isDark
              ? 'bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent'
              : 'bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent'
          }`}>
            Frontend
          </span> */}
          {/* <br /> */}
          <TypewriterEffect
            words={["Developer", "Programmer", "Problem Solver", "Tech Enthusiast"]}
            className="text-5xl md:text-7xl font-bold"
          />
        </motion.h1>

        <motion.p
          variants={textVariants}
          className={`text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed transition-colors duration-500 ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}
        >
          Frontend Developer & Python Enthusiast specializing in React, AI/ML projects, and modern web technologies
        </motion.p>

        <motion.div
          variants={textVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <GlowButton size="lg" variant="glow" className="group" onClick={scrollToProjects}>
            <span>View My Work</span>
            <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </GlowButton>
          <a href="https://drive.google.com/file/d/103NIGXB1koXSgj70B4SlHxP0Jj_NWVYN/view?usp=drive_link" download>
            <Button
              variant="secondary"
              size="lg"
              className={`transition-colors duration-300 ${
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
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
