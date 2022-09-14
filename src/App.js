import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import { Topbar } from "./components/Topbar";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { Location } from "./components/Location";
import { Homepage } from "./pages/Homepage";
import { Shop } from "./pages/Shop";
import {ShoppingCart } from "./pages/ShoppingCart";
import {Product } from "./pages/Product";
import { ErrorPage } from "./pages/ErrorPage";
import { Footer } from "./components/Footer";

function App() {
    return (
        <Router>
            <div className="App">
                <Topbar />
                <div className="body-container">
                    <Navbar />
                    <Sidebar />
                    <Location />
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/product/:Id" element={<Product />} />
                    <Route path="/shoppingcart" element={<ShoppingCart />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
