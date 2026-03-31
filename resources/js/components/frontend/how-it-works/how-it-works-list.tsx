import { Fragment } from 'react';

export function HowItWorksList() {
    return (
        <Fragment>
            <section className="px-4 py-12">
                <div className="mx-auto max-w-7xl">
                    <div className="space-y-3" id="steps-container">

                        {/* STEP 1 */}
                        <div className="step-card flex cursor-pointer gap-4 rounded border border-gray-200 bg-white px-5 py-5 transition-all duration-200 hover:border-blue-200 hover:shadow-md">
                            <div className="flex flex-shrink-0 flex-col items-center">
                                <div className="z-10 flex h-8 sm:h-12 w-8 sm:w-12 font-inter font-bold text-xl sm:text-2xl items-center justify-center rounded-full bg-blue-600 text-white">1</div>
                            </div>

                            <div className="flex flex-1 flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                <div className="min-w-0 flex-1">
                                    <h3 className="mb-0.5 font-inter text-xl sm:text-2xl text-gray-900">
                                        Submit Your Request Online
                                    </h3>

                                    <p className="mb-3 flex items-center gap-1 text-sm text-gray-400">
                                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                                        </svg>
                                        5 minutes
                                    </p>

                                    <p className="text-lg leading-relaxed text-gray-500">
                                        Fill out our simple online form with your bathroom details. Upload photos and select services.
                                    </p>
                                </div>

                                <div className="mx-auto flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-50 p-2 md:mx-0">
                                    <img
                                        alt="Submit Your Request Online"
                                        className="max-h-full max-w-full object-contain"
                                        src="https://cdn-icons-png.flaticon.com/512/8285/8285279.png"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* 👉 Repeat same pattern for steps 2–7 (just fix class → className and SVG props) */}

                    </div>
                </div>
            </section>
        </Fragment>
    );
}
