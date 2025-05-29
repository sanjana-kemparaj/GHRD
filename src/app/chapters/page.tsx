
import ChapterCard from '@/components/ChapterCard';
import PageBanner from "@/components/PageBanner"; 


const sampleChapterData = [
    { title: "UAE", members: 371 },
    { title: "Saudi Arabia", members: 371 },
    { title: "Kuwait", members: 371 },
     { title: "China", members: 371 },
     { title: "Australia", members: 371 },
     { title: "Canada", members: 371 },
     { title: "UK", members: 371 },
    { title: "India - Amaravathi", members: 371 },
    { title: "India - Arunachal Pradesh", members: 330 },
    { title: "India - Bangalore", members: 309 },
    { title: "India - Chatisgadh", members: 371 }, 
    { title: "India - Chennai", members: 251 },
    { title: "India - Coimbatore", members: 253 },
    { title: "India - Gujarat", members: 253 },
    { title: "India - Haryana", members: 330 },
    { title: "India - Himachal Pradesh", members: 309 },
    { title: "India - Hubli", members: 253 },
    { title: "India - Hyderabad", members: 607 },
    { title: "India - Jammu & Kashmir", members: 253 },
    { title: "South Africa - Gauteng", members: 253 },
    { title: "South Africa - Western Cape", members: 253 },
    { title: "Nigeria", members: 253 },
];

const chaptersToDisplay = Array.from({ length: 22}, (_, i) => {
    const data = sampleChapterData[i % sampleChapterData.length];
    return {
        ...data,
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
                            Explore our diverse chapters across the globe and get involved.
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