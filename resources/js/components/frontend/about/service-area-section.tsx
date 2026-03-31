import { Fragment } from "react/jsx-runtime";

export function ServiceAreaSection() {
    return (
        <Fragment>
        <section className="mx-auto container px-4 sm:px-8 py-20 text-center">

            <div className="mb-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center">
                    <svg
                        className="h-10 w-10 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                </div>
            </div>

            <h2 className="mb-2 text-2xl sm:text-[32px] font-bold font-inter text-gray-900">
                Service Area
            </h2>

            <p className="mb-10 font-inter text-xl text-gray-500">
                Proudly serving homeowners throughout Ohio
            </p>

            <div className="rounded-2xl bg-blue-50 p-8">

                <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-base text-gray-900 font-inter">

                    {[
                        "Columbus, OH",
                        "Cleveland, OH",
                        "Cincinnati, OH",
                        "Akron, OH",
                        "Dayton, OH",
                        "Toledo, OH",
                        "And surrounding areas"
                    ].map((city, i) => (
                        <div key={i} className="flex items-center gap-2">

                            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100">
                                <svg
                                    className="w-5 h-5 text-blue-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.801 10A10 10 0 1 1 17 3.335" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m9 11 3 3L22 4" />
                                </svg>
                            </div>

                            {city}
                        </div>
                    ))}

                </div>

                <a
                    href="https://drorange.maktechlaravel.cloud/contact"
                    className="text-base font-inter text-gray-400"
                >
                    Don't see your city? Contact us to check if we service your area.
                </a>

            </div>

        </section>
        </Fragment>
    );
}
