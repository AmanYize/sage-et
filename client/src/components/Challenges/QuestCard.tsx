// components/Challenges/QuestCard.tsx
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootState } from "../../store/store";
import { motion } from "framer-motion";

type Props = {
  title: string;
  questPath: string;
  description: string;
  icon: React.ReactNode;
};

const QuestCard = ({ questPath, title, description, icon }: Props) => {
  const isDarkMode = useSelector(
    (state: RootState) => state.darkMode.isDarkMode
  );

  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        boxShadow: `0 8px 16px rgba(${
          isDarkMode ? "255,255,255" : "0,0,0"
        }, 0.2)`,
      }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`flex flex-col gap-4 items-center border p-6 rounded-lg shadow-md ${
        isDarkMode
          ? "bg-slate-950 text-white border-cyan-500 shadow-[0_4px_12px_rgba(255,255,255,0.1)]"
          : "bg-white text-gray-800 border-purple-500 shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
      }`}
    >
      {/* Icon and Title */}
      <div
        className={`flex flex-col p-2 gap-2 items-center ${
          isDarkMode ? "text-cyan-500" : "text-purple-500"
        }`}
      >
        <div className="flex items-center gap-2">
          <div
            className={`p-2 rounded-full inline-flex items-center justify-center ${
              isDarkMode
                ? "bg-cyan-500 bg-opacity-20"
                : "bg-purple-500 bg-opacity-20"
            }`}
            style={{ color: isDarkMode ? "#6366f1" : "#06b6d4" }}
          >
            {icon}
          </div>
          <h3 className="text-lg font-bold">{title}</h3>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-center text-gray-500">{description}</p>

      {/* Start Quest Button */}
      <NavLink
        to={questPath}
        className={`px-4 py-2 rounded-lg font-bold transition-all duration-200 ${
          isDarkMode
            ? "bg-cyan-500 hover:bg-cyan-600 text-white"
            : "bg-purple-500 hover:bg-purple-600 text-white"
        }`}
      >
        Start Quest
      </NavLink>
    </motion.div>
  );
};

export default QuestCard;
