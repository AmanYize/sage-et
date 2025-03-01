import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { motion } from "framer-motion";

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon, label }) => {
  const isDarkMode = useSelector(
    (state: RootState) => state.darkMode.isDarkMode
  );

  const navLinkStyles = {
    active: isDarkMode
      ? "bg-cyan-400/10 text-cyan-400 shadow-[0_0_20px_-5px_rgba(34,211,238,0.3)]"
      : "bg-purple-400/10 text-purple-600 shadow-[0_0_20px_-5px_rgba(168,85,247,0.3)]",
    inactive: isDarkMode
      ? "text-gray-300 hover:bg-gray-800/50 hover:text-cyan-300"
      : "text-gray-600 hover:bg-gray-100 hover:text-purple-500",
  };

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `group relative flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-300 ${
          isActive ? navLinkStyles.active : navLinkStyles.inactive
        }`
      }
    >
      {({ isActive }) => (
        <>
          {/* Animated background layer */}
          <div
            className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 ${
              isDarkMode ? "bg-cyan-400/5" : "bg-purple-400/5"
            } transition-opacity duration-300`}
          />

          {/* Icon container with animations */}
          <motion.div
            whileHover={{ y: -2, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
            className={`p-1.5 rounded-lg ${
              isDarkMode
                ? "bg-cyan-400/10 group-hover:bg-cyan-400/20"
                : "bg-purple-400/10 group-hover:bg-purple-400/20"
            }`}
          >
            <motion.div className="text-xl">{icon}</motion.div>
          </motion.div>

          {/* Label with animated underline */}
          <span className="font-semibold text-sm">
            {label}
            <motion.div
              className={`h-[2px] mt-1 ${
                isDarkMode ? "bg-cyan-400" : "bg-purple-500"
              }`}
              initial={{ width: 0 }}
              animate={{ width: isActive ? "100%" : 0 }}
              transition={{ duration: 0.3 }}
            />
          </span>

          {/* Active state indicator */}
          {isActive && (
            <motion.div
              className={`absolute bottom-0 left-1/2 w-4 h-1 rounded-full ${
                isDarkMode ? "bg-cyan-400" : "bg-purple-500"
              }`}
              initial={{ scale: 0, x: "-50%" }}
              animate={{ scale: 1, x: "-50%" }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          )}
        </>
      )}
    </NavLink>
  );
};

export default NavItem;
