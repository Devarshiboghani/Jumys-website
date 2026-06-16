import React from "react";

import Hero from './Hero-section/Hero'
import About from './About-section/About'
import Slider from './Slider-section/Slider'
import Sweet from './Sweet-section/Sweet'
import Flavor from './Flavor-section/Flavor'
import News from './News-section/News'

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Slider />
            <Sweet />
            <Flavor />
            <News />
        </>
    )
}

export default Home;