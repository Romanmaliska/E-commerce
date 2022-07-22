import React from "react";

const Topbar = () => {
    return (
        <section className="topbar">
            <div className="topbar__link">
                <svg
                    className="topbar__icon"
                    aria-label="ikea family"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M15 13h4v2h-4v-2z"></path>
                    <path d="M5 5C3.3432 5 2 6.3431 2 8v8c0 1.6569 1.3432 3 3 3h14c1.6569 0 3-1.3431 3-3V8c0-1.6569-1.3431-3-3-3H5zM4 8c0-.5523.4477-1 1-1h14c.5523 0 1 .4477 1 1v8c0 .5523-.4477 1-1 1H5c-.5523 0-1-.4477-1-1V8z"></path>
                </svg>
                <span className="topbar__text">IKEA Family</span>
            </div>
        </section>
    );
};

export { Topbar };
