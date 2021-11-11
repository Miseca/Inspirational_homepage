import React from "react";
//Import goals and goals selector
import { selectInspirationalBackgrounds } from "./inspirationalBackgroundSlices";
import { useSelector } from "react-redux";

import logo from '../../logo.svg';


export default function InspirationalBackgrounds() {
    const inspirationalBackgrounds = useSelector(selectInspirationalBackgrounds);

    return (
        <section>
            <h4>Background</h4>
            <img src ={logo} alt = "Logo"/>
        </section>
    );
}