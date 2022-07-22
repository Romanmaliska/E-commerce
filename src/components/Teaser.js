import React from "react";
import img1 from "../images/teaser/1.avif";
import img2 from "../images/teaser/2.avif";

const Teaser = () => {
    return (
        <section className="teaser" aria-label="Garden furniture">
            <h2 className="teaser__heading">Váš obľúbený spôsob relaxácie</h2>
            <p className="teaser__text">
                Nech už relaxujete akokoľvek, náš pohodlný záhradný nábytok sa
                postará o to, aby bol váš čas pre seba ešte výnimočnejší.
            </p>
            <div className="teaser__imgs">
            <img
                className="teaser__img"
                src={img1}
                alt="teaser"
                loading="lazy"
            ></img>
            <img
                className="teaser__img"
                src={img2}
                alt="teaser"
                loading="lazy"
            ></img>
            </div>
            <div className="teaser__link">
                <h3 className="teaser__link__text">
                    Pozrite si záhradný nábytok
                </h3>
                <svg
                    className="teaser__link__text"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                >
                    <path
                        fillRule="evenodd"
                        d="m15.5996 12.0007-5.785 5.7857-1.4143-1.4141 4.3711-4.3716L8.4003 7.629l1.4143-1.4142 5.785 5.7859z"
                    ></path>
                </svg>
            </div>
        </section>
    );
};

export { Teaser };
