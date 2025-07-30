import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";

const SkillBar = ({
  skill,
  percentage,
  icon: Icon,
  color = "from-blue-500 to-purple-500",
  delay = 0
}) => {
  const { isDark } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className="group">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-lg bg-gradient-to-r ${color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="w-5 h-5 text-white" />
          </div>
          <span className={`text-lg font-semibold transition-colors ${
            isDark
              ? 'text-white group-hover:text-blue-300'
              : 'text-gray-900 group-hover:text-blue-600'
          }`}>
            {skill}
          </span>
        </div>
        <span className={`text-sm font-medium ${
          isDark ? 'text-gray-400' : 'text-gray-600'
        }`}>
          {percentage}%
        </span>
      </div>
      
      {/* Progress bar container */}
      <div className="relative h-3 bg-gray-700/50 rounded-full overflow-hidden backdrop-blur-sm">
        {/* Background glow */}
        <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-20 rounded-full`}></div>
        
        {/* Progress bar */}
        <motion.div
          className={`h-full bg-gradient-to-r ${color} rounded-full relative overflow-hidden`}
          initial={{ width: 0 }}
          animate={{ width: isVisible ? `${percentage}%` : 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
        </motion.div>
        
        {/* Glow effect */}
        <motion.div
          className={`absolute top-0 h-full bg-gradient-to-r ${color} rounded-full blur-sm opacity-50`}
          initial={{ width: 0 }}
          animate={{ width: isVisible ? `${percentage}%` : 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
