import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import WhatWeDo from "./pages/WhatWeDo";
import StoriesPage from "./pages/StoriesPage";
import ServicePageLayout from "./pages/services/ServicePageLayout";
import StoryDetailPage from "./pages/stories/StoryDetailPage";
import NotFoundPage from "./pages/notFoundPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="what-do-we-do" element={<WhatWeDo />} />
          <Route path="stories" element={<StoriesPage />}>
            <Route path="story/:id" element={<StoryDetailPage />} />
          </Route>

          <Route path="services/:id" element={<ServicePageLayout />} />
          <Route path="page_no_found/" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
