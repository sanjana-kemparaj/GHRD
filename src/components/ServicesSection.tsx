import ServiceCard from './ServiceCard';
import {
    Briefcase, // For Professional Workshops
    Users,     // For Mentorship / Networking
    Share2,    // For Knowledge Sharing
    Globe,     // For Global HR Benchmarking / Networking
    Award,     // For Exclusive Member Events
    BarChart3, // For Benchmarking
    // Add more icons as needed from lucide-react
} from 'lucide-react';

const servicesData = [
    {
        id: 1,
        icon: <Share2 className="h-12 w-12 md:h-14 md:w-14" />, // Example icon
        title: 'Knowledge Sharing',
        description:
            'At GHRD, we are committed to sharing and transferring HR knowledge globally. Our platform offers a wealth of resources, webinars, and articles to help you stay updated with the latest HR trends and best practices.',
        linkHref: '/membership', // Replace with actual link
    },
    {
        id: 2,
        icon: <BarChart3 className="h-12 w-12 md:h-14 md:w-14" />, // Example icon
        title: 'Global HR Benchmarking',
        description:
            'Access a unique service that allows you to benchmark your HR practices and strategies against global standards. GHRD offers comprehensive benchmarking tools and reports for improvement.',
        linkHref: '/membership',
    },
    {
        id: 3,
        icon: <Briefcase className="h-12 w-12 md:h-14 md:w-14" />, // Example icon
        title: 'Professional Workshops',
        description:
            'Elevate your HR skills through our exclusive workshops and training programs. We offer a range of courses covering topics from leadership development to HR technology, ensuring your continuous growth.',
        linkHref: '/membership',
    },
    {
        id: 4,
        icon: <Users className="h-12 w-12 md:h-14 md:w-14" />, // Example icon
        title: 'Global HR Networking',
        description:
            'GHRD is your gateway to a vast global HR network. Connect with HR professionals from diverse backgrounds, industries, fostering valuable relationships for your career.',
        linkHref: '/membership',
    },
    {
        id: 5,
        icon: <Award className="h-12 w-12 md:h-14 md:w-14" />, // Example icon
        title: 'Mentorship Programs', // Changed title to match the image more broadly
        description:
            'Our mentorship programs provide you with the opportunity to learn from experienced HR leaders. Gain insights, advice, and guidance to further your HR career.',
        linkHref: '/membership',
    },
    {
        id: 6,
        icon: <Globe className="h-12 w-12 md:h-14 md:w-14" />, // Example icon
        title: 'Exclusive Member Events',
        description:
            'Enjoy access to members-only events and conferences, where you can engage with thought leaders and industry experts, expanding your knowledge and network.',
        linkHref: '/membership',
    },
];

const ServicesSection = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 md:mb-16">
                    <p className="text-sm md:text-base text-blue-600 font-semibold uppercase tracking-wider mb-2">
                        OUR SERVICES
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
                        High Quality Services
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service) => (
                        <ServiceCard
                            key={service.id}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                            linkHref={service.linkHref}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;