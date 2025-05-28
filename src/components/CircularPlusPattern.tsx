"use client";

import { Plus } from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';

interface CircularPlusPatternProps {
    count?: number; // Number of plus symbols
    radius?: number; // Radius of the circle in pixels
    plusSize?: number; // Size of each plus symbol (for Lucide icon or font-size)
    plusColor?: string; // Tailwind text color class, e.g., 'text-red-500'
    plusStrokeWidth?: number; // Stroke width for Lucide icon
    centerOffset?: { x: number; y: number }; // Offset for the circle's center from top-left of container
    className?: string; // Additional styling for the container
    randomRotation?: boolean; // Whether to apply random rotation to each plus
    startAngleOffset?: number; // In degrees, to rotate the starting point of the circle
}

export default function CircularPlusPattern({
    count = 12,
    radius = 100,
    plusSize = 12,
    plusColor = 'text-red-500',
    plusStrokeWidth = 2.5,
    centerOffset = { x: 0, y: 0 },
    className = '',
    randomRotation = true,
    startAngleOffset = 0,
}: CircularPlusPatternProps) {
    const [pluses, setPluses] = useState<Array<{
        id: number;
        style: { left: string; top: string; transform: string };
        rotationClass: string;
    }>>([]);

    // Memoize centerOffset to prevent infinite re-renders
    const memoizedCenterOffset = useMemo(() => centerOffset, [centerOffset.x, centerOffset.y]);

    useEffect(() => {
        const generatedPluses = [];
        for (let i = 0; i < count; i++) {
            const angle = (i / count) * 2 * Math.PI + (startAngleOffset * Math.PI / 180) - (Math.PI / 2);
            const x = radius + radius * Math.cos(angle) + memoizedCenterOffset.x;
            const y = radius + radius * Math.sin(angle) + memoizedCenterOffset.y;

            const rotationClass = randomRotation 
                ? `rotate-[${Math.floor(Math.random() * 90 - 45)}deg]` 
                : '';

            generatedPluses.push({
                id: i,
                style: {
                    left: `${x}px`,
                    top: `${y}px`,
                    transform: `translate(-50%, -50%)`,
                },
                rotationClass,
            });
        }
        setPluses(generatedPluses);
    }, [count, radius, memoizedCenterOffset, randomRotation, startAngleOffset]); // Fixed dependencies

    return (
        <div
            className={`${className}`}
            style={{
                width: `${2 * radius + plusSize}px`,
                height: `${2 * radius + plusSize}px`,
            }}
        >
            {pluses.map((p) => (
                <div key={p.id} className={`absolute ${p.rotationClass}`} style={p.style}>
                    <Plus
                        size={plusSize}
                        className={`${plusColor}`}
                        strokeWidth={plusStrokeWidth}
                    />
                </div>
            ))}
        </div>
    );
}