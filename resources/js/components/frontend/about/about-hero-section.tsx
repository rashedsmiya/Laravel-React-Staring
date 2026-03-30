import { Fragment } from 'react';
export function AboutHeroSection() {
    return (
        <section className="bg-white text-gray-800 antialiased">
            <div className="bg-linear-to-br from-blue-700 via-blue-600 to-blue-800 px-6 py-16 text-center text-white">
                <div className="mx-auto max-w-3xl">
                    <h1 className="fade-up fade-up-1 mb-4 font-sf-pro text-2xl font-semibold lg:text-4xl xl:text-5xl">
                        Crafting spaces that feel like home
                    </h1>

                    <p className="fade-up fade-up-2 font-inter text-xl leading-relaxed text-blue-100">
                        Tailored remodeling guided by your vision and lifestyle.
                    </p>

                    <p className="mt-4 font-inter text-base text-blue-100">
                        From concept to completion, our team delivers detail-driven design and construction you can trust.
                    </p>
                </div>
            </div>
        </section>
    );
}
