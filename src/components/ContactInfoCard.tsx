
import React from 'react';
interface ContactInfoCardProps {
    icon: React.ReactNode;
    title: string;
    details: string | React.ReactNode; // Allow JSX for phone number with icon
    className?: string;
}

export default function ContactInfoCard({ icon, title, details, className = "" }: ContactInfoCardProps) {
    return (
        <div className={`bg-blue-50 p-6 rounded-lg shadow-md flex flex-col items-center text-center ${className}`}>
            <div className="text-blue-600 mb-3">
                {React.cloneElement(icon as React.ReactElement, { size: 32, strokeWidth: 1.5 })}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
            <div className="text-gray-700 text-sm">{details}</div>
        </div>
    );
}