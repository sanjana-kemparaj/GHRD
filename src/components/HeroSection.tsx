// src/components/HeroSection.tsx
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import test from '@/../public/test.jpg'

const HeroSection = () => {
    return (
        <section className="relative bg-blue-50/70 py-12 min-h-screen flex items-center overflow-hidden">
            {/* Decorative Red Skewed Background Element */}
            <div
                aria-hidden="true"
                className="absolute bottom-0 right-0 h-full w-full md:w-4/5 lg:w-1/2 xl:w-[45%] transform origin-bottom-right bg-blue-300 -skew-y-[6deg] md:-skew-y-[8deg] lg:-skew-y-[10deg] z-0"
            />

            <div className="container mx-auto px-4 relative z-10"> {/* Ensure content is above the skew */}
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
                    {/* Left Side: Image */}
                    <div className="w-full md:w-1/2 order-1 md:order-none animate-fadeInLeft">
                        <div className="relative aspect-[4/3] md:aspect-square lg:aspect-[5/4] rounded-lg overflow-hidden shadow-xl">
                            <Image
                                src={test}
                                alt="Man happily working on a computer, showcasing HR career advancement"
                                fill
                                style={{ objectFit: 'cover' }}
                                priority // Good for LCP (Largest Contentful Paint)
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                            />
                        </div>
                    </div>

                    {/* Right Side: Text Content & Button */}
                    <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-none animate-fadeInRight">
                        <p className="text-blue-700 font-semibold text-sm md:text-base uppercase tracking-wider mb-2 md:mb-3">
                            GROW YOUR HR CAREER
                        </p>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                            Transform Your HR Journey <br className="hidden md:inline" />
                            with <span className="text-blue-600">GHRD&apos;s</span> Support and Insights.
                        </h1>
                        <p className="text-gray-700 text-base md:text-lg lg:text-xl mb-6 md:mb-8">
                            Unlock the Potential of Your HR Career with GHRD&apos;s Support.
                        </p>
                        <Button
                            size="lg"
                            className="bg-[#ff8c00] hover:bg-orange-600 text-white px-8 py-3 text-lg rounded-md shadow-md transition-transform duration-150 ease-in-out hover:scale-105"

                        >
                            Get Membership
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;