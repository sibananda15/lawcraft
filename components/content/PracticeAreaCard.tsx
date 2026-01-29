import Link from "next/link";

interface Props {
    title: string;
    description: string;
    href: string;
}

const PracticeAreaCard = ({ title, description, href }: Props) => {
    return (
        <Link href={href} className="block group">
            <div className="rounded-xl border border-gray-200 bg-white p-6 hover:shadow-md transition group-hover:border-primary-500/50">
                <h3 className="font-serif text-xl font-semibold text-gray-900 group-hover:text-primary-700 transition">
                    {title}
                </h3>

                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    {description}
                </p>
            </div>
        </Link>
    );
};

export default PracticeAreaCard;
