// components/MobileMenu.tsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import NavItem from "./NavItem";
import { FaHome, FaFire, FaTrophy, FaUser } from "react-icons/fa";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const isDarkMode = useSelector(
    (state: RootState) => state.darkMode.isDarkMode
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className={`md:hidden mt-4 flex flex-col gap-2 ${
            isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
          } rounded-md p-4 shadow-lg`}
        >
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
            icon={<FaTrophy size={20} className="text-teal-400" />}
            label="Leaderboard"
          />
          <NavItem
            to="/profile"
            icon={<FaUser size={20} className="text-indigo-500" />}
            label="Profile"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
