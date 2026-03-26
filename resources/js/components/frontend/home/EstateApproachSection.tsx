import { Fragment } from 'react';

export function EstateApproachSection() {
    return (
        <Fragment>
            <section id="estate-approach" className="max-w-7xl mx-auto lg:py-20 py-10 px-4 sm:px-8 bg-gray-50">
                <div>
                    <div className="text-center mb-12">
                        <h2 className="font-sf-pro font-semibold text-gray-900 text-3xl md:text-4xl xl:text-5xl">
                            What Our Clients Say
                        </h2>
                        <p className="text-gray-600 mt-3 font-inter font-normal text-xl">
                            Join hundreds of satisfied homeowners who transformed their bathrooms with us.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="review-card">
                            <div className="flex gap-0.5 mb-3">
                                <span className="star text-2xl font-bold">★★★★★</span>
                            </div>
                            <p className="text-base font-inter font-normal italic text-gray-700 leading-relaxed mb-4">
                                "The entire process was seamless! From the estimate to the final installation, everything
                                was professional, and the results exceeded our expectations."
                            </p>
                            <div>
                                <p className="font-inter font-bold text-base text-gray-900">Sarah Johnson</p>
                                <p className="font-inter font-normal text-sm text-gray-400">Columbus, OH</p>
                            </div>
                        </div>

                        <div className="review-card">
                            <div className="flex gap-0.5 mb-3">
                                <span className="star text-2xl font-bold">★★★★★</span>
                            </div>
                            <p className="text-base font-inter font-normal italic text-gray-700 leading-relaxed mb-4">
                                "They communicated via text beautifully. The team was punctual, clean, and the results
                                exceeded our expectations and were completed on time."
                            </p>
                            <div>
                                <p className="font-inter font-bold text-base text-gray-900">Michael Chen</p>
                                <p className="font-inter font-normal text-sm text-gray-400">Columbus, OH</p>
                            </div>
                        </div>

                        <div className="review-card">
                            <div className="flex gap-0.5 mb-3">
                                <span className="star text-2xl font-bold">★★★★★</span>
                            </div>
                            <p className="text-base font-inter font-normal italic text-gray-700 leading-relaxed mb-4">
                                "I loved being able to track the progress in real time. The estimates were accurate and
                                there were no surprise costs – just a beautiful new bathroom!"
                            </p>
                            <div>
                                <p className="font-inter font-bold text-base text-gray-900">Emily Rodriguez</p>
                                <p className="font-inter font-normal text-sm text-gray-400">Columbus, OH</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}
