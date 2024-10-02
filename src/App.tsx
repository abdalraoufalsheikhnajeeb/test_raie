import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LanguageProvider from "./components/common/LanguageProvider";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import AddServices from "./pages/AddServices";
import ProtectedRoute from "./routes/ProtectedRoute";
import RootLayout from "./app/layout/RootLayout";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          {/* Route for login, outside RootLayout */}
          <Route path="/" element={<LoginPage />} />

          {/* Protected routes under RootLayout (with Navbar and Sidebar) */}
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <RootLayout />
              </ProtectedRoute>
            }
          >
            {/* HomePage */}
            <Route index element={<HomePage />} />

            {/* AddServices nested route */}
            <Route path="add-services" element={<AddServices />} />
          </Route>
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
