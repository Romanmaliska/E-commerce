import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const openSidebar = () => {
        setIsSidebarOpen(true);
    };
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    console.log(isSidebarOpen)

    return (
        <AppContext.Provider
            value={{
                isSidebarOpen,
                openSidebar,
                closeSidebar,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useSidebarContext = () => {
    return useContext(AppContext);
};

export { AppProvider };
