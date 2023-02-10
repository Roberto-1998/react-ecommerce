import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./pages/Layout";
import Login from "./pages/Login";

import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />

      <Route
        path="/register"
        element={
          <ProtectedRoute>
            <Register />
          </ProtectedRoute>
        }
      />
      <Route
        path="/login"
        element={
          <ProtectedRoute>
            <Login />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Layout />} />
    </Routes>
  );
}

export default App;
