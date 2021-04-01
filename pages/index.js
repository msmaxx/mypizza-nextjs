import React from "react";

import SliderSection from "../components/Slider";
import Hero from "../components/Hero";
import ProductList from "../components/ProductList";
import Contact from "../components/Contact";
import Benefits from "../components/Benefits";

export default function Home() {
    return (
        <React.Fragment>
            <SliderSection/>,
            <Hero/>
            <ProductList />
            <Benefits />
            <Contact />
        </React.Fragment>
    );
}
