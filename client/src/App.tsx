import { BrowserRouter, Routes, Route } from "react-router-dom";
import type React from "react";
import MainLayout from "./components/authcomponents/MainLayout";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import StatsCards from "./components/dashboard/StatsCards";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/dashboard" element={<DashboardLayout />} />
        <Route path="/lol" element={<StatsCards/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;