import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import List from "./pages/List";
import BlogPage from "./pages/BlogePage";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/list" element={<List />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>

    </div>
  );
}

export default App;
