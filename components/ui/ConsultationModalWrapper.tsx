"use client";

import { useState } from "react";
import ConsultationModal from "./ConsultationModal";

export default function ConsultationModalWrapper({
    cityName,
    variant = "gold",
    label,
    className,
}: {
    cityName: string;
    variant?: "gold" | "navy" | "outline";
    label?: string;
    className?: string;
}) {
    const [isOpen, setIsOpen] = useState(false);

    const buttonLabel = label || `Schedule Consultation in ${cityName}`;

    const base = "text-xs tracking-[2px] uppercase rounded transition-colors";
    const styles = {
        gold: `bg-[#B8963E] text-white px-8 py-3.5 hover:bg-[#9a7d34] ${base}`,
        navy: `w-full bg-[#0f1f2e] text-white py-3 hover:bg-[#1a3147] rounded-lg ${base}`,
        outline: `w-full block text-center border border-[#8B6914] text-[#8B6914] py-3 rounded-lg hover:bg-[#8B6914] hover:text-white ${base}`,
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className={className || styles[variant]}
            >
                {buttonLabel}
            </button>
            <ConsultationModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </>
    );
}
