import ServiceCard from './ServiceCard';
import {
    Users,
    Globe,    
    Award,     
    Lightbulb,
    Zap,
    TrendingUp,
} from 'lucide-react';

const servicesData = [
    {
        id: 1,
        icon: <Users className="h-12 w-12 md:h-14 md:w-14 text-[#ff8c00]" />,
        title: 'Connect with a Global HR Community',
        description:
            'Expand your professional horizons by joining GHRD\'s extensive international HR community. Forge meaningful connections with peers and leaders from varied sectors and cultures, building a robust network essential for career advancement.',
        linkHref: '/membership',
    },
    {
        id: 2,
        icon: <Lightbulb className="h-12 w-12 md:h-14 md:w-14 text-[#ff8c00]" />, // Changed icon
        title: 'HR Insights & Learning Hub',
        description:
            'Stay at the forefront of the HR field with GHRD. Our dynamic platform provides a continuous flow of expert insights, cutting-edge research, best-practice guides, and engaging webinars to fuel your knowledge.',
        linkHref: '/membership',
    },
    {
        id: 3,
        icon: <Zap className="h-12 w-12 md:h-14 md:w-14 text-[#ff8c00]" />, // Changed icon
        title: 'HR Skills Enhancement Workshops',
        description:
            'Sharpen your HR competencies with our targeted workshops and specialized training sessions. Participate in dynamic learning experiences covering essential topics, from strategic leadership to emerging HR technologies, fostering your ongoing professional development.',
        linkHref: '/membership',
    },
    {
        id: 4,
        icon: <Award className="h-12 w-12 md:h-14 md:w-14 text-[#ff8c00]" />,
        title: 'Guided HR Career Mentorship',
        description:
            'Accelerate your career path through our structuorange mentorship initiatives. Receive personalized guidance, strategic advice, and invaluable insights from seasoned HR executives dedicated to fostering your growth.',
        linkHref: '/membership',
    },
    {
        id: 5,
        icon: <TrendingUp className="h-12 w-12 md:h-14 md:w-14 text-[#ff8c00]" />, // Changed icon
        title: 'Strategic HR Benchmarking',
        description:
            'Evaluate and enhance your HR effectiveness with our distinctive benchmarking service. Compare your organization\'s HR practices and strategic approaches against established global benchmarks, utilizing our in-depth tools and reports to drive continuous improvement.',
        linkHref: '/membership',
    },
    {
        id: 6,
        icon: <Globe className="h-12 w-12 md:h-14 md:w-14 text-[#ff8c00]" />,
        title: 'Signature HR Events & Conferences',
        description:
            'Participate in our premier members-only events, summits, and conferences. These exclusive gatherings offer prime opportunities to interact with influential thought leaders and industry pioneers, significantly broadening your expertise and professional circle.',
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
                    <h1 className="text-4xl font-bold text-gray-800 m-5"> {/* Or your existing classes */}
  Building People, Building <span style={{ color: '#ff8c00' }}>Futures</span>
</h1>
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