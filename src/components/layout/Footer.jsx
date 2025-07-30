import { motion } from "framer-motion";
import { ArrowUp, Github, Heart, Linkedin, Mail } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import Button from "../ui/Button";

const Footer = () => {
  const { isDark } = useTheme();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/sourabhagarwal", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/sourabh-agarwal-41b13b301/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:sourabh.agarwal@example.com", label: "Email" }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <motion.div
              className={`text-2xl font-bold mb-4 transition-all duration-500 ${
                isDark
                  ? 'bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              Portfolio
            </motion.div>
            <p className={`mb-4 transition-colors duration-500 ${
              isDark ? 'text-gray-400' : 'text-gray-400'
            }`}>
              Frontend Developer & Python enthusiast passionate about building modern web applications and AI/ML projects.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    isDark
                      ? 'bg-slate-800 text-gray-400 hover:text-white hover:bg-slate-700'
                      : 'bg-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-300'
                  }`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className={`transition-colors duration-300 ${
                      isDark
                        ? 'text-gray-400 hover:text-white'
                        : 'text-gray-400 hover:text-gray-900'
                    }`}
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Technologies</h3>
            <div className={`space-y-2 ${
              isDark ? 'text-gray-400' : 'text-gray-400'
            }`}>
              <p>React & JavaScript</p>
              <p>Python & OpenCV</p>
              <p>Web Development</p>
              <p>AI/ML Libraries</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`border-t pt-8 flex flex-col md:flex-row justify-between items-center ${
          isDark ? 'border-slate-800' : 'border-gray-300'
        }`}>
          <div className={`flex items-center mb-4 md:mb-0 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="mx-2"
            >
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </motion.div>
            <span>by Sourabh Agarwal</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className={`${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              © {new Date().getFullYear()} All rights reserved.
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="p-2"
            >
              <ArrowUp size={20} />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
