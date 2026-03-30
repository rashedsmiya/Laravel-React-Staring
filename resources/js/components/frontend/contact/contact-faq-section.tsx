import { Fragment } from 'react';

export function ContactFAQSection() {
    return (
        <Fragment>
        <section className="bg-gray-50 text-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 md:mt-5 lg:mt-10 xl:mt-20">
                <div className="lg:py-12 py-4">
                    <h2 className="lg:text-4xl text-2xl font-bold font-sf-pro text-center text-gray-900 mb-10">
                        Common Questions
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* FAQ Item 1 */}
                        <div className="bg-white rounded-2xl shadow-md border border-gray-100 py-8 px-6">
                            <h3 className="font-semibold text-gray-900 mb-1">How quickly will I get a response?</h3>
                            <p className="text-sm text-gray-600">
                                We respond to all inquiries within 24 hours, usually much faster. For urgent matters, please call us directly at (555) 123-4567.
                            </p>
                        </div>

                        {/* FAQ Item 2 */}
                        <div className="bg-white rounded-2xl shadow-md border border-gray-100 py-8 px-6">
                            <h3 className="font-semibold text-gray-900 mb-1">Can I schedule a consultation?</h3>
                            <p className="text-sm text-gray-600">
                                Yes! After submitting an estimate request, we can schedule an in-home consultation if needed. Most estimates can be completed accurately using your photos.
                            </p>
                        </div>

                        {/* FAQ Item 3 */}
                        <div className="bg-white rounded-2xl shadow-md border border-gray-100 py-8 px-6">
                            <h3 className="font-semibold text-gray-900 mb-1">Do you offer emergency services?</h3>
                            <p className="text-sm text-gray-600">
                                For emergency bathroom repairs (plumbing issues, water damage, etc.), please call us immediately at (555) 123-4567. We have emergency response available.
                            </p>
                        </div>

                        {/* FAQ Item 4 */}
                        <div className="bg-white rounded-2xl shadow-md border border-gray-100 py-8 px-6">
                            <h3 className="font-semibold text-gray-900 mb-1">What's your service area?</h3>
                            <p className="text-sm text-gray-600">
                                We serve Columbus, Cleveland, Cincinnati, and surrounding Ohio communities. Contact us to confirm we service your specific location.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </Fragment>
    );
}
