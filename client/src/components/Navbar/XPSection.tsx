// components/XPSection.tsx
import React from "react";
import { LuSwords } from "react-icons/lu";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { motion } from "framer-motion";

const XPSection: React.FC = () => {
  const isDarkMode = useSelector(
    (state: RootState) => state.darkMode.isDarkMode
  );

  return (
    <motion.div
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`group relative flex items-center gap-2 px-4 py-2 rounded-full border-2 ${
        isDarkMode
          ? "border-cyan-400/30 bg-gray-900/80 hover:border-cyan-400/60"
          : "border-purple-400/30 bg-white/80 hover:border-purple-400/60"
      } backdrop-blur-sm transition-all duration-200 shadow-lg`}
    >
      {/* Animated background pulse */}
      <div
        className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 ${
          isDarkMode ? "bg-cyan-400/10" : "bg-purple-400/10"
        } transition-opacity duration-300`}
      />

      {/* Icon container with gradient texture */}
      <motion.div
        animate={{ rotate: 5 }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 4,
          ease: "easeInOut",
        }}
        className={`p-1.5 rounded-full ${
          isDarkMode
            ? "bg-cyan-400/10 text-cyan-400"
            : "bg-purple-400/10 text-purple-600"
        }`}
      >
        <LuSwords size={22} className="stroke-[1.3px]" />
      </motion.div>

      {/* XP text with animated counter effect */}
      <div className="hidden md:block">
        <span
          className={`text-sm font-bold ${
            isDarkMode ? "text-cyan-400" : "text-purple-600"
          }`}
        >
          XP:{" "}
          <motion.span
            key={0} // Change key when XP updates for animation
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="inline-block"
          >
            0
          </motion.span>
        </span>
      </div>

      {/* Subtle glow effect */}
      <div
        className={`absolute inset-0 rounded-full pointer-events-none ${
          isDarkMode
            ? "shadow-[0_0_15px_rgba(34,211,238,0.15)]"
            : "shadow-[0_0_15px_rgba(168,85,247,0.15)]"
        } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      />
    </motion.div>
  );
};

export default XPSection;
