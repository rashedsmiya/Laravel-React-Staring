import { Link } from '@inertiajs/react';

export function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-linear-to-br from-blue-700 via-blue-600 to-blue-800">
            <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-6 py-14 lg:grid-cols-2 lg:py-20">
                <div className="max-w-xl">
                    <h1 className="font-inter text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Professional Bathroom
                        <br />
                        Remodeling
                    </h1>
                    <p className="mt-6 max-w-md text-base leading-relaxed text-white/85 sm:text-lg">
                        Transform your outdated bathroom into a beautiful, functional space. Get a free estimate in 24 hours with our simple online process.
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                        <Link
                            href="/free-estimate"
                            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-blue-700 shadow-sm transition hover:bg-white/95 active:bg-white sm:w-auto"
                        >
                            Get Free Estimate
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path
                                    fillRule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </Link>
                        <Link
                            href="/how-it-works"
                            className="inline-flex w-full items-center justify-center rounded-md border border-white/60 bg-white/0 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:border-white/80 hover:bg-white/10 active:bg-white/15 sm:w-auto"
                        >
                            How It Works
                        </Link>
                    </div>
                </div>

                <div className="flex justify-center lg:justify-end">
                    <div className="w-full max-w-md rounded-2xl bg-white/10 p-1 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/20">
                        <div className="overflow-hidden rounded-[14px] bg-white">
                            <img
                                alt="Modern luxury bathroom"
                                src="https://drorange.maktechlaravel.cloud/storage/images/remodeling_hero_1774521719_LT1idbQ6.jpg"
                                className="h-[320px] w-full object-cover sm:h-[380px]"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
