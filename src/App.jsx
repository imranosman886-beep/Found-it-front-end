// OWNER: Imran

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import BrowseItems from "./pages/BrowseItems";
import ItemDetails from "./pages/ItemDetails";
import ReportItem from "./pages/ReportItem";
import MyReports from "./pages/MyReports";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

import AdminRoute from "./components/AdminRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/items" element={<BrowseItems />} />
          <Route path="/items/:id" element={<ItemDetails />} />

          {/* Student routes */}
          <Route path="/report" element={<ReportItem />} />
          <Route path="/my-reports" element={<MyReports />} />

          {/* Admin routes */}
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route
            path="/admin-dashboard"
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
