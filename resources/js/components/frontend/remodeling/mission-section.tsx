import { Fragment } from 'react';

export function MissionSection() {
  return (
    <Fragment>
      <section className="lg:py-20 py-10 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4">

          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="font-sf-pro font-semibold text-gray-900 text-3xl md:text-4xl xl:text-5xl">
              What's Included
            </h2>
            <p className="mx-auto mt-3 text-gray-500 font-inter font-normal text-xl mb-16">
              Everything you need for a complete, stress-free bathroom transformation.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

            {/* Card 1 */}
            <div className="service-card">
              <div className="icon-box p-2 rounded-full!">
                <CheckIcon />
              </div>
              <h3 className="font-inter text-gray-900 text-xl mb-1">
                Design Consultation
              </h3>
              <p className="font-inter text-gray-500 text-base">
                Work with our experts to plan your perfect bathroom.
              </p>
            </div>

            {/* Card 2 */}
            <div className="service-card">
              <div className="icon-box p-2 rounded-full!">
                <CheckIcon />
              </div>
              <h3 className="font-inter text-gray-900 text-xl mb-1">
                Quality Materials
              </h3>
              <p className="font-inter text-gray-500 text-base">
                Choose from premium fixtures, tiles, and finishes.
              </p>
            </div>

            {/* Card 3 */}
            <div className="service-card">
              <div className="icon-box p-2 rounded-full!">
                <CheckIcon />
              </div>
              <h3 className="font-inter text-gray-900 text-xl mb-1">
                Expert Installation
              </h3>
              <p className="font-inter text-gray-500 text-base">
                Licensed professionals handle every detail.
              </p>
            </div>

            {/* Card 4 */}
            <div className="service-card">
              <div className="icon-box p-2 rounded-full!">
                <CheckIcon />
              </div>
              <h3 className="font-inter text-gray-900 text-xl mb-1">
                Project Management
              </h3>
              <p className="font-inter text-gray-500 text-base">
                Track progress online and stay informed.
              </p>
            </div>

            {/* Card 5 */}
            <div className="service-card">
              <div className="icon-box p-2 rounded-full!">
                <CheckIcon />
              </div>
              <h3 className="font-inter text-gray-900 text-xl mb-1">
                Clean-Up Service
              </h3>
              <p className="font-inter text-gray-500 text-base">
                We leave your home clean and ready to enjoy.
              </p>
            </div>

            {/* Card 6 */}
            <div className="service-card">
              <div className="icon-box p-2 rounded-full!">
                <CheckIcon />
              </div>
              <h3 className="font-inter text-gray-900 text-xl mb-1">
                10-Year Warranty
              </h3>
              <p className="font-inter text-gray-500 text-base">
                Peace of mind with our comprehensive warranty.
              </p>
            </div>

          </div>
        </div>
      </section>
    </Fragment>
  );
}

/* Reusable Icon Component */
function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-10 h-10 text-blue-500"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.801 10A10 10 0 1 1 17 3.335" />
      <path d="m9 11 3 3L22 4" />
    </svg>
  );
}
