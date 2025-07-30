import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

const GlowButton = ({ 
  children, 
  className, 
  variant = "primary",
  size = "md",
  ...props 
}) => {
  const baseClasses = "relative inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none overflow-hidden group";
  
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full",
    secondary: "bg-transparent border border-blue-500/50 text-blue-400 rounded-full",
    glow: "bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full shadow-[0_0_20px_rgba(6,182,212,0.3)]"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <motion.button
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </div>
      
      {/* Content */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default GlowButton;
