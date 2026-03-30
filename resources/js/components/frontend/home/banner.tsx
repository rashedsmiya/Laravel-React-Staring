import { Link } from '@inertiajs/react';
import { Fragment } from 'react';

export function Banner() {

    return (
        <Fragment>
            <section
                className="relative hero-bg text-white cover-bg bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1613545325278-f24b0cae1224?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZSUyMGludGVyaW9yfGVufDB8fDB8fHww')" }}
            >
                <div className="absolute inset-0 bg-blue-600 opacity-50" aria-hidden="true" />
                <div className="relative z-10 max-w-7xl mx-auto lg:px-6 px-4 py-10 lg:py-32">
                    <div className="max-w-3xl">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-5 fade-up delay-2 font-sf-pro">
                            Transform Your Bathroom in Days, Not Weeks
                        </h1>
                        <p className="text-base sm:text-2xl text-white/80 mb-8 font-inter font-normal">
                            Get a free estimate in 24 hours. Submit photos, choose your options, and track your project online.
                        </p>
                        <div className="flex flex-wrap gap-3 mb-10 fade-up delay-4">
                            <Link
                                className="btn-primary inline-flex items-center justify-center gap-2 w-full sm:w-auto font-inter font-bold text-xl"
                                href="/how-it-works"
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
                            <Link
                                className="btn-outline-white inline-flex items-center justify-center gap-2 w-full sm:w-auto font-inter font-bold text-xl"
                                href="/free-estimate"
                            >
                                How It Works
                            </Link>
                        </div>
                        <div className="flex flex-wrap gap-3 text-sm text-white/75 fade-up delay-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-circle-check-big w-6 h-6 text-white"
                            >
                                <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                                <path d="m9 11 3 3L22 4" />
                            </svg>
                            <span className="flex items-center gap-1.5 text-base font-inter font-normal text-white">
                                Licensed & Insured
                            </span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-circle-check-big w-6 h-6 text-white"
                            >
                                <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                                <path d="m9 11 3 3L22 4" />
                            </svg>
                            <span className="flex items-center gap-1.5 text-base font-inter font-normal text-white">
                                Free Estimates
                            </span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-circle-check-big w-6 h-6 text-white"
                            >
                                <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                                <path d="m9 11 3 3L22 4" />
                            </svg>
                            <span className="flex items-center gap-1.5 text-base font-inter font-normal text-white">
                                Quick Turnaround
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}
