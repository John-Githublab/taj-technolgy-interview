import React, { Suspense } from "react";
import {
  Navigate,
  Route,
  HashRouter as Router,
  Routes,
} from "react-router-dom";
import "./index.css";
import { AuthProvider } from "./provider/Auth";

const User = React.lazy(() => import("./pages/private/user/User"));
const Profile = React.lazy(() => import("./pages/private/profile/Profile"));
const Login = React.lazy(() => import("./pages/public/login/Login"));
const SignUp = React.lazy(() => import("./pages/public/signUp/SignUp"));
const ProtectedRoute = React.lazy(
  () => import("./pages/private/ProtectedRoute")
);

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
                <Suspense fallback={<div>Loading...</div>}>
                  <User />
                </Suspense>
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Suspense fallback={<div>Loading...</div>}>
                  <Profile />
                </Suspense>
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
