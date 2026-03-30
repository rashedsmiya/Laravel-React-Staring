import { Fragment } from 'react';

export function LPASupportSection() {
    return (
        <Fragment>
        <section className="max-w-7xl mx-auto bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white text-center py-16 px-4 sm:px-8">
            <div className="max-w-xl mx-auto">
                <h2 className="text-2xl sm:text-[32px] font-bold font-inter text-white">
                    Ready to Work With Us?
                </h2>
                <p className="text-blue-100 mb-8 font-inter font-normal text-xl">
                    Join hundreds of satisfied homeowners who have transformed their bathrooms with BathPro Remodeling.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                        href="https://drorange.maktechlaravel.cloud/free-estimate"
                        className="bg-white text-blue-700 font-inter font-bold px-7 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm shadow-lg"
                    >
                        Get Free Estimate
                    </a>
                    <a
                        href="https://drorange.maktechlaravel.cloud/contact"
                        className="border-2 border-white text-white font-inter font-bold px-7 py-3 rounded-xl hover:bg-white hover:text-blue-700 transition-colors text-sm"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
        </Fragment>
    );
}
