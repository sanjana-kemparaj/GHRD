// src/components/ChapterCard.tsx
import Link from 'next/link';

interface ChapterCardProps {
    title: string;
    memberInfo: string;
    membershipLink?: string; // Optional, defaults to a generic link
}

export default function ChapterCard({ title, memberInfo, membershipLink = "/membership" }: ChapterCardProps) {
    return (
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 truncate">
                {title}
            </h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
                {memberInfo}
            </p>
            <Link
                href={membershipLink}
                className="text-gray-800 font-semibold hover:text-red-600 transition-colors duration-150 self-start text-sm sm:text-base"
            >
                Get Membership
            </Link>
        </div>
    );
}