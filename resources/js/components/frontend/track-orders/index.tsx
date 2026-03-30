import { Fragment } from 'react';

export function TrackOrdersSection() {
    return (
        <Fragment>
        <main className="flex-1 flex flex-col">
            <div className="py-12 flex items-center justify-center font-sans lg:px-4 md:px-2 px-2">
                <div className="w-full max-w-7xl bg-gray-50 rounded lg:px-8 lg:py-16 px-2 py-6">
                    {/* Header */}
                    <div className="flex flex-col items-center mb-10">
                        <div className="mb-4">
                            <svg
                                className="w-14 h-14 text-blue-600"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M21 8l-9-5-9 5v8l9 5 9-5V8z"></path>
                                <path d="M3 8l9 5 9-5"></path>
                                <path d="M12 13v8"></path>
                                <path d="M7.5 5.5l9 5"></path>
                            </svg>
                        </div>
                        <h1 className="lg:text-5xl text-3xl font-semibold text-gray-900 mb-2 font-sf-pro">
                            Track Your Order
                        </h1>
                        <p className="text-gray-500 text-2xl font-normal font-inter text-center">
                            Enter your order ID and contact information to view your project status
                        </p>
                    </div>

                    {/* Form */}
                    <div className="bg-white rounded-xl shadow-md border border-gray-200 px-8 py-8 max-w-3xl mx-auto">
                        <form>
                            <div className="mb-5">
                                <label className="block text-base font-normal font-inter text-gray-800 mb-1">
                                    Order ID <span className="text-red-500">*</span>
                                </label>
                                <input
                                    placeholder="BR12345678"
                                    className="w-full border rounded-lg px-4 py-3 text-gray-700 text-sm transition-all border-gray-300 focus:ring-blue-500 focus:ring-2 focus:outline-none"
                                    type="text"
                                    value=""
                                    name="orderId"
                                />
                                <p className="text-xs text-gray-400 mt-1.5">
                                    You received this in your confirmation email/SMS
                                </p>
                            </div>

                            <div className="mb-6">
                                <label className="block text-base font-normal font-inter text-gray-800 mb-1">
                                    Phone Number or Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    placeholder="(555) 123-4567 or email@example.com"
                                    className="w-full border rounded-lg px-4 py-3 text-gray-700 text-sm transition-all border-gray-300 focus:ring-blue-500 focus:ring-2 focus:outline-none"
                                    type="text"
                                    value=""
                                    name="contact"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-3.5 rounded-lg text-sm transition-colors flex items-center justify-center gap-2"
                            >
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    viewBox="0 0 24 24"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="M21 21l-4.35-4.35"></path>
                                </svg>
                                <span>Track Order</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
        </Fragment>
    );
}
