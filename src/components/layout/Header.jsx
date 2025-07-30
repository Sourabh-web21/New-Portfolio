import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import Button from "../ui/Button";
import ThemeToggle from "../ui/ThemeToggle";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];



  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? "bg-black/20 backdrop-blur-md border-b border-white/10"
            : "bg-white/90 backdrop-blur-md border-b border-black/10 shadow-lg"
          : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className={`text-2xl font-bold transition-colors duration-300 ${
              isDark
                ? 'bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
            }`}
            whileHover={{ scale: 1.05 }}
          >
            Sourabh
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`transition-colors duration-300 ${
                  isDark
                    ? 'text-white/80 hover:text-white'
                    : 'text-gray-700 hover:text-gray-900 font-medium'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
            <div className="flex items-center ml-4">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 ${isDark ? 'text-white' : 'text-gray-900'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className={`md:hidden mt-4 ${isOpen ? "block" : "hidden"}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col space-y-4 py-4">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`transition-colors duration-300 ${
                  isDark
                    ? 'text-white/80 hover:text-white'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
                onClick={() => setIsOpen(false)}
                whileHover={{ x: 10 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Header;
