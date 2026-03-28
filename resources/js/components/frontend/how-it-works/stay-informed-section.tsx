import { Fragment } from 'react';

export function StayInformedSection() {
    return (
        <Fragment>
        <section className="bg-white py-8 lg:py-16">
            <div className="mx-auto max-w-7xl px-4">
                <div className="mb-10 text-center">
                    <h2 className="mb-2 text-[32px] font-bold text-gray-900 font-inter">
                        Stay Informed Every Step
                    </h2>
                    <p className="text-xl text-gray-500 font-inter">
                        Our platform keeps you updated throughout your bathroom remodel
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {/* Card 1 */}
                    <div className="inform-card !px-2 sm:!px-4">
                        <div className="inform-icon py-2">
                            <img
                                src="https://drorange.maktechlaravel.cloud/storage/default/13.png"
                                alt="Missing Items Reminders"
                            />
                        </div>
                        <h4 className="mb-1 text-xl text-gray-900 font-inter">Missing Items Reminders</h4>
                        <p className="text-base text-gray-500 font-inter">
                            If we need additional photos or information, you'll see it clearly on your tracking page.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="inform-card !px-2 sm:!px-4">
                        <div className="inform-icon py-2">
                            <img
                                src="https://drorange.maktechlaravel.cloud/storage/default/12.png"
                                alt="SMS Updates"
                            />
                        </div>
                        <h4 className="mb-1 text-xl text-gray-900 font-inter">SMS Updates</h4>
                        <p className="text-base text-gray-500 font-inter">
                            Get notifications at key milestones like estimate, scheduling, and completion.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="inform-card !px-2 sm:!px-4">
                        <div className="inform-icon py-2">
                            <img
                                src="https://drorange.maktechlaravel.cloud/storage/default/11.png"
                                alt="No Surprises"
                            />
                        </div>
                        <h4 className="mb-1 text-xl text-gray-900 font-inter">No Surprises</h4>
                        <p className="text-base text-gray-500 font-inter">
                            Transparent pricing with no hidden fees or unexpected charges.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="inform-card !px-2 sm:!px-4">
                        <div className="inform-icon py-2">
                            <img
                                src="https://drorange.maktechlaravel.cloud/storage/default/10.png"
                                alt="Track Your Project Online"
                            />
                        </div>
                        <h4 className="mb-1 text-xl text-gray-900 font-inter">Track Your Project Online</h4>
                        <p className="text-base text-gray-500 font-inter">
                            Check project status anytime using your unique order ID.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        </Fragment>
    );
}
