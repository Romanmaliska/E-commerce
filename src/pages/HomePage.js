import React from "react";
import { Teaser } from "../components/Teaser";
import { Higlights } from "../components/Highlights";
import { Services } from "../components/Services";
import {DesignPlanner} from "../components/DesignPlanner";

const Homepage = () => {
    return (
        <>
            <Teaser />
            <Higlights />
            <DesignPlanner />
            <Services />
        </>
    );
};

export { Homepage };
