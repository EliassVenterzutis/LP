const Steps = () => {
  return (
    <section className="bg-gray-100 py-20 sm:py-24 lg:py-32 xl:py-36 overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-title uppercase tracking-widest text-PrimaryGreen">
            How It Works?
          </p>
          <h2 className="mt-6 text-3xl font-title tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Get the Job Done in 3 Simple Steps
          </h2>
        </div>
        <ul className="mx-auto mt-12 grid max-w-full sm:max-w-md grid-cols-1 gap-10 sm:mt-16 lg:mt-20 lg:max-w-5xl lg:grid-cols-3 overflow-x-hidden">
          <li className="group relative flex lg:flex-col overflow-hidden">
            <span
              className="absolute left-4 sm:left-[40px] top-20 h-[calc(100% - 50px)] w-px bg-gray-300 lg:right-0 lg:left-[85px] lg:top-[40px] lg:h-[3px] lg:w-[calc(100% - 90px)]"
              aria-hidden="true"
            ></span>
            <div className="flex-shrink-0 w-20 h-20 bg-PrimaryGreen text-white rounded-full inline-flex items-center justify-center">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="ml-6 lg:ml-0 lg:mt-10">
              <h3 className="text-xl font-title text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                Tender creation
              </h3>
              <h4 className="mt-2 text-base font-base text-gray-700">
                The Property Owner or Manager creates a tender.
              </h4>
            </div>
          </li>
          <li className="group relative flex lg:flex-col overflow-hidden">
            <span
              className="absolute left-4 sm:left-[40px] top-20 h-[calc(100% - 50px)] w-px bg-gray-300 lg:right-0 lg:left-[85px] lg:top-[40px] lg:h-[3px] lg:w-[calc(100% - 90px)]"
              aria-hidden="true"
            ></span>
            <div className="flex-shrink-0 w-20 h-20 bg-PrimaryGreen text-white rounded-full inline-flex items-center justify-center">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="ml-6 lg:ml-0 lg:mt-10">
              <h3 className="text-xl font-title text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                Offer submission
              </h3>
              <h4 className="mt-2 text-base font-base text-gray-700">
                Contractors or Service providers submit their offers.
              </h4>
            </div>
          </li>
          <li className="group relative flex lg:flex-col overflow-hidden">
            <span
              className="absolute left-4 sm:left-[40px] top-20 h-[calc(100% - 50px)] w-px bg-gray-300 lg:right-0 lg:left-[85px] lg:top-[40px] lg:h-[3px] lg:w-[calc(100% - 90px)]"
              aria-hidden="true"
            ></span>
            <div className="flex-shrink-0 w-20 h-20 bg-PrimaryGreen text-white rounded-full inline-flex items-center justify-center">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="ml-6 lg:ml-0 lg:mt-10">
              <h3 className="text-xl font-title text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                Tender awarding
              </h3>
              <h4 className="mt-2 text-base font-base text-gray-700">
                The Property Owner or Manager awards the tender to the most
                promising offer.
              </h4>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Steps;
