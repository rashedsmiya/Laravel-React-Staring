import { Fragment } from 'react';
export function AboutInformation() {
    return (
        <section className="mx-auto max-w-3xl px-6 py-20">
            <h2 className="mb-10 text-center font-sf-pro text-3xl font-semibold text-gray-900 md:text-4xl xl:text-5xl">
                Our Story
            </h2>

            <div className="space-y-6 font-inter text-base leading-relaxed text-gray-600">
                <p>
                    For over a decade, our team has partnered with homeowners to design and deliver spaces that blend
                    function, comfort, and style. We listen first, plan meticulously, and build with precision.
                </p>

                <p>
                    From kitchens to full-home renovations, we manage every detail so you enjoy a smooth experience and
                    a stunning result.
                </p>

                <p>
                    That's why we developed our streamlined online estimate system. By combining modern technology with
                    traditional craftsmanship, we've created a better way to remodel bathrooms. You can now request an
                    estimate from the comfort of your home, track your project online, and enjoy transparent communication
                    throughout the entire process.
                </p>

                <p>
                    Over the past 15 years, we've completed more than 500 bathroom remodels, earning a reputation for
                    quality work, fair pricing, and exceptional customer service. Our team of licensed professionals
                    treats every bathroom as if it were their own, ensuring the highest standards of workmanship on every
                    project.
                </p>
            </div>
        </section>
    );
}
