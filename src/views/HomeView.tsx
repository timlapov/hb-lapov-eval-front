import React from 'react'
import HeroSection from "@/components/home/HeroSection";
import WhySection from "@/components/home/WhySection";
import UtilitiesCardsSection from "@/components/home/UtilitiesCardsSection";

function HomeView() {
    return (
        <main>
            <HeroSection/>
            <WhySection/>
            <UtilitiesCardsSection/>
        </main>
    )
}

export default HomeView
