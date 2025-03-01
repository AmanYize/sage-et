// components/Challenges/WorldMap.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { RootState } from "../../store/store";
import Card from "./Card";
import { FiCompass, FiMap, FiStar, FiCode } from "react-icons/fi";

const WorldMap = () => {
  const navigate = useNavigate();
  const isDarkMode = useSelector(
    (state: RootState) => state.darkMode.isDarkMode
  );
  const [activePath, setActivePath] = useState<string | null>(null);

  const paths = [
    {
      id: "computer-science",
      title: "Computer Science Realm",
      description: "Conquer algorithms and clear bosses",
      icon: <FiCode />,
      color: "#6366f1", // Purple
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen relative overflow-hidden"
    >
      {/* Optimized Background */}
      <div
        className={`absolute inset-0 z-0 transition-colors duration-500 ${
          isDarkMode
            ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
            : "bg-gradient-to-br from-purple-50 via-cyan-50 to-emerald-50"
        }`}
      >
        {/* Minimal Floating Circles Animation */}
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-opacity-30"
            style={{
              width: `${Math.random() * 10 + 5}%`, // Smaller size for performance
              height: `${Math.random() * 10 + 5}%`,
              top: `${Math.random() * 100}%`, // Random position
              left: `${Math.random() * 100}%`,
              backgroundColor: isDarkMode ? "#6366f1" : "#06b6d4", // Purple or Cyan
            }}
            animate={{
              x: Math.random() * 50 - 25, // Reduced movement range
              y: Math.random() * 50 - 25,
              scale: [1, 1.1, 1], // Subtle pulsating effect
            }}
            transition={{
              duration: Math.random() * 5 + 5, // Randomized duration
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <motion.header
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 space-y-4"
        >
          <motion.h1
            className={`text-4xl md:text-6xl font-bold bg-clip-text ${
              isDarkMode
                ? "text-transparent bg-gradient-to-r from-purple-400 to-cyan-400"
                : "text-transparent bg-gradient-to-r from-purple-600 to-emerald-600"
            }`}
          >
            Knowledge Nexus
          </motion.h1>
          <motion.p
            className={`text-lg md:text-xl font-medium ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Choose your path, warrior. Glory awaits...
          </motion.p>
        </motion.header>

        {/* Interactive Map Container */}
        <div className="relative rounded-3xl overflow-hidden border-8 border-opacity-20 backdrop-blur-lg shadow-2xl transition-all duration-300">
          {/* Dynamic Background */}
          <div
            className={`absolute inset-0 transition-colors duration-500 ${
              isDarkMode
                ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
                : "bg-gradient-to-br from-purple-50 via-cyan-50 to-emerald-50"
            }`}
          />

          {/* Map Content */}
          <div className="relative z-10 p-8">
            {/* Path Selection Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              layout
            >
              {paths.map((path) => (
                <motion.div
                  key={path.id}
                  layout
                  whileHover={{ scale: 1.03 }} // Subtle hover effect
                  whileTap={{ scale: 0.97 }} // Subtle tap effect
                  onClick={() => {
                    setActivePath(path.id); // Update active path
                    navigate(`/challenges/${path.id}`); // Navigate to the path
                  }}
                >
                  <Card
                    title={path.title}
                    description={path.description}
                    icon={path.icon}
                    color={path.color}
                    isDarkMode={isDarkMode}
                    isActive={activePath === path.id} // Pass active state
                    route={path.id}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Progress & Stats */}
            <motion.div
              className={`mt-12 p-6 rounded-xl backdrop-blur-lg ${
                isDarkMode
                  ? "bg-black bg-opacity-30 border border-gray-800"
                  : "bg-white bg-opacity-50 border border-gray-200"
              }`}
            >
              <div className="flex items-center gap-4 text-lg">
                <FiMap className="flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-semibold">Exploration Progress</h3>
                  <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
                    <div
                      className="h-full bg-purple-500 transition-all duration-500"
                      style={{ width: "45%" }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WorldMap;
