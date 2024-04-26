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
import { UserProvider } from "./contexts/User.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <div className="flex font-nunito h-screen text-dark overflow-hidden">
          <SideBar />
          <div className="flex-grow flex px-3 md:px-12 xl:px-20 3xl:px-60 pt-3 md:pt-6 gap-3 md:gap-6">
            <main className="flex-grow overflow-y-scroll pb-6">
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
    </UserProvider>
  </React.StrictMode>
);
