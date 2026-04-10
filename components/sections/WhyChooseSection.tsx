import Container from "../ui/Container";
import WhyChooseItem from "../content/WhyChooseItem";

interface WhyChoose {
    title: string;
    description: string;
}

interface WhyChooseSectionProps {
    heading: string;
    items: WhyChoose[];
}

const WhyChooseSection = ({
    heading,
    items,
}: WhyChooseSectionProps) => {
    return (
        <section className="py-16 lg:py-24 bg-gray-50">
            <Container>
                <h2 className="font-serif text-3xl font-normal text-gray-900 mb-8">
                    {heading}
                </h2>

                <ul className="space-y-8 max-w-3xl">
                    {items.map((item) => (
                        <WhyChooseItem
                            key={item.title}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </ul>
            </Container>
        </section>
    );
};

export default WhyChooseSection;
