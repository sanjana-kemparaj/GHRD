import { CheckCircle2 } from 'lucide-react';

interface FeatureListItemProps {
    text: string;
}

const FeatureListItem: React.FC<FeatureListItemProps> = ({ text }) => {
    return (
        <li className="flex items-center space-x-3 bg-white p-3 px-4 rounded-full shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
            <span className="text-gray-700 text-sm md:text-base">{text}</span>
        </li>
    );
};

export default FeatureListItem;