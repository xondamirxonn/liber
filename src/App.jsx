import React from "react";
import { MainLayout } from "./layout/main-layout";
import { Home } from "./pages/home";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Profile } from "./pages/profile";
function App() {
  return (
    <div>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </MainLayout>
      {/* <Home /> */}
    </div>
  );
}

export default App;
