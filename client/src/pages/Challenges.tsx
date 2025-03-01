import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Outlet } from "react-router-dom";

const Challenges = () => {
  const isDarkMode = useSelector(
    (state: RootState) => state.darkMode.isDarkMode
  );

  return (
    <div
      className={`flex flex-col min-h-screen p-4 ${
        isDarkMode ? "bg-slate-900 text-white" : "bg-slate-50 text-black"
      }`}
    >
      {/* World Map */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer
        className={`mt-8 text-center text-sm ${
          isDarkMode ? "text-gray-300" : "text-gray-600"
        }`}
      >
        <p>© 2023 SAGE ET. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Challenges;
