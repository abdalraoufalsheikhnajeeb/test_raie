// src/routes/AppRouter.tsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import ProtectedRoute from "./ProtectedRoute";

const AppRouter = () => (
  <div>
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        {/* Add other protected routes here */}
      </Routes>
    </Router>
  </div>
);

export default AppRouter;
