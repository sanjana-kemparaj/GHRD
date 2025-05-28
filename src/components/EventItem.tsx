// src/components/EventItem.tsx
import { CheckCircle2 } from 'lucide-react'; // Using lucide-react for the check icon

interface EventItemProps {
    description: string;
}

export default function EventItem({ description }: EventItemProps) {
    return (
        <li className="flex items-start space-x-3 py-2">
            <CheckCircle2 className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
            <span className="text-gray-700 text-sm sm:text-base">{description}</span>
        </li>
    );
}