import React from 'react'

interface StatsBarItemProps {
    icon: React.ReactNode;
    count: number;
    label: string;
}

const StatsBarItem: React.FC<StatsBarItemProps> = ({icon, count, label}) => {
    return (
        <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="bg-blue-600 p-3 sm:p-4 rounded-full text-white">
                {/* Icon should be white, size appropriately */}
                {icon}
            </div>
            <div>
                <p className="text-2xl sm:text-3xl font-bold text-white">{count}</p>
                <p className="text-xs sm:text-sm text-gray-300 uppercase tracking-wider">{label}</p>
            </div>
        </div>
    )
}
export default StatsBarItem
