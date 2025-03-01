import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Dashboard from "../pages/Dashboard";
import Challenge from "../pages/Challenge";
import Leaderboard from "../pages/Leaderboard";
import Profile from "../pages/Profile";
import Shop from "../pages/Shop";
import Inventory from "../pages/Inventory";
const MainLayout = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/challenge" element={<Challenge />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
    </Router>
  );
};

export default MainLayout;
