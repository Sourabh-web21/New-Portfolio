import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

const ModernCard = ({ 
  children, 
  className, 
  variant = "default",
  hover = true,
  ...props 
}) => {
  const variants = {
    default: "bg-white/5 backdrop-blur-sm border border-white/10",
    glass: "bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20",
    glow: "bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 shadow-[0_8px_32px_rgba(59,130,246,0.1)]",
    neon: "bg-black/50 backdrop-blur-sm border border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.2)]"
  };

  return (
    <motion.div
      className={cn(
        "rounded-2xl p-6 relative overflow-hidden group",
        "transition-all duration-300",
        variants[variant],
        hover && "hover:shadow-xl hover:scale-[1.02]",
        className
      )}
      whileHover={hover ? { y: -5 } : {}}
      {...props}
    >
      {/* Animated border gradient */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-white/10 to-transparent"></div>
      </div>
      
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </motion.div>
  );
};

export default ModernCard;
