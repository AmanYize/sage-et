// MainLayout.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Dashboard from "../pages/Dashboard";
import Challenges from "../pages/Challenges";
import Leaderboard from "../pages/Leaderboard";
import Profile from "../pages/Profile";
import Shop from "../pages/Shop";
import Inventory from "../pages/Inventory";
import WorldMap from "../components/Challenges/WorldMap";
import ComputerScience from "../pages/Quests/ComputerScience";

const MainLayout = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Root Route */}
        <Route path="/" element={<Dashboard />} />

        {/* Challenge Route with Nested Routes */}
        <Route path="/challenges" element={<Challenges />}>
          {/* Index Route: Default View */}
          <Route index element={<WorldMap />} />

          {/* Static Route for Specific Quests */}
          <Route path="computer-science" element={<ComputerScience />} />
        </Route>

        {/* Other Routes */}
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
    </Router>
  );
};

export default MainLayout;
