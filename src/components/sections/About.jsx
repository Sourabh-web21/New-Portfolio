import { motion } from "framer-motion";
import { Award, Code, Coffee, Palette, Users, Zap } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import ModernCard from "../ui/ModernCard";
import SkillBar from "../ui/SkillBar";

const About = () => {
  const { isDark } = useTheme();
  const skills = [
    { name: "React & JavaScript", icon: Code, level: 85, color: "from-blue-500 to-cyan-500" },
    { name: "Python & AI/ML", icon: Zap, level: 80, color: "from-purple-500 to-pink-500" },
    { name: "OpenCV & Computer Vision", icon: Palette, level: 75, color: "from-yellow-500 to-orange-500" },
    { name: "Web Development", icon: Users, level: 88, color: "from-green-500 to-emerald-500" }
  ];

  const timeline =
    [
  {
    year: "2025",
    title: "DSA Mastery & Internship Prep",
    company: "Focused Learning",
    description: "Currently mastering Data Structures and Algorithms using C++ while preparing for tech internships."
  },
  {
    year: "2025",
    title: "Computer Vision Intern",
    company: "TTL Engineering Pvt. Ltd.",
    description: "Worked on vehicle and number plate detection using YOLO, dataset creation, and AI tool testing."
  },
  {
    year: "2024",
    title: "Smart India Hackathon – Top 50",
    company: "VIT Chennai",
    description: "Built 'Dialogic', a Socratic AI chatbot, and got selected among the top 50 teams in the internal SIH screening."
  },
  {
    year: "2024",
    title: "Web & AI Projects",
    company: "Personal Development",
    description: "Created full-stack and AI-based apps including a face-organizing tool and number plate extractor."
  },
  {
    year: "2023",
    title: "Technical Foundations",
    company: "VIT Chennai",
    description: "Explored Python, C/C++, Java, and web development. Participated in hackathons and tech workshops."
  },
  {
    year: "2021",
    title: "Programming Kickstart",
    company: "Self-Learning",
    description: "Began learning programming through Python, basic web technologies, and computer vision basics."
  }
]


  const stats = [
    { number: "15+", label: "Projects Built", icon: Award },
    { number: "3+", label: "Years Learning", icon: Code },
    { number: "∞", label: "Lines of Code & Cofee", icon: Coffee }
  ];

  return (
    <section id="about" className={`py-20 transition-all duration-500 ${
      isDark
        ? 'bg-gradient-to-b from-slate-900/50 to-slate-800/50'
        : 'bg-gradient-to-b from-white to-gray-50'
    }`}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className={`transition-all duration-500 ${
              isDark
                ? 'bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
            }`}>
              About Me
            </span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto transition-colors duration-500 ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            I'm a Developer and C++/Python enthusiast currently pursuing B.Tech at VIT Chennai. I specialize in React development, AI/ML projects with OpenCV, and building modern web applications.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <ModernCard key={index} variant="glass" className="text-center">
              <stat.icon className={`w-12 h-12 mx-auto mb-4 ${
                isDark ? 'text-blue-400' : 'text-blue-600'
              }`} />
              <div className={`text-3xl font-bold mb-2 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>{stat.number}</div>
              <div className={`${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>{stat.label}</div>
            </ModernCard>
          ))}
        </motion.div>

        {/* Skills */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className={`text-3xl font-bold text-center mb-12 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>Skills & Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <ModernCard key={index} variant="glow" className="group">
                <SkillBar
                  skill={skill.name}
                  percentage={skill.level}
                  icon={skill.icon}
                  color={skill.color}
                  delay={index * 200}
                />
              </ModernCard>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className={`text-3xl font-bold text-center mb-12 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>My Journey</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-purple-400 to-cyan-400 rounded-full"></div>
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <ModernCard variant="neon" className="relative">
                    <div className="text-2xl font-bold text-blue-400 mb-2">{item.year}</div>
                    <h4 className="text-xl font-semibold text-white mb-1">{item.title}</h4>
                    <div className="text-purple-300 mb-2">{item.company}</div>
                    <p className="text-gray-300">{item.description}</p>
                  </ModernCard>
                </div>
                <div className="relative z-10">
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-slate-900 shadow-lg"></div>
                </div>
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
