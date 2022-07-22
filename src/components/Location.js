import React from "react";

const Location = () => {
    return (
        <section className="location">
            <svg
                width="24"
                height="24"
                aria-label="Location"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    d="M22 20V4H2v16h20zM20 6H4v12h3v-8h10v8h3V6zm-9 6H9v6h2v-6zm2 6h2v-6h-2v6z"
                ></path>
            </svg>
            <p>Bratislava</p>
        </section>
    );
};

export { Location };
