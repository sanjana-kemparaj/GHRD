import React from 'react'
import HeroSection from "@/components/HeroSection";
import AboutUsSection from "@/components/AboutUsSection";
import ServicesSection from "@/components/ServicesSection";
import StatsBarSection from "@/components/StatsBarSection";
import TeamSection from "@/components/TeamSection";
import UnlockPotentialSection from "@/components/UnlockPotentialSection";


const Page = () => {
    return (
        <div>
            <HeroSection/>
            <AboutUsSection/>
            <ServicesSection/>
            <StatsBarSection/>
            <TeamSection/>
            <UnlockPotentialSection/>
        </div>
    )
}
export default Page
