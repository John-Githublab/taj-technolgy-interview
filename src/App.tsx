import {
  Navigate,
  Route,
  HashRouter as Router,
  Routes,
} from "react-router-dom";
import "./index.css";
import ProtectedRoute from "./pages/private/ProtectedRoute";
import User from "./pages/private/user/User";
import Login from "./pages/public/login/Login";
import SignUp from "./pages/public/signUp/SignUp";
import Profile from "./pages/private/profile/Profile";
import { AuthProvider } from "./provider/Auth";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />

          {/* Private Routes */}
          <Route
            path="/dashboard/user"
            element={
              <ProtectedRoute>
                <User />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
