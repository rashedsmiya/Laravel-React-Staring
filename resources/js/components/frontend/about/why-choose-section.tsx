import { Fragment } from 'react';

export function WhyChooseSection() {
    return (
        <Fragment>
        <section className="mx-auto max-w-7xl px-4 sm:px-8 py-20">

            <h2 className="mb-3 text-center text-3xl md:text-4xl xl:text-5xl font-sf-pro font-bold text-gray-900">
                Why Choose Us
            </h2>

            <p className="mb-12 text-center font-inter text-xl text-gray-500">
                We're committed to delivering exceptional results on every project
            </p>

            <div className="grid gap-6 md:grid-cols-3">

                {/* Card 1 */}
                <div className="feature-card cursor-default rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm">
                    <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
                        <img
                            alt="Licensed & Insured"
                            className="p-2"
                            src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Phone_icon.png"
                        />
                    </div>
                    <h3 className="mb-3 text-xl font-inter text-gray-900">
                        Licensed & Insured
                    </h3>
                    <p className="text-base font-inter leading-relaxed text-gray-500">
                        Fully licensed contractors with comprehensive insurance coverage.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="feature-card cursor-default rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm">
                    <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
                        <img
                            alt="Quality Craftsmanship"
                            className="p-2"
                            src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Phone_icon.png"
                        />
                    </div>
                    <h3 className="mb-3 text-xl font-inter text-gray-900">
                        Quality Craftsmanship
                    </h3>
                    <p className="text-base font-inter leading-relaxed text-gray-500">
                        We use premium materials and skilled professionals for top-quality results.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="feature-card cursor-default rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm">
                    <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
                        <img
                            alt="Customer Focused"
                            className="p-2"
                            src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Phone_icon.png"
                        />
                    </div>
                    <h3 className="mb-3 text-xl font-inter text-gray-900">
                        Customer-Focused
                    </h3>
                    <p className="text-base font-inter leading-relaxed text-gray-500">
                        We prioritize your needs with clear communication and reliable delivery.
                    </p>
                </div>

            </div>

        </section>
        </Fragment>
    );
}
