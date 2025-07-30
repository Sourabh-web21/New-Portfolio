import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Eye, Github, X } from "lucide-react";
import { useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import Button from "../ui/Button";
import Card from "../ui/Card";

const Projects = () => {
  const { isDark } = useTheme();
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["all", "web", "python", "ai/ml"];

  const projects = [
    
     {
      id: 1,
      title: "YouTube Teach – Educational Video Platform",
  description: "A platform to organize and access educational YouTube content efficiently",
  longDescription: "YouTube Teach is a React and Gradio-powered platform designed to help students easily browse and explore curated educational YouTube videos. Users can filter content based on board, subject, and class, providing a streamlined learning experience. The system uses a structured dataset and allows for easy expansion to support more content types or recommendations in the future.",
  image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
  category: "web",
  technologies: ["React", "Gradio", "Python", "Pandas"],
  github: "https://github.com/Sourabh-web21/Youtube_Teach_Platform",
  live: "https://youtube-teach-platform.vercel.app", // Replace with actual deployed link if different
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
    }
   ,{
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
}
// ,
//     {
//       id: 5,
//       title: "Calculator App",
//       description: "Scientific calculator with advanced mathematical functions",
//       longDescription: "A scientific calculator application built with JavaScript featuring basic arithmetic operations, trigonometric functions, logarithms, and memory functions. Clean UI with keyboard support.",
//       image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
//       category: "python",
//       technologies: ["JavaScript", "HTML5", "CSS3", "Math.js"],
//       github: "https://github.com/sourabhagarwal",
//       live: "https://github.com/sourabhagarwal",
//       featured: false
//     }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
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
            Here are some of my recent projects that showcase my skills and creativity
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "primary" : "ghost"}
                size="sm"
                onClick={() => setFilter(category)}
                className="capitalize"
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="group overflow-hidden h-full flex flex-col">
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => setSelectedProject(project)}
                        className="mr-2"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                    {project.featured && (
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1 flex flex-col">
                    <h3 className={`text-xl font-bold mb-2 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>{project.title}</h3>
                    <p className={`mb-4 flex-1 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className={`px-2 py-1 rounded text-sm ${
                            isDark
                              ? 'bg-blue-500/20 text-blue-300'
                              : 'bg-blue-100 text-blue-700'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className={`px-2 py-1 rounded text-sm ${
                          isDark
                            ? 'bg-gray-500/20 text-gray-300'
                            : 'bg-gray-200 text-gray-600'
                        }`}>
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex gap-2">
                      {project.github && (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1"
                          onClick={() => window.open(project.github, '_blank')}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      )}
                      <Button 
                        variant="primary" 
                        size="sm" 
                        className="flex-1"
                        onClick={() => window.open(project.live, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
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
                className="bg-slate-800 rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedProject(null)}
                    className="p-2"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
                
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                
                <p className="text-gray-300 mb-4">{selectedProject.longDescription}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
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
      </div>
    </section>
  );
};

export default Projects;








