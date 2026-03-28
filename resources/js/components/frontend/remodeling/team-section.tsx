import { Fragment } from 'react';

export function TeamSection() {
    return (
        <Fragment>
            <section className="lg:py-20 py-8 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="font-sf-pro font-semibold text-gray-900 text-3xl md:text-4xl xl:text-5xl">
                            Remodeling Options
                        </h2>
                        <p className="mx-auto mt-3 max-w-2xl text-gray-500 font-inter font-normal text-xl mb-16">
                            From minor updates to complete transformations, we handle it all.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="option-card flex gap-4 items-start p-12">
                            <div className="icon-box mt-0.5">
                                <img alt="Tub to Shower Conversion" src="https://drorange.maktechlaravel.cloud/storage/default/2.png" />
                            </div>
                            <div>
                                <h3 className="font-inter font-normal text-gray-900 text-2xl mb-1">
                                    Tub to Shower Conversion
                                </h3>
                                <p className="font-inter font-normal text-gray-500 text-base">
                                    Replace your old bathtub with a modern, accessible walk-in shower. Perfect for improving safety and creating more space.
                                </p>
                            </div>
                        </div>
                        <div className="option-card flex gap-4 items-start p-12">
                            <div className="icon-box mt-0.5">
                                <img alt="Complete Remodel" src="https://drorange.maktechlaravel.cloud/storage/default/5.png" />
                            </div>
                            <div>
                                <h3 className="font-inter font-normal text-gray-900 text-2xl mb-1">
                                    Complete Remodel
                                </h3>
                                <p className="font-inter font-normal text-gray-500 text-base">
                                    Full bathroom transformation including flooring, walls, fixtures, and lighting. Start fresh with a brand new bathroom.
                                </p>
                            </div>
                        </div>
                        <div className="option-card flex gap-4 items-start p-12">
                            <div className="icon-box mt-0.5">
                                <img alt="Vanity & Fixture Upgrade" src="https://drorange.maktechlaravel.cloud/storage/default/3.png" />
                            </div>
                            <div>
                                <h3 className="font-inter font-normal text-gray-900 text-2xl mb-1">
                                    Vanity & Fixture Upgrade
                                </h3>
                                <p className="font-inter font-normal text-gray-500 text-base">
                                    Update your bathroom with new vanities, sinks, toilets, and faucets without a full remodel.
                                </p>
                            </div>
                        </div>
                        <div className="option-card flex gap-4 items-start p-12">
                            <div className="icon-box mt-0.5">
                                <img alt="Tile Installation" src="https://drorange.maktechlaravel.cloud/storage/default/4.png" />
                            </div>
                            <div>
                                <h3 className="font-inter font-normal text-gray-900 text-2xl mb-1">
                                    Tile Installation
                                </h3>
                                <p className="font-inter font-normal text-gray-500 text-base">
                                    Beautiful tile work for floors, shower walls, and backsplashes. Choose from countless styles and patterns.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="w-full max-w-7xl mx-auto bg-blue-600 lg:py-20 py-8 text-white px-4">
                <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="font-sf-pro font-semibold text-white text-3xl md:text-4xl xl:text-5xl mb-2">Why Choose BathPro Remodeling?</h2>
                <p className="mx-auto mt-3 text-white/75 font-inter font-normal text-xl mb-16">Professional service, quality craftsmanship, and customer
                    satisfaction guaranteed.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                    {
                    <div className="text-center px-4">
                    <div className="why-icon p-4 mx-auto inline-block bg-white/10 rounded-full shadow-lg">
                        <img src="https://drorange.maktechlaravel.cloud/storage/default/2.png" alt=""  className='h-6 w-6'/>
                    </div>
                    <h3 className="font-inter font-normal text-white text-2xl mb-2">Tub to Shower Conversion</h3>
                    <p className="font-inter font-normal text-white/70 text-base leading-relaxed">Replace your old bathtub with a modern, accessible walk-in shower. Perfect for improving safety and creating more space.</p>
                    </div>
                    }
                </div>
                </div>
            </section>


            <section className="lg:py-20 py-8 bg-white px-4 text-center">
                <div className="mx-auto max-w-7xl">
                    <h2 className="mb-2 font-sf-pro text-3xl font-semibold text-gray-900 md:text-4xl xl:text-5xl">
                        Ready to Start Your Bathroom Remodel?
                    </h2>
                    <p className="mx-auto mb-16 mt-3 max-w-2xl font-inter text-xl font-normal text-gray-500">
                        Get a free estimate in 24 hours. Simply upload photos, select your options, and receive a detailed
                        quote via text message.
                    </p>
                    <a
                        className="btn-blue-2 mb-8 inline-flex items-center justify-center gap-2"
                        href="https://drorange.maktechlaravel.cloud/free-estimate"
                    >
                        Request Free Estimate
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </a>
                    <div className="flex flex-wrap justify-center gap-6">
                        <span className="check-badge font-inter text-sm font-normal">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-circle-check-big h-4 w-4 text-green-500"
                                aria-hidden
                            >
                                <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                                <path d="m9 11 3 3L22 4" />
                            </svg>
                            No obligation
                        </span>
                        <span className="check-badge font-inter text-sm font-normal">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-circle-check-big h-4 w-4 text-green-500"
                                aria-hidden
                            >
                                <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                                <path d="m9 11 3 3L22 4" />
                            </svg>
                            24-hr response
                        </span>
                        <span className="check-badge font-inter text-sm font-normal">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-circle-check-big h-4 w-4 text-green-500"
                                aria-hidden
                            >
                                <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                                <path d="m9 11 3 3L22 4" />
                            </svg>
                            Licensed professionals
                        </span>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}
