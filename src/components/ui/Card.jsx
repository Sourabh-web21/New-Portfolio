import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

const Card = ({ children, className, hover = true, ...props }) => {
  return (
    <motion.div
      className={cn(
        "bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6",
        "shadow-lg hover:shadow-xl transition-all duration-300",
        hover && "hover:bg-white/10 hover:border-white/20",
        className
      )}
      whileHover={hover ? { y: -5 } : {}}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
