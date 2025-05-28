import StatsBarItem from './StatsBarItem';
import { CalendarCheck, Video, Users, Smile } from 'lucide-react'; // Example icons

const statsData = [
    {
        id: 1,
        icon: <CalendarCheck className="h-6 w-6 sm:h-7 sm:w-7" />,
        count: '50 +',
        label: 'Successful Events',
    },
    {
        id: 2,
        icon: <Video className="h-6 w-6 sm:h-7 sm:w-7" />,
        count: '100 +',
        label: 'Webinars',
    },
    {
        id: 3,
        icon: <Users className="h-6 w-6 sm:h-7 sm:w-7" />,
        count: '500 +',
        label: 'Skilled Experts',
    },
    {
        id: 4,
        icon: <Smile className="h-6 w-6 sm:h-7 sm:w-7" />,
        count: '33 k+',
        label: 'Happy Members',
    },
];

const StatsBarSection = () => {
    return (
        <section className="bg-gray-800 py-10 md:py-16"> {/* Adjust background color as needed, e.g., gray-900 */}
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 text-center sm:text-left">
                    {statsData.map((stat) => (
                        <StatsBarItem
                            key={stat.id}
                            icon={stat.icon}
                            count={stat.count}
                            label={stat.label}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsBarSection;