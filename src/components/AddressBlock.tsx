// src/components/AddressBlock.tsx
interface AddressBlock {
    title?: string;
    lines: string[];
}

export default function AddressBlock({ title, lines }: AddressBlock) {
    return (
        <div>
            {title && <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>}
            {lines.map((line, index) => (
                <p key={index} className="text-gray-700 leading-relaxed">
                    {line}
                </p>
            ))}
        </div>
    );
}