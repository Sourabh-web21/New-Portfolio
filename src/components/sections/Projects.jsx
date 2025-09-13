import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Eye, Github, X } from "lucide-react";
import { useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import Button from "../ui/Button";
import Card from "../ui/Card";

const Projects = () => {
  const { isDark } = useTheme();
  const [filter, setFilter] = useState("all");
  const [selectedExperience, setSelectedExperience] = useState(null);

  // Experience data
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
    // github: "https://github.com/yourusername/yolo-vehicle-detection",
    // demo: "https://vehicle-detection-demo.netlify.app",
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
}
,
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
    // "/images/team/sih-team-photo.jpg", // Add your actual team photos here
    // "/images/team/sih-presentation.jpg",
    // "/images/team/sih-working.jpg"
  ]
}
// ,
//     {
//       title: "CodeFest 2024",
//       company: "National Level Hackathon",
//       duration: "Jan 2024",
//       location: "Bangalore, India",
//       type: "hackathon",
//       description: "Created a sustainable e-waste management platform connecting consumers with certified recycling centers.",
//       achievements: [
//         "🥈 2nd Place Winner",
//         "Developed full-stack web application",
//         "Integrated payment gateway and geolocation services"
//       ],
//       technologies: ["React", "Node.js", "MongoDB", "Express", "Payment APIs"],
//       github: "https://github.com/yourusername/e-waste-management-platform",
//       demo: "https://e-waste-platform.netlify.app",
//       image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=250&fit=crop&crop=center"
//     },
//     {
//       title: "Python Developer Intern",
//       company: "DataTech Analytics",
//       duration: "Dec 2023 - Feb 2024",
//       location: "Remote",
//       type: "internship",
//       description: "Worked on data analysis projects and automated reporting systems using Python and various data science libraries.",
//       achievements: [
//         "Automated 5 manual reporting processes",
//         "Reduced data processing time by 60%",
//         "Created interactive dashboards for data visualization"
//       ],
//       technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "SQL", "Power BI"],
//       github: "https://github.com/yourusername/data-analysis-automation",
//       demo: "https://data-dashboard-demo.netlify.app",
//       image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center"
//     }
  ];
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
,{
  id: 4,
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

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <>
      {/* Experience Section */}
      <section id="experience" className={`py-20 transition-all duration-500 ${
        isDark
          ? 'bg-gradient-to-b from-slate-800/50 to-slate-900/50'
          : 'bg-gradient-to-b from-white to-gray-50'
      }`}>
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className={`transition-all duration-500 ${
                isDark
                  ? 'bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
              }`}>
                Experience
              </span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto transition-colors duration-500 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              My journey through internships and hackathons, building real-world solutions and gaining valuable experience
            </p>
          </div>

          {/* Experience Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-300 hover:scale-105 overflow-hidden cursor-pointer ${
                  isDark
                    ? 'bg-slate-800/80 border border-slate-700 hover:border-slate-600'
                    : 'bg-white/90 border border-gray-200 shadow-lg hover:shadow-xl'
                }`}
                onClick={() => setSelectedExperience(exp)}
              >
                {/* Image */}
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

                {/* Content */}
                <div className="p-6">
                  {/* Header */}
                  <div className="mb-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className={`text-xl font-bold ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {exp.title} {exp.type === 'hackathon' && exp.achievements[0].includes('🏆') ? '🏆' : ''}
                      {exp.type === 'hackathon' && exp.achievements[0].includes('🥈') ? '🥈' : ''}
                    </h3>
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

                {/* Description */}
                <p className={`mb-4 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>{exp.description}</p>

                {/* Achievements */}
                <div className="mb-4">
                  <h4 className={`font-semibold mb-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>Key Achievements:</h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, i) => (
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

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.technologies.map((tech, i) => (
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
                </div>

                {/* Links */}
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
              </div>
            ))}
          </div>
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
                        {selectedExperience.type === 'hackathon' && selectedExperience.achievements[0].includes('🏆') ? ' 🏆' : ''}
                        {selectedExperience.type === 'hackathon' && selectedExperience.achievements[0].includes('🥈') ? ' 🥈' : ''}
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
                    <p className={`text-sm mt-2 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      Upload your team photos to /public/images/team/ folder and update the paths above
                    </p>
                  </div>
                )}

                {/* Project Gallery */}
                {selectedExperience.gallery && selectedExperience.gallery.length > 1 && (
                  <div className="mb-8">
                    <h3 className={`text-xl font-semibold mb-4 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>Project Gallery</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedExperience.gallery.slice(1).filter(image => !image.includes('/images/team/')).map((image, i) => (
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

      {/* Projects Section */}
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
    </>
  );
};

export default Projects;








