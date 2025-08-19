import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";

const pureFade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Pricing = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <Reveal keyframes={pureFade} duration={800} delay={200} triggerOnce>
            <p className="text-sm font-title uppercase tracking-widest text-PrimaryGreen">
              How much?
            </p>
          </Reveal>
          <Reveal keyframes={slideUp} duration={800} delay={400} triggerOnce>
            <h2 className="mt-6 text-3xl font-title tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Pricing
            </h2>
          </Reveal>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
            <Reveal keyframes={slideUp} duration={800} delay={600} triggerOnce>
              <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative min-h-[400px]">
                <h2 className="text-3xl font-title tracking-tight text-gray-900 sm:text-2xl lg:text-3xl">
                  Property Owner Plan
                </h2>
                <h3 className="text-xl font-medium mb-2 pb-4 text-gray-900 border-b border-gray-200 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                  Price: Coming Soon
                </h3>
                <div className="flex-grow">
                  <p className="flex items-center text-gray-600 mb-2 text-base font-base">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-PrimaryGreen text-white rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Tender creation & management
                  </p>
                  <p className="flex items-center text-gray-600 mb-2 text-base font-base">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-PrimaryGreen text-white rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Team roles per property
                  </p>
                  <p className="flex items-center text-gray-600 mb-2 text-base font-base">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-PrimaryGreen text-white rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Contractor access
                  </p>
                  <p className="flex items-center text-gray-600 mb-2 text-base font-base">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-PrimaryGreen text-white rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Contract and document tools
                  </p>
                  <p className="flex items-center text-gray-600 mb-6 text-base font-base">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-PrimaryGreen text-white rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Analytics dashboard
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
            <Reveal keyframes={slideUp} duration={800} delay={800} triggerOnce>
              <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative min-h-[400px]">
                <h2 className="text-3xl font-title tracking-tight text-gray-900 sm:text-2xl lg:text-3xl">
                  Property Manager Plan
                </h2>
                <h3 className="text-xl font-medium mb-2 pb-4 text-gray-900 border-b border-gray-200 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                  Price: Coming Soon
                </h3>
                <div className="flex-grow">
                  <p className="flex items-center text-gray-600 mb-2 text-base font-base">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-PrimaryGreen text-white rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Tender creation & management
                  </p>
                  <p className="flex items-center text-gray-600 mb-2 text-base font-base">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-PrimaryGreen text-white rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Team roles per property
                  </p>
                  <p className="flex items-center text-gray-600 mb-2 text-base font-base">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-PrimaryGreen text-white rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Contractor access
                  </p>
                  <p className="flex items-center text-gray-600 mb-2 text-base font-base">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-PrimaryGreen text-white rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Contract and document tools
                  </p>
                  <p className="flex items-center text-gray-600 mb-6 text-base font-base">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-PrimaryGreen text-white rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Analytics dashboard
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
            <Reveal keyframes={slideUp} duration={800} delay={1000} triggerOnce>
              <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative min-h-[400px]">
                <h2 className="text-3xl font-title tracking-tight text-gray-900 sm:text-2xl lg:text-3xl">
                  Service Provider Plan
                </h2>
                <h3 className="text-xl font-medium mb-2 pb-4 text-gray-900 border-b border-gray-200 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                  Price: Coming Soon
                </h3>
                <div className="flex-grow">
                  <p className="flex items-center text-gray-600 mb-2 text-base font-base">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-PrimaryGreen text-white rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Access to industry-specific tenders
                  </p>
                  <p className="flex items-center text-gray-600 mb-2 text-base font-base">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-PrimaryGreen text-white rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Offer submission tools
                  </p>
                  <p className="flex items-center text-gray-600 mb-2 text-base font-base">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-PrimaryGreen text-white rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Contract generation
                  </p>
                  <p className="flex items-center text-gray-600 mb-6 text-base font-base">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-PrimaryGreen text-white rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Task and invoice management
                  </p>
                  <div className="flex-grow"></div>{" "}
                  {/* Spacer to match height */}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
