// pages/Dashboard.tsx
import { useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import {
  FaTrophy,
  FaUserGraduate,
  FaChartLine,
  FaFire,
  FaCrown,
  FaCoins,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  const isDarkMode = useSelector(
    (state: RootState) => state.darkMode.isDarkMode
  );
  const { coins, inventory, equippedItems } = useSelector(
    (state: RootState) => state.user
  );

  // Mock data for charts and stats
  const chartData = [
    { name: "Day 1", score: 40 },
    { name: "Day 2", score: 60 },
    { name: "Day 3", score: 80 },
    { name: "Day 4", score: 70 },
    { name: "Day 5", score: 90 },
    { name: "Day 6", score: 100 },
  ];

  const userStats = {
    totalQuizzes: 15,
    quizzesCompleted: 10,
    accuracy: "85%",
    streak: 5,
  };

  const [showConfetti, setShowConfetti] = useState(false);

  const handleCelebrate = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000); // Confetti lasts for 5 seconds
  };

  return (
    <div
      className={`p-6 ${
        isDarkMode ? "bg-slate-900 text-white" : "bg-slate-50 text-black"
      } min-h-screen relative`}
    >
      {/* Celebration Confetti */}
      {showConfetti && <Confetti />}

      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <FaChartLine size={32} className="text-indigo-500" />
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </div>

      {/* User Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Total Quizzes */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`p-6 rounded-lg shadow-md flex flex-col items-center ${
            isDarkMode ? "bg-gray-800" : "bg-gray-100"
          } hover:cursor-pointer`}
          onClick={() => handleCelebrate()}
        >
          <FaTrophy size={40} className="text-yellow-400 mb-4" />
          <h3 className="text-xl font-semibold">Total Quizzes</h3>
          <p className="text-2xl font-bold">{userStats.totalQuizzes}</p>
        </motion.div>

        {/* Quizzes Completed */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`p-6 rounded-lg shadow-md flex flex-col items-center ${
            isDarkMode ? "bg-gray-800" : "bg-gray-100"
          } hover:cursor-pointer`}
          onClick={() => handleCelebrate()}
        >
          <FaUserGraduate size={40} className="text-green-500 mb-4" />
          <h3 className="text-xl font-semibold">Completed</h3>
          <p className="text-2xl font-bold">{userStats.quizzesCompleted}</p>
        </motion.div>

        {/* Accuracy */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`p-6 rounded-lg shadow-md flex flex-col items-center ${
            isDarkMode ? "bg-gray-800" : "bg-gray-100"
          } hover:cursor-pointer`}
          onClick={() => handleCelebrate()}
        >
          <FaChartLine size={40} className="text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold">Accuracy</h3>
          <p className="text-2xl font-bold">{userStats.accuracy}</p>
        </motion.div>

        {/* Streak */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`p-6 rounded-lg shadow-md flex flex-col items-center ${
            isDarkMode ? "bg-gray-800" : "bg-gray-100"
          } hover:cursor-pointer`}
          onClick={() => handleCelebrate()}
        >
          <FaFire size={40} className="text-red-500 mb-4" />
          <h3 className="text-xl font-semibold">Streak</h3>
          <p className="text-2xl font-bold">{userStats.streak}</p>
        </motion.div>
      </div>

      {/* Coins Balance */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <FaCoins size={24} className="text-yellow-500" />
          Your Coins
        </h2>
        <div
          className={`p-6 rounded-lg shadow-md flex items-center justify-between ${
            isDarkMode ? "bg-gray-800" : "bg-gray-100"
          }`}
        >
          <p className="text-3xl font-bold">{coins}</p>
          <NavLink
            to="/shop"
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
          >
            Go to Shop
          </NavLink>
        </div>
      </div>

      {/* Equipped Items */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Equipped Items</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Object.entries(equippedItems).map(([type, itemId]) => {
            const item = inventory.find((i: any) => i.id === itemId);
            if (!item) return null;
            return (
              <div
                key={type}
                className={`p-4 rounded-lg shadow-md flex flex-col items-center ${
                  isDarkMode ? "bg-gray-800" : "bg-gray-100"
                }`}
              >
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Type: {type}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Performance Chart */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Performance Over Time</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke={isDarkMode ? "#ffffff" : "#000000"} />
            <YAxis stroke={isDarkMode ? "#ffffff" : "#000000"} />
            <Tooltip
              contentStyle={{
                backgroundColor: isDarkMode ? "#1e293b" : "#ffffff",
                border: "none",
              }}
              itemStyle={{ color: isDarkMode ? "#ffffff" : "#000000" }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="score"
              stroke="#8884d8"
              strokeWidth={2}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Leaderboard Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Leaderboard</h2>
        <div className="overflow-x-auto">
          <table
            className={`w-full border-collapse ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <thead>
              <tr
                className={`${
                  isDarkMode ? "bg-gray-800" : "bg-gray-200"
                } text-left`}
              >
                <th className="p-3">Rank</th>
                <th className="p-3">Name</th>
                <th className="p-3">Score</th>
              </tr>
            </thead>
            <tbody>
              <tr className={`${isDarkMode ? "bg-gray-700" : "bg-gray-100"}`}>
                <td className="p-3">1</td>
                <td className="p-3 flex items-center gap-2">
                  <FaCrown size={20} className="text-yellow-400" />
                  Alice
                </td>
                <td className="p-3">95</td>
              </tr>
              <tr className={`${isDarkMode ? "bg-gray-700" : "bg-gray-100"}`}>
                <td className="p-3">2</td>
                <td className="p-3">Bob</td>
                <td className="p-3">90</td>
              </tr>
              <tr className={`${isDarkMode ? "bg-gray-700" : "bg-gray-100"}`}>
                <td className="p-3">3</td>
                <td className="p-3">Charlie</td>
                <td className="p-3">85</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
