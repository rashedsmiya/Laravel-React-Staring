import { Fragment, useState } from "react";

export function PreferToTalkSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "How accurate are the online estimates?",
            answer: "Our estimates are very accurate based on your photos..."
        },
        {
            question: "What if I need to add or change something?",
            answer: "You can request changes anytime before approval..."
        }
    ];

    return (
        <Fragment>
        <section className="bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4">

                <h2 className="text-center text-4xl font-bold mb-10">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white p-5 rounded border cursor-pointer"
                            onClick={() =>
                                setOpenIndex(index === openIndex ? null : index)
                            }
                        >
                            <div className="flex justify-between items-center">
                                <h3>{faq.question}</h3>
                                <span>{openIndex === index ? "-" : "+"}</span>
                            </div>

                            {openIndex === index && (
                                <p className="mt-3 text-gray-500">
                                    {faq.answer}
                                </p>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section>


        <section className="bg-blue-600 py-8 lg:py-16">
            <div className="mx-auto max-w-7xl px-4">
                <div className="mb-10 text-center">
                    <h2 className="mb-2 text-[32px] font-bold text-gray-900 font-inter">Prefer to Talk?</h2>
                    <p className="text-xl text-gray-500 font-inter">We're here to help you every step of the way</p>
                </div>
            </div>
        </section>
        </Fragment>
    );
}
