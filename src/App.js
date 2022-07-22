import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { Topbar } from "./components/Topbar";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { Location } from "./components/Location";
import { HomePage } from "./pages/HomePage";
import { Store } from "./pages/Store";
import { Footer } from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Topbar />
            <div className="body-container">
                <Navbar />
                <Sidebar />
                <Location />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/store" element={<Store />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
