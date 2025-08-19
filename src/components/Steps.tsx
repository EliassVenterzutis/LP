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

const Steps = () => {
  return (
    <section className="bg-gray-100 py-20 sm:py-24 lg:py-32 xl:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Reveal keyframes={pureFade} duration={800} delay={200} triggerOnce>
            <p className="text-sm font-title uppercase tracking-widest text-PrimaryGreen">
              How It Works?
            </p>
          </Reveal>
          <Reveal keyframes={slideUp} duration={800} delay={400} triggerOnce>
            <h2 className="mt-6 text-3xl font-title tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Get the Job Done in 3 Steps
            </h2>
          </Reveal>
        </div>
        <ul className="mx-auto mt-12 grid max-w-full sm:max-w-md grid-cols-1 gap-10 sm:mt-16 lg:mt-20 lg:max-w-5xl lg:grid-cols-3">
          <li className="group relative flex lg:flex-col">
            <span
              className="absolute left-4 sm:left-[40px] top-20 h-[calc(100% - 50px)] w-px bg-gray-300 lg:right-0 lg:left-[85px] lg:top-[40px] lg:h-[3px] lg:w-[calc(100% - 90px)]"
              aria-hidden="true"
            ></span>
            <Reveal keyframes={slideUp} duration={800} delay={600} triggerOnce>
              <div className="flex-shrink-0 w-20 h-20 bg-PrimaryGreen text-white rounded-full inline-flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="currentColor"
                    d="M23.906 3.969A4.097 4.097 0 0 0 21 5.188L5.187 21l-.062.313l-1.094 5.5l-.312 1.468l1.469-.312l5.5-1.094l.312-.063L26.813 11a4.075 4.075 0 0 0 0-5.813a4.097 4.097 0 0 0-2.907-1.218zm0 1.906c.504 0 1.012.23 1.5.719c.973.972.973 2.027 0 3l-.718.687l-2.97-2.969l.688-.718c.489-.489.996-.719 1.5-.719zm-3.593 2.844l2.968 2.969L11.188 23.78a6.813 6.813 0 0 0-2.97-2.968zM6.938 22.438a4.734 4.734 0 0 1 2.625 2.625l-3.282.656z"
                  />
                </svg>
              </div>
            </Reveal>
            <Reveal keyframes={slideUp} duration={800} delay={800} triggerOnce>
              <div className="ml-6 lg:ml-0 lg:mt-10">
                <h3 className="text-xl font-title text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                  Create a Tender
                </h3>
                <h4 className="mt-2 text-base font-base text-gray-700">
                  Property owners or managers launch a new tender with clear
                  requirements and deadlines.
                </h4>
              </div>
            </Reveal>
          </li>
          <li className="group relative flex lg:flex-col">
            <span
              className="absolute left-4 sm:left-[40px] top-20 h-[calc(100% - 50px)] w-px bg-gray-300 lg:right-0 lg:left-[85px] lg:top-[40px] lg:h-[3px] lg:w-[calc(100% - 90px)]"
              aria-hidden="true"
            ></span>
            <Reveal keyframes={slideUp} duration={800} delay={1000} triggerOnce>
              <div className="flex-shrink-0 w-20 h-20 bg-PrimaryGreen text-white rounded-full inline-flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m9.474 16l9.181 3.284a1.1 1.1 0 0 0 1.462-.887L21.99 4.239c.114-.862-.779-1.505-1.567-1.13L2.624 11.605c-.88.42-.814 1.69.106 2.017l2.44.868l1.33.467M13 17.26l-1.99 3.326c-.65.808-1.959.351-1.959-.683V17.24a2 2 0 0 1 .53-1.356l3.871-4.2"
                  />
                </svg>
              </div>
            </Reveal>
            <Reveal keyframes={slideUp} duration={800} delay={1200} triggerOnce>
              <div className="ml-6 lg:ml-0 lg:mt-10">
                <h3 className="text-xl font-title text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                  Submit Offers
                </h3>
                <h4 className="mt-2 text-base font-base text-gray-700">
                  Contractors and service providers respond with structured,
                  comparable proposals.
                </h4>
              </div>
            </Reveal>
          </li>
          <li className="group relative flex lg:flex-col">
            <span
              className="absolute left-4 sm:left-[40px] top-20 h-[calc(100% - 50px)] w-px bg-gray-300 lg:right-0 lg:left-[85px] lg:top-[40px] lg:h-[3px] lg:w-[calc(100% - 90px)]"
              aria-hidden="true"
            ></span>
            <Reveal keyframes={slideUp} duration={800} delay={1400} triggerOnce>
              <div className="flex-shrink-0 w-20 h-20 bg-PrimaryGreen text-white rounded-full inline-flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M21 4h-3V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v1H3a1 1 0 0 0-1 1v3a4 4 0 0 0 4 4h1.54A6 6 0 0 0 11 13.91V16h-1a3 3 0 0 0-3 3v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-2a3 3 0 0 0-3-3h-1v-2.09A6 6 0 0 0 16.46 12H18a4 4 0 0 0 4-4V5a1 1 0 0 0-1-1ZM6 10a2 2 0 0 1-2-2V6h2v2a6 6 0 0 0 .35 2Zm8 8a1 1 0 0 1 1 1v1H9v-1a1 1 0 0 1 1-1Zm2-10a4 4 0 0 1-8 0V4h8Zm4 0a2 2 0 0 1-2 2h-.35A6 6 0 0 0 18 8V6h2Z"
                  />
                </svg>
              </div>
            </Reveal>
            <Reveal keyframes={slideUp} duration={800} delay={1600} triggerOnce>
              <div className="ml-6 lg:ml-0 lg:mt-10">
                <h3 className="text-xl font-title text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                  Award the Tender
                </h3>
                <h4 className="mt-2 text-base font-base text-gray-700">
                  Choose the best offer with confidence, then move straight to
                  contract and project delivery.
                </h4>
              </div>
            </Reveal>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Steps;
