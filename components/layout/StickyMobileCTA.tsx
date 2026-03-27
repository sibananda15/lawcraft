interface StickyMobileCTAProps {
    phone: string;
    whatsapp: string;
}

const StickyMobileCTA = ({
    phone,
    whatsapp,
}: StickyMobileCTAProps) => {
    return (
        <div className="fixed bottom-0 left-0 right-0 md:hidden bg-gray-900 text-white z-50">
            <div className="flex">
                <a
                    href="tel:+91 9810053761"
                    className="flex-1 text-center py-4 font-medium border-r border-gray-700"
                >
                    Call
                </a>
                <a
                    href="https://wa.me/919999999999"
                    className="flex-1 text-center py-4 font-medium"
                >
                    WhatsApp
                </a>
            </div>
        </div>
    );
};

export default StickyMobileCTA;
