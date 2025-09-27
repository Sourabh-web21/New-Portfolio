import { AnimatePresence, motion, useInView } from "framer-motion";
import { ChevronDown, ExternalLink, Eye, Filter, Github, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import Button from "../ui/Button";
import Card from "../ui/Card";

const Projects = () => {
  const { isDark } = useTheme();
  const [filter, setFilter] = useState("all");
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [displayedProjects, setDisplayedProjects] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const loadMoreRef = useRef();
  const isInView = useInView(loadMoreRef, { threshold: 0.1 });

  const PROJECTS_PER_LOAD = 3;

  // Experience data (keeping the same as original)
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

  const categories = ["all", "web", "python", "ai/ml"];

  const allProjects = [
    {
      id: 1,
      title: "YouTube Teach – Educational Video Platform",
      description: "A platform to organize and access educational YouTube content efficiently",
      longDescription: "YouTube Teach is a React and Gradio-powered platform designed to help students easily browse and explore curated educational YouTube videos. Users can filter content based on board, subject, and class, providing a streamlined learning experience. The system uses a structured dataset and allows for easy expansion to support more content types or recommendations in the future.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
      category: "web",
      technologies: ["React", "Gradio", "Python", "Pandas"],
      github: "https://github.com/Sourabh-web21/Youtube_Teach_Platform",
      live: "https://youtube-teach-platform.vercel.app",
      featured: true
    },
    {
      id: 2,
      title: "Competitor Analysis System",
      description: "AI-powered tool for automated competitor research using APIs and search data",
      longDescription: "An advanced market research tool that uses Python, Gradio, and various APIs (Google Trends, SerpAPI, SEMrush) to analyze competitors in real-time. Features include trend analysis, SERP scraping, SEO metrics, and tech stack identification with a simple frontend interface.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      category: "python",
      technologies: ["Python", "Gradio", "PyTrends", "SerpAPI", "SEMrush", "Selenium"],
      github: "https://github.com/Sourabh-web21/Competitor-Analyser",
      live: "https://competitor-analyser.onrender.com",
      featured: true
    },
    {
      id: 3,
      title: "TechMate – Laptop Recommendation System",
      description: "Smart AI-powered laptop recommendations using Python",
      longDescription: "TechMate is an intelligent laptop recommendation system built with Python. It helps users find the most suitable laptops based on their preferences such as brand, RAM, storage, processor type, and more. Using content-based filtering, TechMate delivers accurate and personalized suggestions. The system is modular, dataset-driven, and designed to be enhanced with future ML/NLP capabilities.",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=400&fit=crop",
      category: "ai/ml",
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn"],
      github: "https://github.com/Sourabh-web21/TechMate_",
      live: "https://github.com/sourabhagarwal",
      featured: false
    },
    {
      id: 4,
      title: "Dialogic",
      description: "Socratic AI chatbot built for SIH 2024 using Next.js and modern AI stack",
      longDescription: "Dialogic is an intelligent Socratic chatbot developed for Smart India Hackathon 2024. It guides users through reflective questioning and deep thinking, inspired by the Socratic method. Built with Next.js, Tailwind CSS, and integrated with AI APIs, it offers a responsive, accessible, and engaging conversational interface.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      category: "ai/ml",
      technologies: ["Next.js", "Tailwind CSS", "OpenAI", "Vercel"],
      github: "https://github.com/WebDevHarsha/Dialogic-AI.git",
      live: "https://dialogic-ai-sih.vercel.app/dialogic",
      featured: false
    },
    {
      id: 5,
      title: "Mood Tracker – Personalized Music Recommendation App",
      description: "An app that suggests Spotify tracks based on your current mood",
      longDescription: "Mood Tracker is a full-stack application built with React, Vite, Node.js, and MongoDB. Users can log in, select their current mood, and receive a curated list of Spotify tracks to match their mood. The app securely stores user data, tracks mood history, and integrates with the Spotify API to provide personalized recommendations. Designed to work seamlessly both locally and when deployed on Vercel/Render.",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&h=400&fit=crop",
      category: "web",
      technologies: ["React", "Vite", "Node.js", "Express", "MongoDB", "Spotify API", "Axios"],
      github: "https://github.com/Sourabh-web21/Mood-tracker",
      live: "https://mood-tracker-git-main-sourabhs-projects-f5702034.vercel.app",
      featured: true
    },
    {
      id: 6,
      title: "Netflix Clone – Frontend Movie Streaming UI",
      description: "A responsive Netflix-style frontend UI fetching movies from TMDB API",
      longDescription: "This Netflix Clone is a React and Tailwind CSS powered frontend application that mimics the Netflix interface. It fetches movie and TV show data dynamically from the TMDB API, displays trending, popular, and genre-specific content, and allows users to browse, search, and filter titles. Designed with responsive layouts and modern UI components, it provides a realistic streaming platform experience without backend integration.",
      image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV0ZmxpeHxlbnwwfHwwfHx8MA%3D%3D",
      category: "web",
      technologies: ["React", "Tailwind CSS", "Axios", "TMDB API", "Vite"],
      github: "https://github.com/Sourabh-web21/netflix-frontend",
      live: "https://netflix-frontend-swart.vercel.app",
      featured: false
    },
    {
      id: 7,
      title: "Patient Deterioration Predictor – ML Health Dashboard",
      description: "A Flask-based AI/ML app predicting patient deterioration in the next 90 days for hospitals and health centers",
      longDescription: "This Patient Deterioration Predictor is a Flask-powered AI/ML application built for hospitals and health centers to track chronic disease patients. It uses three trained XGBoost models to predict the likelihood of patient deterioration over the next 90 days. Each patient's dataset is created from their last 30–90 days of medical records, allowing staff to monitor risk trends and make informed healthcare decisions. The app combines a user-friendly interface with robust ML predictions to streamline patient care monitoring.",
      image: "https://images.unsplash.com/photo-1587557983735-f05198060b52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhlYWx0aCUyMGNhcmUlMjB3b3JrZXJ8ZW58MHx8MHx8fDA%3D",
      category: "ai/ml",
      technologies: ["Python", "Flask", "XGBoost", "Pandas", "Scikit-learn"],
      github: "https://github.com/Sourabh-web21/chronic-disease-predictor.gitl",
      live: "https://drive.google.com/file/d/13ZJrfviJIvLL80-68WNZ3JlDpxUsPrfi/view?usp=sharing",
      featured: true
    }
  ];

  // Filter projects based on selected category
  const filteredProjects = filter === "all" 
    ? allProjects 
    : allProjects.filter(project => project.category === filter);

  // Load more projects function
  const loadMoreProjects = useCallback(() => {
    if (isLoading || !hasMore) return;
    
    setIsLoading(true);
    
    // Simulate loading delay
    setTimeout(() => {
      const nextProjects = filteredProjects.slice(currentIndex, currentIndex + PROJECTS_PER_LOAD);
      
      if (nextProjects.length === 0) {
        setHasMore(false);
      } else {
        setDisplayedProjects(prev => [...prev, ...nextProjects]);
        setCurrentIndex(prev => prev + PROJECTS_PER_LOAD);
      }
      
      setIsLoading(false);
    }, 800);
  }, [currentIndex, filteredProjects, isLoading, hasMore]);

  // Reset projects when filter changes
  useEffect(() => {
    setDisplayedProjects(filteredProjects.slice(0, PROJECTS_PER_LOAD));
    setCurrentIndex(PROJECTS_PER_LOAD);
    setHasMore(filteredProjects.length > PROJECTS_PER_LOAD);
  }, [filter]);

  // Load more when in view
  useEffect(() => {
    if (isInView && hasMore) {
      loadMoreProjects();
    }
  }, [isInView, hasMore, loadMoreProjects]);

  // Project card animation variants
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9,
      rotateX: 45
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        duration: 0.8,
        bounce: 0.3
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const loadingVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <>
      
      {/* Projects Section - Infinite Scroll */}
      <section id="projects" className={`py-20 transition-all duration-500 ${
        isDark
          ? 'bg-gradient-to-b from-slate-800/50 to-slate-900/50'
          : 'bg-gradient-to-b from-gray-50 to-white'
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
                Featured Projects
              </span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto mb-8 transition-colors duration-500 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Explore my collection of projects - from web applications to AI/ML solutions
            </p>

            {/* Enhanced Filter Buttons */}
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {categories.map((category) => (
                <motion.div key={category} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant={filter === category ? "primary" : "ghost"}
                    size="sm"
                    onClick={() => setFilter(category)}
                    className={`capitalize relative overflow-hidden ${
                      filter === category 
                        ? 'shadow-lg' 
                        : isDark ? 'hover:bg-white/10' : 'hover:bg-gray-100'
                    }`}
                  >
                    <Filter className="w-4 h-4 mr-2" />
                    {category}
                    {filter === category && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                        layoutId="activeFilter"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Projects Infinite Scroll Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence mode="popLayout">
              {displayedProjects.map((project, index) => (
                <motion.div
                  key={`${project.id}-${filter}`}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{
                    opacity: 0,
                    scale: 0.8,
                    y: -50,
                    transition: { duration: 0.3 }
                  }}
                  whileHover={{ 
                    y: -15, 
                    scale: 1.02,
                    rotateY: 5,
                    transition: { 
                      type: "spring", 
                      stiffness: 300,
                      damping: 20
                    }
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: "1000px"
                  }}
                >
                  <Card className="group overflow-hidden h-full flex flex-col relative">
                    {/* Animated background gradient */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${
                          project.category === 'web' ? 'rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1)' :
                          project.category === 'python' ? 'rgba(34, 197, 94, 0.1), rgba(59, 130, 246, 0.1)' :
                          'rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1)'
                        })`
                      }}
                    />

                    <div className="relative overflow-hidden rounded-lg mb-4">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />
                      
                      {/* Overlay with enhanced animations */}
                      <motion.div 
                        className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center"
                        initial={false}
                        whileHover={{ 
                          background: [
                            "rgba(0,0,0,0.6)",
                            "rgba(59, 130, 246, 0.4)",
                            "rgba(147, 51, 234, 0.4)"
                          ]
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileHover={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.1 }}
                        >
                          <Button
                            variant="secondary"
                            size="sm"
                            onClick={() => setSelectedProject(project)}
                            className="mr-2 backdrop-blur-sm"
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            View Details
                          </Button>
                        </motion.div>
                      </motion.div>

                      {project.featured && (
                        <motion.div 
                          className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full text-sm font-semibold"
                          animate={{ 
                            boxShadow: [
                              "0 0 0 0 rgba(251, 191, 36, 0.7)",
                              "0 0 0 10px rgba(251, 191, 36, 0)",
                            ]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          Featured
                        </motion.div>
                      )}
                    </div>
                    
                    <div className="flex-1 flex flex-col relative z-10">
                      <motion.h3 
                        className={`text-xl font-bold mb-2 ${
                          isDark ? 'text-white group-hover:text-blue-300' : 'text-gray-900 group-hover:text-blue-600'
                        } transition-colors duration-300`}
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {project.title}
                      </motion.h3>
                      
                      <p className={`mb-4 flex-1 ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            className={`px-2 py-1 rounded text-sm ${
                              isDark
                                ? 'bg-blue-500/20 text-blue-300'
                                : 'bg-blue-100 text-blue-700'
                            }`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: techIndex * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                        {project.technologies.length > 3 && (
                          <motion.span 
                            className={`px-2 py-1 rounded text-sm ${
                              isDark
                                ? 'bg-gray-500/20 text-gray-300'
                                : 'bg-gray-200 text-gray-600'
                            }`}
                            whileHover={{ scale: 1.05 }}
                          >
                            +{project.technologies.length - 3}
                          </motion.span>
                        )}
                      </div>
                      
                      <motion.div 
                        className="flex gap-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        {project.github && (
                          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="flex-1"
                              onClick={() => window.open(project.github, '_blank')}
                            >
                              <Github className="w-4 h-4 mr-2" />
                              Code
                            </Button>
                          </motion.div>
                        )}
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button 
                            variant="primary" 
                            size="sm" 
                            className="flex-1"
                            onClick={() => window.open(project.live, '_blank')}
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </Button>
                        </motion.div>
                      </motion.div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Loading Indicator & Load More Trigger */}
          <div ref={loadMoreRef} className="mt-16 flex flex-col items-center">
            <AnimatePresence>
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex items-center space-x-4 mb-8"
                >
                  <motion.div
                    className={`w-8 h-8 border-3 border-t-transparent rounded-full ${
                      isDark ? 'border-blue-400' : 'border-blue-600'
                    }`}
                    variants={loadingVariants}
                    animate="animate"
                  />
                  <span className={`text-lg font-medium ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Loading more projects...
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            {hasMore && !isLoading && (
              <motion.button
                className={`group flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  isDark 
                    ? 'bg-white/10 hover:bg-white/20 text-white border border-white/20' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300'
                }`}
                onClick={loadMoreProjects}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <span className="font-medium">Load More Projects</span>
                <motion.div
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </motion.button>
            )}

            {!hasMore && displayedProjects.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-center py-8 ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                  </div>
                </div>
                <p className="text-lg font-medium">You've reached the end!</p>
                <p className="text-sm">That's all my projects for now. More coming soon!</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Experience Detail Modal - keeping the same as original */}
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
              {/* Modal content remains the same as original */}
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

                <button
                  onClick={() => setSelectedExperience(null)}
                  className={`absolute top-4 right-4 p-2 rounded-full ${
                    isDark ? 'bg-slate-700/80 text-white hover:bg-slate-600' : 'bg-white/80 text-gray-900 hover:bg-white'
                  } transition-colors duration-200`}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-8">
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className={`text-3xl font-bold mb-2 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {selectedExperience.title}
                      </h2>
                      <p className={`text-xl font-semibold ${
                        isDark ? 'text-blue-400' : 'text-blue-600'
                      }`}>{selectedExperience.company}</p>
                      <p className={`${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>{selectedExperience.duration} • {selectedExperience.location}</p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <p className={`text-lg leading-relaxed ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>{selectedExperience.detailedDescription}</p>
                </div>

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

      {/* Enhanced Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className={`rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto ${
                isDark ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-gray-200'
              }`}
              initial={{ scale: 0.8, opacity: 0, rotateX: 45 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateX: -45 }}
              transition={{ type: "spring", duration: 0.6, bounce: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className={`text-2xl font-bold ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>{selectedProject.title}</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedProject(null)}
                  className="p-2"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              
              <motion.img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              />
              
              <p className={`mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>{selectedProject.longDescription}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    className={`px-3 py-1 rounded-full text-sm ${
                      isDark ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-100 text-blue-700'
                    }`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              
              <div className="flex gap-4">
                {selectedProject.github && (
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => window.open(selectedProject.github, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                )}
                <Button 
                  variant="primary" 
                  className="flex-1"
                  onClick={() => window.open(selectedProject.live, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;