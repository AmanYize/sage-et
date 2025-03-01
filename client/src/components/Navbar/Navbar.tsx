// components/Navbar.tsx
import React, { useState } from "react";
import {
  FaMoon,
  FaSun,
  FaFire,
  FaTrophy,
  FaUser,
  FaHome,
} from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { toggleDarkMode } from "../../store/darkModeSlice";
import { motion } from "framer-motion";
import NavItem from "./NavItem";
import SearchBar from "./Searchbar";
import MobileMenu from "./MobileMenu";
import XPSection from "./XPSection";

const Navbar: React.FC = () => {
  const isDarkMode = useSelector(
    (state: RootState) => state.darkMode.isDarkMode
  );
  const dispatch = useDispatch();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  React.useEffect(() => {
    // Apply dark mode class to the document body
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <header
      className={`flex justify-between items-center p-4 ${
        isDarkMode ? "bg-slate-900 text-white" : "bg-slate-50 text-black"
      } shadow-md`}
    >
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2 font-bold text-2xl"
      >
        <FaFire size={28} className="text-red-500 animate-pulse" />
        <h1 className="font-cinzel">SAGE ET</h1>
      </motion.div>

      {/* Mobile Menu Button */}
      <motion.button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        whileTap={{ scale: 0.9 }}
        className={`md:hidden p-2 rounded-full ${
          isDarkMode
            ? "hover:bg-gray-700 bg-gray-800"
            : "hover:bg-gray-200 bg-gray-100"
        } transition-colors duration-200`}
        aria-label={`${isMobileMenuOpen ? "Close Menu" : "Open Menu"}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-yellow-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={
              isMobileMenuOpen
                ? "M6 18L18 6M6 6l12 12"
                : "M4 6h16M4 12h16m-7 6h7"
            }
          />
        </svg>
      </motion.button>

      {/* Navigation Links (Hidden on Mobile) */}
      <nav aria-label="Main Navigation" className="hidden md:flex gap-4">
        <NavItem
          to="/"
          icon={<FaHome size={20} className="text-green-500" />}
          label="Home"
        />
        <NavItem
          to="/challenge"
          icon={<FaFire size={20} className="text-red-500" />}
          label="Challenge"
        />
        <NavItem
          to="/leaderboard"
          icon={<FaTrophy size={20} className="text-yellow-400" />}
          label="Leaderboard"
        />
        <NavItem
          to="/profile"
          icon={<FaUser size={20} className="text-blue-500" />}
          label="Profile"
        />
      </nav>

      {/* XP Section */}
      <XPSection />

      {/* Search Bar */}
      <SearchBar />

      {/* Dark Mode Toggle */}
      <motion.button
        onClick={() => dispatch(toggleDarkMode())}
        whileTap={{ scale: 0.9 }}
        className={`p-2 rounded-full hover:cursor-pointer ${
          isDarkMode
            ? "hover:bg-gray-700 bg-gray-800"
            : "hover:bg-gray-200 bg-gray-100"
        } transition-colors duration-200`}
        aria-label="Toggle Dark Mode"
      >
        {isDarkMode ? (
          <FaSun size={20} className="text-yellow-400" />
        ) : (
          <FaMoon size={20} className="text-indigo-600" />
        )}
      </motion.button>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
};

export default Navbar;
