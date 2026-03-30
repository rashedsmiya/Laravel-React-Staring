import { Fragment } from 'react';

export function LicenseSection() {
    return (
        <Fragment>
        <section className="bg-gray-50 px-4 sm:px-8 py-20 max-w-7xl mx-auto">

            <h2 className="mb-2 text-center text-2xl sm:text-[32px] font-bold font-inter text-gray-900">
                Licenses & Certifications
            </h2>

            <p className="mb-10 text-center font-inter text-xl text-gray-500">
                Fully licensed, bonded, and insured for your protection
            </p>

            <div className="grid gap-5 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm sm:grid-cols-2">

                {/* Item */}
                <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                        <svg
                            className="w-6 h-6 text-green-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.801 10A10 10 0 1 1 17 3.335" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9 11 3 3L22 4" />
                        </svg>
                    </div>

                    <div>
                        <h3 className="text-base font-inter text-gray-900 mb-1">
                            Ohio State Contractor License
                        </h3>
                        <p className="text-sm font-inter text-gray-500">
                            License #12345678
                        </p>
                    </div>
                </div>

                {/* Repeat other items with same fixes */}

            </div>

        </section>
        </Fragment>
    );
}
