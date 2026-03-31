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

                <h2 className="text-center text-4xl font-bold mb-10 text-gray-700">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4 text-gray-700">
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
                    <h2 className="mb-2 text-[32px] font-bold text-gray-900 font-inter">Ready to Get Started?</h2>
                    <p className="text-xl text-gray-500 font-inter">Request your free estimate now and receive your detailed quote within 24 hours.</p>
                </div>

            </div>
            <a className="w-[400px] mx-auto bg-white items-center flex justify-center gap-2 px-6 py-3 rounded-md text-lg font-semibold text-gray-700 hover:bg-gray-100 transition-colors duration-200" href="https://drorange.maktechlaravel.cloud/free-estimate">Start Your Bathroom Remodel<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
        </section>
        </Fragment>
    );
}
