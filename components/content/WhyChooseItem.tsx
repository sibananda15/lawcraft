interface WhyChooseItemProps {
    title: string;
    description: string;
}

const WhyChooseItem = ({ title, description }: WhyChooseItemProps) => {
    return (
        <li>
            <h4 className="font-semibold text-gray-900">
                {title}
            </h4>
            <p className="text-sm text-gray-600 mt-1">
                {description}
            </p>
        </li>
    );
};

export default WhyChooseItem;
