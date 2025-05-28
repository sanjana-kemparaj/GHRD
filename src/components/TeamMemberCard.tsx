import Image from 'next/image';
import { Plus } from 'lucide-react';
import no_image from '@/../public/no_image.jpeg'; // Placeholder image

interface TeamMemberCardProps {
    imageUrl: string;
    name: string;
    role: string;
    roleColor?: string; // Optional color for the role text
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
                                                           imageUrl,
                                                           name,
                                                           role,
                                                           roleColor = 'text-blue-600',
                                                       }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden text-center transition-transform duration-300 hover:scale-105">
            <div className="relative aspect-[3/4] group"> {/* Aspect ratio for the image */}
                <Image
                    src={no_image} // Fallback image
                    alt={`Photo of ${name}`}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="group-hover:scale-110 transition-transform duration-300 opacity-35"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <button
                    aria-label={`More about ${name}`}
                    className="absolute bottom-4 right-4 bg-white text-blue-600 p-2 rounded-full shadow-md hover:bg-red-50 transition-colors opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
                >
                    <Plus className="h-5 w-5" />
                </button>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{name}</h3>
                <p className={`text-sm font-medium ${roleColor}`}>{role}</p>
            </div>
        </div>
    );
};

export default TeamMemberCard;