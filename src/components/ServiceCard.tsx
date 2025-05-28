import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    linkHref: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, linkHref }) => {
    return (
        <div className="bg-blue-50/70 p-6 md:p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
            <div className="text-blue-600 mb-4">
                {/* Ensure icon has size classes if not intrinsic */}
                {icon}
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">{title}</h3>
            <p className="text-gray-600 text-sm md:text-base mb-6 flex-grow">{description}</p>
            <Link
                href={linkHref}
                className="group mt-auto inline-flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
        <span className="mr-2 bg-white group-hover:bg-blue-50 transition-colors duration-300 p-2 rounded-full shadow-sm">
          <ArrowRight className="h-4 w-4 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
        </span>
                Get Membership
            </Link>
        </div>
    );
};

export default ServiceCard;