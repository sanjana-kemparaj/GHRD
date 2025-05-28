// src/app/chapters/page.tsx
import ChapterCard from '@/components/ChapterCard';
import PageBanner from "@/components/PageBanner"; // Adjust path if needed

// Sample data - we'll repeat this or use parts of it to make 12 cards
const sampleChapterData = [
    { title: "Amaravathi", members: 371 },
    { title: "Arunachal Pradesh", members: 330 },
    { title: "Bangalore", members: 309 },
    { title: "Chatisgadh", members: 371 }, // Note: Corrected spelling from image for consistency
    { title: "Chennai", members: 251 },
    { title: "Coimbatore", members: 253 },
    { title: "Gujarat", members: 253 },
    { title: "Haryana", members: 330 },
    { title: "Himachal Pradesh", members: 309 },
    { title: "Hubli", members: 253 },
    { title: "Hyderabad", members: 607 },
    { title: "Jammu & Kashmir", members: 253 },
];

// Create 12 cards for the grid.
// We'll cycle through the sample data if it's shorter than 12.
const chaptersToDisplay = Array.from({ length: 12 }, (_, i) => {
    const data = sampleChapterData[i % sampleChapterData.length];
    return {
        ...data,
        // You can customize the link per chapter if needed, e.g., `/membership/${data.title.toLowerCase().replace(/\s+/g, '-')}`
        membershipLink: `/membership?chapter=${encodeURIComponent(data.title)}`
    };
});

export default function ChaptersPage() {
    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Chapters" }, // Current page, no href
    ];


    return (
        <>
            <PageBanner
                title="Chapters"
                breadcrumbs={breadcrumbs}
            />
            <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8"> {/* Light gray background for the page */}


                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-12 md:mb-16">
                        <p className="text-sm md:text-base text-blue-600 font-semibold uppercase tracking-wider mb-2">
                            OUR CHAPTERS
                        </p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
                            Explore our diverse chapters across the nation and get involved.
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {chaptersToDisplay.map((chapter, index) => (
                            <ChapterCard
                                key={index} // Using index as key since data might repeat for this example
                                title={chapter.title}
                                memberInfo={`This chapter has more than ${chapter.members} members`}
                                membershipLink={chapter.membershipLink}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>

    );
}