import React from "react";
import Link from "next/link";
import Container from "./Container";

interface BreadcrumbProps {
    currentPageTitle: string;
    backLinkTitle?: string;
    backLinkHref?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
    currentPageTitle,
    backLinkTitle = "Practice Areas",
    backLinkHref = "/#practice-areas"
}) => {
    return (
        <section className="bg-white border-b border-gray-100 py-3 sticky top-20 z-40 md:static md:top-auto md:z-auto">
            <Container>
                {/* Mobile Back Button (Visible < 768px) */}
                <div className="block md:hidden">
                    <Link
                        href={backLinkHref}
                        className="text-gray-600 hover:text-gray-900 font-medium text-sm flex items-center transition-colors"
                        aria-label={`Go back to ${backLinkTitle}`}
                    >
                        <span className="mr-1" aria-hidden="true">&larr;</span>
                        Back to {backLinkTitle}
                    </Link>
                </div>

                {/* Desktop Breadcrumbs (Visible >= 768px) */}
                <nav aria-label="breadcrumb" className="hidden md:block">
                    <ol className="flex items-center space-x-2 text-sm text-gray-500">
                        <li>
                            <Link href="/" className="hover:text-gray-900 transition-colors">
                                Home
                            </Link>
                        </li>
                        <li className="text-gray-300 pointer-events-none select-none" aria-hidden="true">
                            &gt;
                        </li>
                        <li>
                            <Link href="/#practice-areas" className="hover:text-gray-900 transition-colors">
                                Practice Areas
                            </Link>
                        </li>
                        <li className="text-gray-300 pointer-events-none select-none" aria-hidden="true">
                            &gt;
                        </li>
                        <li className="text-gray-700 font-medium truncate max-w-[200px] sm:max-w-none" aria-current="page">
                            {currentPageTitle}
                        </li>
                    </ol>
                </nav>
            </Container>
        </section>
    );
};

export default Breadcrumb;
