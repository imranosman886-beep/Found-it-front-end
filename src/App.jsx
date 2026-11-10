// OWNER: Imran

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import BrowseItems from "./pages/BrowseItems";
import ItemDetails from "./pages/ItemDetails";
import ReportItem from "./pages/ReportItem";
import MyReports from "./pages/MyReports";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/items" element={<BrowseItems />} />
        <Route path="/items/:id" element={<ItemDetails />} />
        <Route path="/report" element={<ReportItem />} />
        <Route path="/my-reports" element={<MyReports />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;