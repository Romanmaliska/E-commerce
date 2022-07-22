import React from "react";
import ReactDOM from "react-dom/client";
import { AppProvider } from "./context/sidebarContext";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <AppProvider>
                <App />
            </AppProvider>
        </React.StrictMode>
    </BrowserRouter>
);
