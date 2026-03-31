import { Link } from '@inertiajs/react';
import { Fragment } from 'react';

export function WhyCreateWillCardsGrid() {
    return (
        <Fragment>
            <section id="services" className=" ">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 lg:py-20 bg-gray-50">
                    <div className="mb-12 text-center">
                        <h2 className="font-sf-pro font-semibold text-gray-900 text-3xl md:text-4xl xl:text-5xl">Our Services</h2>
                        <p className="mx-auto mt-3 max-w-xl text-gray-500 font-inter font-normal text-xl">From complete renovations to targeted upgrades, we handle every aspect of your bathroom transformation.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="service-card bg-white p-10">
                            <div className="service-icon">
                                <img alt="Complete Bathroom Remodeling" src="https://img.freepik.com/free-vector/colorful-letter-gradient-logo-design_474888-2309.jpg?semt=ais_incoming&w=740&q=80" className='w-10' />
                            </div>
                            <h3 className="mb-2 text-gray-900 font-inter font-normal text-xl">Complete Bathroom Remodeling</h3>
                            <p className="text-gray-500 font-inter font-normal text-base">Full bathroom renovations from floor to ceiling with expert craftsmanship.</p>
                        </div>
                        <div className="service-card bg-white p-10">
                            <div className="service-icon ">
                                <img alt="Tub to Shower Conversion" src="https://img.freepik.com/free-vector/colorful-letter-gradient-logo-design_474888-2309.jpg?semt=ais_incoming&w=740&q=80" className='w-10'  />
                            </div>
                            <h3 className="mb-2 text-gray-900 font-inter font-normal text-xl">Tub to Shower Conversion</h3>
                            <p className="text-gray-500 font-inter font-normal text-base">Transform your old tub into a modern, accessible shower.</p>
                        </div>
                        <div className="service-card bg-white p-10">
                            <div className="service-icon">
                                <img alt="Vanity & Fixture Upgrades" src="https://img.freepik.com/free-vector/colorful-letter-gradient-logo-design_474888-2309.jpg?semt=ais_incoming&w=740&q=80" className='w-10' />
                            </div>
                            <h3 className="mb-2 text-gray-900 font-inter font-normal text-xl">Vanity & Fixture Upgrades</h3>
                            <p className="text-gray-500 font-inter font-normal text-base">New vanities, toilets, sinks, and fixtures to match your style.</p>
                        </div>
                        <div className="service-card bg-white p-10">
                            <div className="service-icon">
                                <img alt="Tile & Flooring Installation" src="https://img.freepik.com/free-vector/colorful-letter-gradient-logo-design_474888-2309.jpg?semt=ais_incoming&w=740&q=80" className='w-10' />
                            </div>
                            <h3 className="mb-2 text-gray-900 font-inter font-normal text-xl">Tile & Flooring Installation</h3>
                            <p className="text-gray-500 font-inter font-normal text-base">Beautiful tile work and durable flooring options.</p>
                        </div>
                    </div>
                    <div className="mt-10 text-center">
                        <Link className="inline-flex items-center gap-2 text-base font-inter font-bold text-blue-600 transition-all hover:gap-3" href="/bathroom">
                            Learn More About Our Services
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}
