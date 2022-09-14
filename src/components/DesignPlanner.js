import React from "react";
import designSmall from "../images/designPlanner/designPlanner-sm.avif";
import designLarge from "../images/designPlanner/designPlanner-lg.avif";

const DesignPlanner = () => {
    return (
        <section className="planner" aria-label="Design Planner">
            <img className="planner__img" src={designSmall} alt="Design Planner" />
            <article className="planner__info">
                <h2>Plánujte celý júl s dizajnérom zadarmo</h2>
                <p>
                    Využite našu letnú akciu. Objednajte si počas júla schôdzku
                    so špecialistom na kuchyne a plánujte s nami kompletne
                    zadarmo.
                </p>
                <button type="button" className="btn btn__primary">Chcem termín</button>
            </article>
        </section>
    );
};

export { DesignPlanner };
