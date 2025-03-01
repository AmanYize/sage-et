// components/SearchBar.tsx
import React from "react";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { motion } from "framer-motion";

const SearchBar: React.FC = () => {
  const isDarkMode = useSelector(
    (state: RootState) => state.darkMode.isDarkMode
  );

  return (
    <div className="hidden md:flex items-center relative group">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        type="text"
        id="search"
        placeholder="Search..."
        className={`px-4 py-2.5 pr-14 border rounded-xl focus:outline-none focus:ring-2 ${
          isDarkMode
            ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-yellow-500 focus:ring-yellow-500/30"
            : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-emerald-500 focus:ring-emerald-500/30"
        } transition-all duration-200 w-72 font-medium`}
      />
      <button
        type="submit"
        className={`absolute right-0 top-0 h-full px-4 rounded-r-xl ${
          isDarkMode
            ? "bg-cyan-500 hover:bg-cyan-600 text-gray-900"
            : "bg-purple-500 hover:bg-purple-600 text-white"
        } transition-colors duration-200 focus:outline-none focus:ring-2 ${
          isDarkMode ? "focus:ring-yellow-500/50" : "focus:ring-emerald-500/50"
        }`}
        aria-label="Search"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <FaSearch size={18} className="stroke-[0.5px]" />
        </motion.div>
      </button>
    </div>
  );
};

export default SearchBar;
