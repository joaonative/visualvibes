import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feed from "./pages/Feed.tsx";
import Artist from "./pages/Artist.tsx";
import Trending from "./pages/Trending.tsx";
import Artists from "./pages/Artists.tsx";
import Profile from "./pages/Profile.tsx";
import SideBar from "./components/SideBar.tsx";
import SideWidget from "./components/SideWidget.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="flex w-screen min-h-screen">
        <SideBar />
        <div className="flex-grow flex px-20 gap-6">
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Feed />} />
              <Route path="/trending" element={<Trending />} />
              <Route path="/artist/:id" element={<Artist />} />
              <Route path="/artists" element={<Artists />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>
          <SideWidget />
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);