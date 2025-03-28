import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Home />
    </div>
  );
}
