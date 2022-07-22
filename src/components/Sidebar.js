import React from "react";
import logo from "../images/logo.svg";
import { useSidebarContext } from "../context/sidebarContext";

const Sidebar = () => {
    const { closeSidebar, isSidebarOpen } = useSidebarContext();

    return (
        <aside
            className={`${isSidebarOpen ? "sidebar sidebar-show" : "sidebar"}`}
        >
            <section className="sidebar__header">
                <img
                    src={logo}
                    className="sidebar__logo"
                    alt="logo"
                    width="75"
                    height="30"
                />
                <svg
                    className="sidebar__icon"
                    onClick={closeSidebar}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="m11.9997 13.4149 4.9498 4.9497 1.4142-1.4142-4.9498-4.9497 4.9498-4.9498-1.4142-1.4142-4.9498 4.9498L7.05 5.6367 5.6357 7.051l4.9498 4.9498-4.9497 4.9497L7.05 18.3646l4.9497-4.9497z"
                    ></path>
                </svg>
            </section>
            <section className="sidebar__links">
                <h1>Domov</h1>
                <h1>Výrobky</h1>
            </section>
        </aside>
    );
};

export { Sidebar };
