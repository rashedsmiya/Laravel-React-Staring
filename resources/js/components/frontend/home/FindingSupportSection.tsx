import { Link } from '@inertiajs/react';
import { Fragment } from 'react';

export function FindingSupportSection() {
    return (
        <Fragment>
            <section id="estimate" className="text-white text-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 bg-[#092abdd2] lg:py-20 py-10">
                    <h2 className="font-sf-pro font-semibold text-3xl md:text-4xl xl:text-5xl mb-4">
                        Ready to Transform Your Bathroom?
                    </h2>
                    <p className="mx-auto max-w-3xl text-[#DBEAFE] font-inter font-normal text-base sm:text-2xl mb-8 leading-relaxed">
                        Get a free, no-obligation estimate in 24 hours. Upload photos, select your options, and we'll send you a detailed quote via text.
                    </p>
                    <Link
                        href="/free-estimate"
                        className="inline-flex items-center gap-2 mx-auto text-blue-600 font-semibold bg-white px-6 py-3 rounded-lg shadow-lg hover:bg-opacity-90 transition-all duration-300 ease-in-out"
                    >
                        Get Your Free Estimate
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Link>
                </div>
            </section>
        </Fragment>
    );
}
