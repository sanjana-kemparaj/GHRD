import HeroSection from "@/components/HeroSection";
import AboutUsSection from "@/components/AboutUsSection";
import ServicesSection from "@/components/ServicesSection";
import StatsBarSection from "@/components/StatsBarSection";
import TeamSection from "@/components/TeamSection";
import UnlockPotentialSection from "@/components/UnlockPotentialSection";

import React from "react";
import CircularPlusPattern from "@/components/CircularPlusPattern";
import SquareDesign from "@/components/SquareDesign";

const Page = () => {
    return (
        <>
            <HeroSection/>

                <CircularPlusPattern
                    count={15}
                    radius={80}
                    plusSize={10}
                    plusColor="text-blue-600"
                    randomRotation={true}
                    plusStrokeWidth={2}
                    // centerOffset={{ x: 20, y: -10 }} // Offset the circle within its own calculated box
                    startAngleOffset={45} // Start the first plus at a 45-degree angle
                    className="animate-spin-slow absolute bottom-24"
                />


            <AboutUsSection/>
            <div className=" relative">
                <CircularPlusPattern
                    count={15}
                    radius={80}
                    plusSize={10}
                    plusColor="text-blue-600"
                    randomRotation={true}
                    plusStrokeWidth={2}
                    // centerOffset={{ x: 20, y: -10 }} // Offset the circle within its own calculated box
                    startAngleOffset={45} // Start the first plus at a 45-degree angle
                    className="animate-spin-slow absolute top-0 right-0"
                />
                <ServicesSection/>

            </div>

            <StatsBarSection/>
            <div>
                <TeamSection/>
                <div className="absolute animate-spin-slow z-"><SquareDesign/></div>

            </div>

            <UnlockPotentialSection/>
        </>
    )
}
export default Page
