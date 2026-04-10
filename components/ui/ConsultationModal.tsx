"use client";

import React, { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";

interface ConsultationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const MATTER_OPTIONS = [
    "Civil / Property",
    "Criminal Defence",
    "Family / Divorce",
    "Corporate & Business",
    "Labour & Employment",
    "Other",
];

const inputClass =
    "w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-[#0f1f2e] placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#B8963E] focus:border-[#B8963E] transition";

const labelClass =
    "block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5";

const TRUST_POINTS = [
    "Direct advocate access",
    "Fully confidential",
    "Response within 2 hours",
];

const ConsultationModal = ({ isOpen, onClose }: ConsultationModalProps) => {
    const [state, handleSubmit] = useForm("xpqogdyy");

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const minDate = tomorrow.toISOString().split("T")[0];

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-md"
            onClick={(e) => {
                if (e.target === e.currentTarget) onClose();
            }}
        >
            <div className="max-w-3xl w-full mx-4 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]">
                {/* Left panel — navy branding (hidden on mobile) */}
                <div className="hidden md:flex md:w-[35%] bg-[#0f1f2e] p-8 flex-col">
                    <div className="w-8 h-px bg-[#B8963E] mb-6" />
                    <p className="font-serif text-2xl text-white font-normal leading-none">
                        Lawcraft
                    </p>
                    <p className="text-xs tracking-[4px] text-[#B8963E] mt-1 uppercase">
                        Advocates
                    </p>

                    <div className="w-full h-px bg-white/10 my-8" />

                    <div className="space-y-4">
                        {TRUST_POINTS.map((point) => (
                            <div key={point} className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#B8963E] shrink-0" />
                                <span className="text-white/80 text-sm">{point}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-auto pt-8">
                        <p className="text-[10px] tracking-widest text-white/40 uppercase">
                            Or Call Directly
                        </p>
                        <a
                            href="tel:+919810053761"
                            className="font-serif text-white text-lg mt-2 block hover:text-[#B8963E] transition-colors"
                        >
                            +91 9810053761
                        </a>
                    </div>
                </div>

                {/* Right panel — form */}
                <div className="w-full md:w-[65%] bg-[#F7F4EF] p-8 relative overflow-y-auto">
                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-[#0f1f2e] transition-colors z-10"
                        aria-label="Close modal"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {state.succeeded ? (
                        /* ── Success state ── */
                        <div className="flex flex-col items-center py-16 text-center">
                            <div className="w-10 h-10 rounded-full border-2 border-[#B8963E] flex items-center justify-center">
                                <svg className="w-5 h-5 text-[#B8963E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <p className="font-serif text-2xl text-[#0f1f2e] mt-4">
                                Booking Request Sent!
                            </p>
                            <div className="w-8 h-px bg-[#B8963E] mx-auto mt-3 mb-4" />
                            <p className="text-sm text-gray-500">
                                Our team will confirm your appointment shortly via phone or email.
                            </p>
                            <button
                                onClick={onClose}
                                className="border border-[#0f1f2e] text-[#0f1f2e] px-8 py-2.5 rounded-lg text-xs tracking-widest uppercase mt-6 hover:bg-[#0f1f2e] hover:text-white transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    ) : (
                        /* ── Form ── */
                        <>
                            <h2 className="font-serif text-2xl text-[#0f1f2e] font-normal">
                                Book a Consultation
                            </h2>
                            <div className="w-10 h-px bg-[#B8963E] mt-3 mb-6" />

                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Row 1: Name + Phone */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className={labelClass}>
                                            Full Name <span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            name="name"
                                            required
                                            placeholder="Rahul Sharma"
                                            className={inputClass}
                                        />
                                        <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-xs mt-1" />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className={labelClass}>
                                            Phone <span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            id="phone"
                                            type="tel"
                                            name="phone"
                                            required
                                            placeholder="+91 98765 43210"
                                            className={inputClass}
                                        />
                                        <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-red-500 text-xs mt-1" />
                                    </div>
                                </div>

                                {/* Row 2: Email (full width) */}
                                <div>
                                    <label htmlFor="email" className={labelClass}>
                                        Email <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="rahul@email.com"
                                        className={inputClass}
                                    />
                                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
                                </div>

                                {/* Row 3: Matter Type + Preferred Date */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="legalMatterType" className={labelClass}>
                                            Legal Matter
                                        </label>
                                        <select
                                            id="legalMatterType"
                                            name="legalMatterType"
                                            className={inputClass}
                                            defaultValue=""
                                        >
                                            <option value="" disabled>
                                                Select type
                                            </option>
                                            {MATTER_OPTIONS.map((opt) => (
                                                <option key={opt} value={opt}>
                                                    {opt}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="preferredDate" className={labelClass}>
                                            Preferred Date
                                        </label>
                                        <input
                                            id="preferredDate"
                                            type="date"
                                            name="preferredDate"
                                            min={minDate}
                                            className={inputClass}
                                        />
                                    </div>
                                </div>

                                {/* Row 4: Description */}
                                <div>
                                    <label htmlFor="description" className={labelClass}>
                                        Brief Description
                                    </label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        rows={2}
                                        placeholder="Briefly describe your legal matter (optional)"
                                        className={inputClass + " resize-none"}
                                    />
                                </div>

                                {/* Error fallback */}
                                {state.errors && Object.keys(state.errors).length > 0 && !state.submitting && (
                                    <p className="text-xs text-red-600">
                                        Something went wrong. Please call{" "}
                                        <a href="tel:+919810053761" className="font-semibold underline">
                                            +91 9810053761
                                        </a>
                                    </p>
                                )}

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={state.submitting}
                                    className="w-full flex items-center justify-center gap-2 bg-[#0f1f2e] text-white text-xs tracking-[2px] uppercase py-3.5 rounded-lg hover:bg-[#1a3147] transition-colors disabled:opacity-60 disabled:cursor-not-allowed mt-6"
                                >
                                    {state.submitting ? (
                                        <>
                                            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                            </svg>
                                            SENDING...
                                        </>
                                    ) : (
                                        "Confirm Booking"
                                    )}
                                </button>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ConsultationModal;
