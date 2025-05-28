"use client"
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import Image from 'next/image';
import hr_services from '@/../public/HR_Services.jpeg';
import hrm from '@/../public/hrm.jpeg';
import test from '@/../public/test.jpg'
import TeamSection from "@/components/TeamSection";
import UnlockPotentialSection from "@/components/UnlockPotentialSection";
import PageBanner from "@/components/PageBanner";

const Page = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const checkScrollTop = () => {
            if (!showScrollTop && window.pageYOffset > 400) {
                setShowScrollTop(true);
            } else if (showScrollTop && window.pageYOffset <= 400) {
                setShowScrollTop(false);
            }
        };
        window.addEventListener('scroll', checkScrollTop);
        return () => window.removeEventListener('scroll', checkScrollTop);
    }, [showScrollTop]);

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "About" }, // Current page, no href
    ];

    return (
        <>
            <PageBanner title="About" breadcrumbs={breadcrumbs}/>
            <section id="about" className="py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
                        {/* Left Column - Images */}
                        <div className="w-full lg:w-1/2 flex flex-col gap-6">
                            <div className="relative">
                                {/* Red accent bar */}
                                <div className="absolute top-0 -left-3 sm:-left-4 md:-left-5  h-[calc(50%-0.75rem)] w-1.5 sm:w-2 bg-blue-600 z-10"></div>
                                <Image
                                    src={hr_services}
                                    alt="Professionals collaborating"
                                    className="rounded-lg shadow-lg w-full object-cover h-auto aspect-[4/3] sm:aspect-video lg:aspect-[4/3]"
                                />
                            </div>
                            <div className="pl-0 sm:pl-8 md:pl-12 lg:pl-16">
                                <Image
                                    src={hrm}
                                    alt="Professional at desk"
                                    className="rounded-lg shadow-lg w-full object-cover h-auto aspect-[4/3] sm:aspect-video lg:aspect-[4/3]"
                                />
                            </div>
                        </div>

                        {/* Right Column - Text Content */}
                        <div className="w-full lg:w-1/2">
                            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2">
                                About
                            </p>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
                                Global HRD
                            </h2>
                            <p className="text-slate-600 leading-relaxed mb-6 text-sm md:text-lg">
                                Global HRD Network (GHRD) is a distinguished non-governmental organization and a
                                registered non-profit entity dedicated to the advancement of the Human Resources
                                profession. Our mission is to serve as a catalyst for knowledge sharing, facilitate the
                                transfer of expertise, and create unparalleled networking opportunities for HR
                                professionals worldwide.
                            </p>

                            <h3 className="text-xl sm:text-2xl font-semibold text-slate-700 mb-3 mt-8">
                                Our Mission and Vision:
                            </h3>
                            <p className="text-slate-600 leading-relaxed mb-6 text-sm md:text-lg">
                                At GHRD, our mission is clear: to be a knowledge and networking hub for HR
                                professionals, transcending geographical boundaries. We aim to unite HR experts from
                                diverse backgrounds and industries, offering them a collaborative platform that fosters
                                their personal and professional growth. We believe in the power of collective wisdom
                                and shared experiences to elevate the HR field to new heights.
                            </p>

                            <h3 className="text-xl sm:text-2xl font-semibold text-slate-700 mb-3 mt-8">
                                Founding Inspiration:
                            </h3>
                            <p className="text-slate-600 leading-relaxed text-sm md:text-lg">
                                GHRD was founded by <strong className="text-slate-700">Mr. Sreenivas Gopalam</strong>, a visionary leader in the HR domain, on
                                the 12th of August in 2016. Mr. Gopalam's passion for HR excellence and his vision for a
                                global HR community led to the establishment of GHRD. Under his guidance, GHRD has
                                grown into a thriving network, providing countless HR professionals with the tools and
                                opportunities they need to succeed in their careers.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Scroll to Top Button */}
                {showScrollTop && (
                    <button
                        onClick={scrollTop}
                        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 sm:p-4 rounded-full shadow-lg transition-opacity duration-300 z-50"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp size={20} />
                    </button>
                )}
                <TeamSection/>
                <UnlockPotentialSection/>
            </section>
        </>

    );
};

export default Page;
