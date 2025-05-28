// src/components/PageBanner.tsx
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import Banner from "@/../public/banner.jpeg"

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface PageBannerProps {
    title: string;
    breadcrumbs: BreadcrumbItem[];
}

export default function PageBanner({
                                       title,
                                       breadcrumbs,
                                   }: PageBannerProps) {


    return (
        <div className="relative w-full  h-50 overflow-hidden">
            {/* Background Image - Full Cover */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
                style={{
                    backgroundImage: `url(${Banner.src})` // Use .src property
                }}
            />
            <div className="absolute inset-0 bg-blue-800/80 mix-blend-multiply"></div>


            {/* Content */}
            <div className="relative h-full flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Title */}
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
                        {title}
                    </h1>

                    {/* Breadcrumbs */}
                    <nav aria-label="Breadcrumb">
                        <ol className="flex items-center space-x-1.5 bg-white/90 backdrop-blur-sm text-gray-700 px-4 py-2.5 rounded-full shadow-md text-sm">
                            {breadcrumbs.map((crumb, index) => (
                                <li key={index} className="flex items-center">
                                    {crumb.href ? (
                                        <Link
                                            href={crumb.href}
                                            className="hover:text-orange-600 hover:underline transition-colors"
                                        >
                                            {crumb.label}
                                        </Link>
                                    ) : (
                                        <span className="font-medium text-gray-600">
                      {crumb.label}
                    </span>
                                    )}
                                    {index < breadcrumbs.length - 1 && (
                                        <ChevronRight className="h-4 w-4 text-gray-400 mx-1"/>
                                    )}
                                </li>
                            ))}
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    );
}