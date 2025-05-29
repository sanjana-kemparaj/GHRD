import TeamMemberCard from './TeamMemberCard';

const teamMembersData = [
    {
        id: 1,
        // imageUrl: '/placeholder-team-1.jpg', // REPLACE with actual image paths
        name: 'Abdul Aziz A. Al Ameri',
        role: 'Chairman Petrogulf Business Group & SkilTec Ace Global HR Consultancy LLC',
        roleColor: 'text-blue-600',
    },
    {
        id: 2,
        // imageUrl: '/placeholder-team-2.jpg',
        name: 'Kemparaj',
        role: 'Managing Director',
        roleColor: 'text-blue-600', // Or a different color for founder, e.g., text-orange-600
    },
    {
        id: 3,
        // imageUrl: '/placeholder-team-3.jpg',
        name: 'Shafqat Zaheer',
        role: 'Advisor - Business Development',
        roleColor: 'text-blue-600',
    },
    {
        id: 4,
        // imageUrl: '/placeholder-team-4.jpg',
        name: 'Syed Riaz', // Example, names might be unique
        role: 'Director - Talent Acquisition & Operations',
        roleColor: 'text-blue-600',
    },
    // Add more team members as needed
];

const TeamSection = () => {
    return (
        <section className="py-16 md:py-24 bg-gray-50"> {/* Light background for this section */}
            {/* Optional: Faded "Members" text behind title - similar to AboutUsSection */}
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 md:mb-16">
                    <p className="text-sm md:text-base text-blue-600 font-semibold uppercase tracking-wider mb-2">
                        GLOBAL HRD
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
                        Professionals Team
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {teamMembersData.map((member) => (
                        <TeamMemberCard
                            key={member.id}
                            name={member.name}
                            role={member.role}
                            roleColor={member.roleColor}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;