import { AnimatePresence, motion } from "framer-motion";
import { Award, Code, Coffee, ExternalLink, Github, Palette, Users, X, Zap } from "lucide-react";
import { useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import Button from "../ui/Button";
import ModernCard from "../ui/ModernCard";

const About = () => {
  const { isDark } = useTheme();
  const [selectedExperience, setSelectedExperience] = useState(null);
  
  const skills = [
    { name: "React & JavaScript", icon: Code, level: 85, color: "from-blue-500 to-cyan-500" },
    { name: "Python & AI/ML", icon: Zap, level: 80, color: "from-purple-500 to-pink-500" },
    { name: "OpenCV & Computer Vision", icon: Palette, level: 75, color: "from-yellow-500 to-orange-500" },
    { name: "Web Development", icon: Users, level: 88, color: "from-green-500 to-emerald-500" }
  ];

  // Complete experience data with images and detailed info
  const experiences = [
    {
      title: "Computer Vision Intern",
      company: "TTL Engineering Pvt. Ltd.",
      duration: "Jun 2025 - Jul 2025",
      location: "Gurgaon, India",
      type: "internship",
      description: "Worked on vehicle and number plate detection using YOLO and contributed to the internal testing of AI-based web applications.",
      achievements: [
        "Created annotated datasets for vehicle classification and number plate detection",
        "Trained YOLO models for object detection on video feeds",
        "Tested internal web and AI tools, identifying bugs and improving system reliability",
        "Conducted competitor analysis to benchmark accuracy and performance"
      ],
      technologies: ["YOLO", "Computer Vision", "Python", "AI Testing", "Dataset Annotation", "OpenCV", "PyTorch"],
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop&crop=center",
      detailedDescription: "During my internship at TTL Engineering, I worked extensively on computer vision projects focused on real-time vehicle detection and number plate recognition systems. My work involved YOLO-based model development, custom dataset creation, internal testing, and benchmarking through competitor analysis. This experience gave me practical insights into AI model training, performance tuning, and system-level QA testing.",
      responsibilities: [
        "Developed and maintained annotated datasets for vehicle classification with over 10,000 labeled images",
        "Implemented YOLO v5 and v8 models for real-time object detection on live video feeds",
        "Conducted comprehensive testing of internal AI tools and web applications",
        "Collaborated with senior engineers to optimize model performance and accuracy",
        "Documented testing procedures and created bug reports for development team",
        "Performed competitor analysis to evaluate detection system performance against industry benchmarks"
      ],
      learnings: [
        "Advanced understanding of YOLO architecture and computer vision algorithms",
        "Experience with dataset annotation tools like LabelImg and Roboflow",
        "Proficiency in OpenCV and PyTorch for computer vision tasks",
        "Knowledge of AI model deployment and optimization techniques",
        "Understanding of software testing methodologies for AI applications"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop&crop=center",
        "/images/sample.png",
        "/images/graphs.png"
      ]
    },
    {
      title: "Smart India Hackathon – Dialogic Chatbot",
      company: "VIT Chennai",
      duration: "Mar 2024",
      location: "Chennai, India",
      type: "hackathon",
      description: "Designed and developed 'Dialogic' — an AI-powered Socratic chatbot built to foster critical thinking and self-reflection among students through guided questioning.",
      achievements: [
        "🏅 Selected among Top 50 teams in internal Smart India Hackathon (SIH) screening at VIT",
        "Built a full-stack chatbot system using modern AI and web technologies",
        "Enabled contextual learning using dynamic questioning and user-specific dialogue flow"
      ],
      technologies: ["React", "Node.js", "OpenAI API", "Framer Motion", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/WebDevHarsha/Dialogic-AI.git",
      demo: "https://dialogic-ai-sih.vercel.app/dialogic",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop&crop=center",
      detailedDescription: "As part of the internal round of Smart India Hackathon (SIH) 2024 at VIT Chennai, our team developed 'Dialogic', a Socratic AI chatbot aimed at revolutionizing education through inquiry-based learning. The chatbot guides students through a conversational journey, asking thought-provoking questions and encouraging deeper understanding rather than providing direct answers. The project emphasized ethical AI usage, personalized learning, and intuitive UI/UX design.",
      responsibilities: [
        "Designed the chatbot interface and implemented frontend in React with Tailwind CSS and Framer Motion",
        "Integrated OpenAI API to power the Socratic questioning and contextual conversations",
        "Collaborated on dialogue design logic for educational flow and retention",
        "Participated in live internal pitching and demo rounds at VIT Chennai",
        "Ensured mobile-responsive design and smooth UX for student accessibility"
      ],
      learnings: [
        "Understanding of Socratic learning methodology and how to model it in AI systems",
        "Experience with prompt engineering for dynamic and educational dialogues",
        "Hands-on integration of OpenAI API with frontend and backend logic",
        "Improved skills in team collaboration, pitch presentation, and full-stack development",
        "Knowledge of deploying full-stack applications with responsive UI"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&crop=center",
        "/images/Screenshot 2025-08-01 224220.png"
      ],
      teamImages: [
        "/images/WhatsApp Image 2025-08-01 at 20.48.09_339b1ca9.jpg"
      ]
    }
  ];

  const timeline = [
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
  ];

  const stats = [
    { number: "15+", label: "Projects Built", icon: Award },
    { number: "3+", label: "Years Learning", icon: Code },
    { number: "∞", label: "Lines of Code & Coffee", icon: Coffee }
  ];

  return (
    <>
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

          {/* Enhanced Skills Section */}
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.2,
                    type: "spring",
                    bounce: 0.3
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.03,
                    y: -5,
                    transition: { duration: 0.3, type: "spring", stiffness: 400 }
                  }}
                  className="group relative"
                >
                  <ModernCard 
                    variant="glass" 
                    className={`overflow-hidden relative transition-all duration-500 ${
                      isDark 
                        ? 'hover:bg-white/10 border border-white/10 hover:border-white/25' 
                        : 'hover:bg-gray-50 border border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {/* Animated background gradient on hover */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${
                          skill.color.includes('blue') ? 'rgba(59, 130, 246, 0.05)' :
                          skill.color.includes('purple') ? 'rgba(147, 51, 234, 0.05)' :
                          skill.color.includes('yellow') ? 'rgba(245, 158, 11, 0.05)' :
                          'rgba(34, 197, 94, 0.05)'
                        }, transparent)`
                      }}
                      initial={false}
                    />

                    {/* Skill content */}
                    <div className="relative z-10 p-6">
                      {/* Icon and Title */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <motion.div
                            className={`p-3 rounded-lg transition-all duration-300 ${
                              isDark ? 'bg-white/10' : 'bg-gray-100'
                            } group-hover:scale-110`}
                            whileHover={{ rotate: [0, -10, 10, 0] }}
                            transition={{ duration: 0.5 }}
                          >
                            <skill.icon className={`w-6 h-6 ${
                              skill.color.includes('blue') ? (isDark ? 'text-blue-400' : 'text-blue-600') :
                              skill.color.includes('purple') ? (isDark ? 'text-purple-400' : 'text-purple-600') :
                              skill.color.includes('yellow') ? (isDark ? 'text-yellow-400' : 'text-yellow-600') :
                              (isDark ? 'text-green-400' : 'text-green-600')
                            }`} />
                          </motion.div>
                          <div>
                            <h4 className={`font-bold text-lg ${
                              isDark ? 'text-white' : 'text-gray-900'
                            }`}>
                              {skill.name}
                            </h4>
                          </div>
                        </div>
                        
                        {/* Skill percentage badge */}
                        <motion.span
                          className={`px-3 py-1 rounded-full text-sm font-bold ${
                            skill.color.includes('blue') ? (isDark ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-100 text-blue-700') :
                            skill.color.includes('purple') ? (isDark ? 'bg-purple-500/20 text-purple-300' : 'bg-purple-100 text-purple-700') :
                            skill.color.includes('yellow') ? (isDark ? 'bg-yellow-500/20 text-yellow-300' : 'bg-yellow-100 text-yellow-700') :
                            (isDark ? 'bg-green-500/20 text-green-300' : 'bg-green-100 text-green-700')
                          }`}
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          transition={{ delay: index * 0.2 + 0.5, duration: 0.3 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>

                      {/* Enhanced Progress Bar */}
                      <div className="space-y-2">
                        <div className={`w-full h-3 rounded-full overflow-hidden ${
                          isDark ? 'bg-gray-700' : 'bg-gray-200'
                        }`}>
                          <motion.div
                            className={`h-full rounded-full bg-gradient-to-r ${skill.color} relative overflow-hidden`}
                            initial={{ width: "0%" }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ 
                              duration: 1.5, 
                              delay: index * 0.3 + 0.5,
                              ease: "easeOut"
                            }}
                          >
                            {/* Animated shimmer effect */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                              animate={{
                                x: ["-100%", "100%"],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: index * 0.3 + 2,
                                ease: "linear"
                              }}
                              style={{ transform: "skewX(-20deg)" }}
                            />
                          </motion.div>
                        </div>

                        {/* Skill level indicators */}
                        <div className="flex justify-between text-xs">
                          <span className={isDark ? 'text-gray-500' : 'text-gray-400'}>Beginner</span>
                          <span className={isDark ? 'text-gray-500' : 'text-gray-400'}>Intermediate</span>
                          <span className={isDark ? 'text-gray-500' : 'text-gray-400'}>Expert</span>
                        </div>
                      </div>

                      {/* Animated dots for visual interest */}
                      <div className="flex justify-center mt-4 space-x-1">
                        {[...Array(3)].map((_, dotIndex) => (
                          <motion.div
                            key={dotIndex}
                            className={`w-1.5 h-1.5 rounded-full ${
                              skill.color.includes('blue') ? 'bg-blue-400' :
                              skill.color.includes('purple') ? 'bg-purple-400' :
                              skill.color.includes('yellow') ? 'bg-yellow-400' :
                              'bg-green-400'
                            }`}
                            animate={{
                              scale: [1, 1.3, 1],
                              opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: dotIndex * 0.3 + index * 0.1,
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Bottom glow effect on hover */}
                    <motion.div
                      className={`absolute bottom-0 left-0 w-full h-1 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 bg-gradient-to-r ${skill.color}`}
                    />
                  </ModernCard>
                </motion.div>
              ))}
            </div>

            {/* Skills Summary */}
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <div className={`inline-flex items-center space-x-3 px-6 py-3 rounded-full ${
                isDark 
                  ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-300' 
                  : 'bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 text-blue-700'
              }`}>
                <Zap className="w-4 h-4" />
                <span className="text-sm font-medium">Always learning, always growing</span>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Code className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Experience Section with Images and Modal */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-3xl font-bold text-center mb-12 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Professional Experience</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`rounded-2xl transition-all duration-300 overflow-hidden cursor-pointer ${
                    isDark
                      ? 'bg-slate-800/80 border border-slate-700 hover:border-slate-600'
                      : 'bg-white/90 border border-gray-200 shadow-lg hover:shadow-xl'
                  }`}
                  onClick={() => setSelectedExperience(exp)}
                >
                  {/* Experience Image */}
                  {exp.image && (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={exp.image}
                        alt={exp.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className={`absolute inset-0 ${
                        isDark ? 'bg-gradient-to-t from-slate-800/80 to-transparent' : 'bg-gradient-to-t from-white/80 to-transparent'
                      }`}></div>
                    </div>
                  )}

                  <div className="p-6">
                    <div className="mb-4">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className={`text-xl font-bold ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                          {exp.title} {exp.type === 'hackathon' && exp.achievements[0].includes('🏅') ? '🏅' : ''}
                        </h4>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          exp.type === 'hackathon'
                            ? (isDark ? 'bg-yellow-500/20 text-yellow-400' : 'bg-yellow-100 text-yellow-700')
                            : (isDark ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-700')
                        }`}>
                          {exp.type === 'hackathon' ? 'Hackathon' : 'Internship'}
                        </span>
                      </div>
                      <p className={`font-semibold ${
                        isDark ? 'text-blue-400' : 'text-blue-600'
                      }`}>{exp.company}</p>
                      <p className={`text-sm ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>{exp.duration} • {exp.location}</p>
                    </div>

                    <p className={`mb-4 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>{exp.description}</p>

                    <div className="mb-4">
                      <h5 className={`font-semibold mb-2 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>Key Achievements:</h5>
                      <ul className="space-y-1">
                        {exp.achievements.slice(0, 2).map((achievement, i) => (
                          <li key={i} className={`text-sm flex items-start space-x-2 ${
                            isDark ? 'text-gray-300' : 'text-gray-700'
                          }`}>
                            <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                              isDark ? 'bg-blue-400' : 'bg-blue-600'
                            }`}></span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.technologies.slice(0, 4).map((tech, i) => (
                        <span
                          key={i}
                          className={`px-2 py-1 rounded text-xs font-medium ${
                            exp.type === 'hackathon'
                              ? (isDark ? 'bg-yellow-500/20 text-yellow-300' : 'bg-yellow-100 text-yellow-700')
                              : (isDark ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-100 text-blue-700')
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                      {exp.technologies.length > 4 && (
                        <span className={`px-2 py-1 rounded text-xs ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          +{exp.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    {(exp.github || exp.demo) && (
                      <div className="flex gap-3 pt-2">
                        {exp.github && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(exp.github, '_blank');
                            }}
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </Button>
                        )}
                        {exp.demo && (
                          <Button
                            variant="primary"
                            size="sm"
                            className="flex-1"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(exp.demo, '_blank');
                            }}
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Journey Timeline - Improved Card Grid Layout */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-3xl font-bold text-center mb-12 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>My Journey</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group cursor-pointer"
                >
                  <ModernCard 
                    variant="glass" 
                    className={`h-full relative overflow-hidden transition-all duration-300 ${
                      isDark 
                        ? 'hover:bg-white/10 border border-white/10 hover:border-white/20' 
                        : 'hover:bg-gray-50 border border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {/* Year Badge */}
                    <div className="flex justify-between items-start mb-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${
                        isDark
                          ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                          : 'bg-blue-100 text-blue-800 border border-blue-200'
                      }`}>
                        {item.year}
                      </span>
                      
                      {/* Decorative element */}
                      <div className={`w-2 h-2 rounded-full transition-all duration-300 group-hover:scale-150 ${
                        index % 3 === 0 ? 'bg-blue-500' : 
                        index % 3 === 1 ? 'bg-purple-500' : 'bg-cyan-500'
                      }`}></div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h4 className={`text-lg font-bold transition-colors duration-300 ${
                        isDark ? 'text-white group-hover:text-blue-300' : 'text-gray-900 group-hover:text-blue-600'
                      }`}>
                        {item.title}
                      </h4>
                      
                      <div className={`text-sm font-medium ${
                        isDark ? 'text-purple-400' : 'text-purple-600'
                      }`}>
                        {item.company}
                      </div>
                      
                      <p className={`text-sm leading-relaxed ${
                        isDark ? 'text-gray-400 group-hover:text-gray-300' : 'text-gray-600 group-hover:text-gray-700'
                      }`}>
                        {item.description}
                      </p>
                    </div>

                    {/* Hover gradient overlay */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                      index % 3 === 0 ? 'bg-gradient-to-br from-blue-500/5 to-transparent' :
                      index % 3 === 1 ? 'bg-gradient-to-br from-purple-500/5 to-transparent' :
                      'bg-gradient-to-br from-cyan-500/5 to-transparent'
                    }`}></div>

                    {/* Bottom accent line */}
                    <div className={`absolute bottom-0 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                      index % 3 === 0 ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                      index % 3 === 1 ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                      'bg-gradient-to-r from-cyan-500 to-cyan-600'
                    }`}></div>
                  </ModernCard>
                </motion.div>
              ))}
            </div>

            {/* Journey continuation indicator */}
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
            >
              <div className={`inline-flex items-center space-x-2 px-6 py-3 rounded-full ${
                isDark 
                  ? 'bg-white/5 border border-white/10 text-gray-400' 
                  : 'bg-gray-100 border border-gray-200 text-gray-600'
              }`}>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
                <span className="text-sm font-medium">Journey continues...</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Detail Modal */}
      <AnimatePresence>
        {selectedExperience && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedExperience(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl ${
                isDark ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-gray-200'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative">
                {selectedExperience.gallery && selectedExperience.gallery[0] && (
                  <div className="h-64 overflow-hidden rounded-t-2xl">
                    <img
                      src={selectedExperience.gallery[0]}
                      alt={selectedExperience.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 ${
                      isDark ? 'bg-gradient-to-t from-slate-800/90 to-transparent' : 'bg-gradient-to-t from-white/90 to-transparent'
                    }`}></div>
                  </div>
                )}

                {/* Close Button */}
                <button
                  onClick={() => setSelectedExperience(null)}
                  className={`absolute top-4 right-4 p-2 rounded-full ${
                    isDark ? 'bg-slate-700/80 text-white hover:bg-slate-600' : 'bg-white/80 text-gray-900 hover:bg-white'
                  } transition-colors duration-200`}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                {/* Title Section */}
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className={`text-3xl font-bold mb-2 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {selectedExperience.title}
                        {selectedExperience.type === 'hackathon' && selectedExperience.achievements[0].includes('🏅') ? ' 🏅' : ''}
                      </h2>
                      <p className={`text-xl font-semibold ${
                        isDark ? 'text-blue-400' : 'text-blue-600'
                      }`}>{selectedExperience.company}</p>
                      <p className={`${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>{selectedExperience.duration} • {selectedExperience.location}</p>
                    </div>
                    <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                      selectedExperience.type === 'hackathon'
                        ? (isDark ? 'bg-yellow-500/20 text-yellow-400' : 'bg-yellow-100 text-yellow-700')
                        : (isDark ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-700')
                    }`}>
                      {selectedExperience.type === 'hackathon' ? 'Hackathon' : 'Internship'}
                    </span>
                  </div>
                </div>

                {/* Detailed Description */}
                <div className="mb-8">
                  <h3 className={`text-xl font-semibold mb-4 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>Overview</h3>
                  <p className={`text-lg leading-relaxed ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>{selectedExperience.detailedDescription}</p>
                </div>

                {/* Responsibilities */}
                {selectedExperience.responsibilities && (
                  <div className="mb-8">
                    <h3 className={`text-xl font-semibold mb-4 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>Key Responsibilities</h3>
                    <ul className="space-y-3">
                      {selectedExperience.responsibilities.map((responsibility, i) => (
                        <li key={i} className={`flex items-start space-x-3 ${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          <span className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                            isDark ? 'bg-blue-400' : 'bg-blue-600'
                          }`}></span>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Key Learnings */}
                {selectedExperience.learnings && (
                  <div className="mb-8">
                    <h3 className={`text-xl font-semibold mb-4 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>Key Learnings</h3>
                    <ul className="space-y-3">
                      {selectedExperience.learnings.map((learning, i) => (
                        <li key={i} className={`flex items-start space-x-3 ${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          <span className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                            isDark ? 'bg-green-400' : 'bg-green-600'
                          }`}></span>
                          <span>{learning}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                <div className="mb-8">
                  <h3 className={`text-xl font-semibold mb-4 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>Technologies Used</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedExperience.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-4 py-2 rounded-lg text-sm font-medium ${
                          selectedExperience.type === 'hackathon'
                            ? (isDark ? 'bg-yellow-500/20 text-yellow-300' : 'bg-yellow-100 text-yellow-700')
                            : (isDark ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-100 text-blue-700')
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Team Images (for hackathons) */}
                {selectedExperience.type === 'hackathon' && selectedExperience.teamImages && (
                  <div className="mb-8">
                    <h3 className={`text-xl font-semibold mb-4 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>Team Photos</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedExperience.teamImages.map((image, i) => (
                        <div key={i} className="rounded-lg overflow-hidden">
                          <img
                            src={image}
                            alt={`${selectedExperience.title} - Team Photo ${i + 1}`}
                            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                            onError={(e) => {
                              e.target.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&crop=center";
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Project Gallery */}
                {selectedExperience.gallery && selectedExperience.gallery.length > 1 && (
                  <div className="mb-8">
                    <h3 className={`text-xl font-semibold mb-4 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>Project Gallery</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedExperience.gallery.slice(1).map((image, i) => (
                        <div key={i} className="rounded-lg overflow-hidden">
                          <img
                            src={image}
                            alt={`${selectedExperience.title} - Image ${i + 2}`}
                            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-4">
                  {selectedExperience.github && (
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => window.open(selectedExperience.github, '_blank')}
                    >
                      <Github className="w-5 h-5 mr-2" />
                      View Code
                    </Button>
                  )}
                  {selectedExperience.demo && (
                    <Button
                      variant="primary"
                      className="flex-1"
                      onClick={() => window.open(selectedExperience.demo, '_blank')}
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default About;