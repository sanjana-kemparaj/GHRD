import Image from 'next/image';
import { CheckCircle2, Phone, ArrowUpCircle } from 'lucide-react';
import meeting from "@/../public/buisnessmeeting.jpeg";
import shake from "@/../public/shake.jpeg";
const AboutUsSection = () => {
   const features = [
    'Opportunities for HR Research Collaboration',
    'Access to Diversity & Inclusion Best Practices',
    'Support for Achieving HR Certifications',
    'Explore Our Full Suite of Member Benefits...',
    'Briefings on HR Legal and Compliance Matters',
];

    return (
        <section className="relative py-16 md:py-24 bg-white overflow-hidden">
            {/* Faded Background Text - Adjust as needed */}
            <div
                aria-hidden="true"
                className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
            >
        <span className="text-[10rem] md:text-[15rem] lg:text-[20rem] font-extrabold text-gray-100/50 opacity-30 whitespace-nowrap transform -rotate-[5deg] select-none">
          GHRD GLOBAL
        </span>
            </div>

            {/* Decorative Plus Signs - simplified examples */}
            <div aria-hidden="true" className="absolute top-10 left-10 text-blue-300 text-2xl opacity-70 select-none">
                +
            </div>
            <div aria-hidden="true" className="absolute bottom-20 right-10 text-blue-300 text-xl opacity-70 select-none">
                +
            </div>
            <div aria-hidden="true" className="absolute top-1/2 left-1/4 text-blue-300 text-3xl opacity-60 select-none">
                +
            </div>


            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    {/* Left Column: Text Content */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <p className="text-blue-600 font-semibold uppercase tracking-wider mb-3 text-sm md:text-base">
                            MORE ABOUT US
                        </p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                            Transforming Your <br className="hidden sm:inline" /> HR Journey
                        </h2>
                        <p className="text-gray-600 text-base md:text-lg mb-8">
                            Access unparalleled opportunities for comprehensive growth. Connect with seasoned HR professionals, leverage exclusive insights, and accelerate your career trajectory.
                        </p>

                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-10 text-left">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-start space-x-3">
                                    <CheckCircle2 className="h-6 w-6 text-blue-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
                            <div className="flex items-center space-x-3 p-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors">
                                <Phone className="h-8 w-8" />
                                <div>
                                    <p className="text-xs font-medium">Call us</p>
                                    <a
                                        href="tel:+971 54 354 6423"
                                        className="text-lg font-semibold hover:underline"
                                    >
                                        +971 54 354 6423
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Images & Stats Box */}
                    <div className="lg:w-1/2 relative mt-10 lg:mt-0">
                        <div className="relative">
                            {/* Main Image */}
                            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                                <Image
                                    src={meeting}
                                    alt="Team collaborating on a laptop"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>

                            {/* Smaller Inset Image */}
                            <div className="absolute top-8 -left-8 sm:-bottom-12 sm:-left-12 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-xl overflow-hidden shadow-xl border-4 border-white z-10">
                                <Image
                                    src={shake} // REPLACE with your image
                                    alt="Business meeting"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    sizes="(max-width: 640px) 160px, 224px"
                                />
                            </div>

                            {/* Stats Box */}
                            <div className="absolute h-30 w-40 sm:top-0 sm:right-0 sm:-mt-10 sm:mr-5 md:top-auto md:bottom-5  md:-left-10 md:-mb-8  md:-mr-8
  bg-[#ff8c00] text-white
  p-6 sm:p-8 rounded-xl shadow-2xl
  flex flex-col items-center justify-center text-center
  z-20 animate-bounce">
                                <p className="text-4xl sm:text-3xl font-bold">20+</p>
                                <p className="text-sm sm:text-base font-medium mt-1">Years</p>
                                <p className="text-xs sm:text-sm mt-2 leading-tight">
                                    Of experience in HR services
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll to top button - often a global component, shown here for completeness from image */}
            <button
                // onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-8 right-8 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg z-50 transition-opacity duration-300"
                aria-label="Scroll to top"
            >
                <ArrowUpCircle className="h-6 w-6" />
            </button>
        </section>
    );
};

export default AboutUsSection;