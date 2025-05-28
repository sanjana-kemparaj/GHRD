import Image from 'next/image';
import FeatureListItem from './FeatureListItem';
import Growth from '@/../public/growth.jpeg'; // Example import, replace with your actual SVG
const featuresData = [
    'HR Research Collaborations',
    'Knowledge Sharing and Transfer',
    'Discover the Power of Networking',
    'Mentorship Programs',
];

const UnlockPotentialSection = () => {
    return (
        <section className="relative py-16 md:py-24 bg-gray-50 overflow-hidden"> {/* Light background for the section */}
            {/* Placeholder for Decorative SVG Background Elements */}
            {/* These would be absolutely positioned SVGs */}
            {/* Example of one swoosh - you'd need to design the actual SVG */}
            <div
                aria-hidden="true"
                className="absolute top-0 left-0 w-[60%] h-full md:w-[45%] md:h-[120%] z-0 transform -translate-y-[10%]"
            >
                {/* Replace with your actual SVG path or inline SVG */}

            </div>
            <div
                aria-hidden="true"
                className="absolute -top-20 -right-40 w-96 h-96 md:w-[500px] md:h-[500px] z-0 opacity-30" // Another decorative element example
            >
                <svg viewBox="0 0 100 100" fill="#5a95d1" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <circle cx="50" cy="50" r="50"/>
                </svg>
            </div>


            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                   
                    <div className="lg:w-1/2 relative flex justify-center items-center order-2 lg:order-1">
                       
                        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px]">
                            
                            <div className="absolute inset-0 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                                <Image
                                    src={Growth}
                                    alt="Team collaborating and unlocking potential"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    sizes="(max-width: 640px) 300px, (max-width: 768px) 350px, (max-width: 1024px) 400px, 450px"
                                />
                            </div>
                            
                        </div>
                    </div>

                    {/* Right Column: Text Content */}
                    <div className="lg:w-1/2 text-center lg:text-left order-1 lg:order-2">
                        {/* Optional: Faded "Features" text behind title */}
                        <div className="relative mb-4">
                <span className="absolute -top-8 left-1/2 lg:left-0 lg:-top-10 transform -translate-x-1/2 lg:translate-x-0 text-[4rem] md:text-[6rem] font-extrabold text-gray-200/80 opacity-50 whitespace-nowrap select-none z-0">
                    Features
                </span>
                        </div>

                        <h2 className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight mt-8 lg:mt-0">
                            Unlock the Potential of Your HR Career with GHRD&apos;s Support.
                        </h2>
                        <p className="relative z-10 text-gray-600 text-base md:text-lg mb-10">
                            Mention the array of services, including unique offerings, that
                            GHRD provides to its members for their advancement in the HR
                            profession.
                        </p>

                        <ul className="space-y-4 max-w-md mx-auto lg:mx-0">
                            {featuresData.map((feature, index) => (
                                <FeatureListItem key={index} text={feature} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UnlockPotentialSection;