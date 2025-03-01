// components/Challenges/Card.tsx
import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode; // Icon for the card (e.g., FiCode)
  color: string; // Color for the card's accent (e.g., "#6366f1" for purple)
  isDarkMode: boolean;
  route: string; // Route to navigate to (e.g., "computer-science")
  isActive: boolean; // Whether the card is currently active
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  icon,
  color,
  isDarkMode,
  route,
  isActive,
}) => {
  return (
    <NavLink
      to={`/challenge/${route}`} // Navigate to the specified route
      className="block" // Ensure the NavLink behaves like a block element
      aria-label={`Navigate to ${title}`} // Accessibility label
    >
      {/* Animated Card Container */}
      <motion.div
        whileHover={{ scale: 1.05, boxShadow: `0 0 10px ${color}` }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400 }}
        className={`relative p-4 rounded-lg shadow-md ${
          isDarkMode
            ? "bg-slate-950 text-cyan-400 border border-purple-500"
            : "bg-white text-purple-700 border border-gray-200"
        } ${isActive ? "ring-4 ring-purple-500" : ""}`}
      >
        {/* Glowing Border */}
        <div
          className={`absolute inset-0 rounded-lg ${
            isDarkMode
              ? "border-2 border-cyan-500 shadow-[0_0_10px_cyan]"
              : "border-2 border-purple-700 shadow-[0_0_10px_purple]"
          }`}
        ></div>

        {/* Icon */}
        <div
          className={`mb-4 p-3 rounded-full inline-flex items-center justify-center ${
            isDarkMode
              ? "bg-cyan-900 bg-opacity-20"
              : "bg-gray-200 bg-opacity-20"
          }`}
          style={{ color: color }}
        >
          {icon}
        </div>

        {/* Content */}
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="mt-2 text-sm">{description}</p>

        {/* Active Indicator */}
        {isActive && (
          <motion.div
            className="absolute -bottom-2 left-1/2 w-6 h-1 rounded-full bg-purple-500"
            initial={{ scale: 0, x: "-50%" }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        )}
      </motion.div>
    </NavLink>
  );
};

export default Card;
