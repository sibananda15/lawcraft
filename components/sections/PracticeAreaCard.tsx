import React from "react";

interface PracticeAreaCardProps {
    title: string;
    description: string;
    href?: string;
    variant?: 'primary' | 'secondary';
}

const PracticeAreaCard = ({
    title,
    description,
    href = "#",
    variant = 'primary',
}: PracticeAreaCardProps) => {
    // Typography logic based on variant
    const titleStyles = variant === 'primary'
        ? "text-2xl font-bold mb-5"
        : "text-xl font-semibold mb-4";

    return (
        <a
            href={href}
            className="group block h-full bg-white py-10 px-8 rounded-lg border border-gray-200 shadow-sm transition-colors duration-300 hover:border-gray-400 hover:shadow-md"
        >
            <div className="flex flex-col h-full relative">
                {/* Visual Anchor - Vertical Accent Line */}
                <div className="absolute left-0 top-1 w-[2px] h-6 bg-gray-200 group-hover:bg-gray-400 transition-colors duration-300 rounded-full" />

                <div className="pl-6 flex flex-col h-full">
                    <h3 className={`font-serif text-gray-900 tracking-tight group-hover:text-primary transition-colors ${titleStyles}`}>
                        {title}
                    </h3>

                    <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow max-w-[95%]">
                        {description}
                    </p>

                    <div className="mt-auto">
                        <div className="h-px bg-gray-100 w-full mb-4 group-hover:bg-gray-200 transition-colors duration-300" />

                        <span className="inline-flex items-center text-sm font-medium text-gray-800 tracking-wide group-hover:text-gray-900 transition-colors">
                            Learn more
                            <svg
                                className="w-4 h-4 ml-2 transition-transform duration-300 ease-out group-hover:translate-x-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </a >
    );
};

export default PracticeAreaCard;
