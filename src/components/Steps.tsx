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
    <section className="bg-gray-100 py-20 sm:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal keyframes={pureFade} duration={800} delay={200} triggerOnce>
            <p className="text-sm font-title uppercase tracking-widest text-PrimaryGreen">
              How It Works?
            </p>
          </Reveal>
          <Reveal keyframes={slideUp} duration={800} delay={400} triggerOnce>
            <h2 className="mt-4 text-4xl font-title font-extrabold text-gray-900 sm:text-5xl">
              Get the Job Done in 3 Steps
            </h2>
          </Reveal>
        </div>
        <ul className="grid gap-10 sm:grid-cols-1 md:grid-cols-3">
          {/* Step 1 */}
          <Reveal keyframes={slideUp} duration={800} delay={600} triggerOnce>
            <li className=" bg-white/80 rounded-3xl backdrop-blur-xl border border-white shadow-md p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
              <div className="bg-PrimaryGreen rounded-full w-20 h-20 flex items-center justify-center mb-6 drop-shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 text-white"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                >
                  <path d="M23.906 3.969A4.097 4.097 0 0 0 21 5.188L5.187 21l-.062.313-1.094 5.5-.312 1.468 1.469-.312 5.5-1.094.312-.063L26.813 11a4.075 4.075 0 0 0 0-5.813 4.097 4.097 0 0 0-2.907-1.218zM23.906 5.875c.504 0 1.012.23 1.5.719.973.972.973 2.027 0 3l-.718.687-2.97-2.969.688-.718c.489-.489.996-.719 1.5-.719zM20.313 8.719l2.968 2.969L11.188 23.78a6.813 6.813 0 0 0-2.97-2.968zM6.938 22.438a4.734 4.734 0 0 1 2.625 2.625l-3.282.656z"></path>
                </svg>
              </div>
              <h3 className="font-title text-2xl font-semibold mb-2 text-gray-900">
                Create a Tender
              </h3>
              <p className="text-gray-700 font-base">
                Property owners or managers launch tenders with clear deadlines
                and requirements.
              </p>
            </li>
          </Reveal>
          {/* Step 2 */}
          <Reveal keyframes={slideUp} duration={800} delay={800} triggerOnce>
            <li className=" bg-white/80 rounded-3xl backdrop-blur-xl border border-white shadow-md p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
              <div className="bg-PrimaryGreen rounded-full w-20 h-20 flex items-center justify-center mb-6 drop-shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9.474 16 9.181 3.284a1.1 1.1 0 0 0 1.462-.887L21.99 4.239c.114-.862-.779-1.505-1.567-1.13L2.624 11.605c-.88.42-.814 1.69.106 2.017l2.44.868 1.33.467M13 17.26l-1.99 3.326c-.65.808-1.959.351-1.959-.683V17.24a2 2 0 0 1 .53-1.356l3.871-4.2"></path>
                </svg>
              </div>
              <h3 className="font-title text-2xl font-semibold mb-2 text-gray-900">
                Submit Offers
              </h3>
              <p className="text-gray-700 font-base">
                Contractors respond with structured, comparable proposals for
                evaluation.
              </p>
            </li>
          </Reveal>
          {/* Step 3 */}
          <Reveal keyframes={slideUp} duration={800} delay={1000} triggerOnce>
            <li className=" bg-white/80 rounded-3xl backdrop-blur-xl border border-white shadow-md p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
              <div className="bg-PrimaryGreen rounded-full w-20 h-20 flex items-center justify-center mb-6 drop-shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M21 4h-3V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v1H3a1 1 0 0 0-1 1v3a4 4 0 0 0 4 4h1.54A6 6 0 0 0 11 13.91V16h-1a3 3 0 0 0-3 3v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-2a3 3 0 0 0-3-3h-1v-2.09A6 6 0 0 0 16.46 12H18a4 4 0 0 0 4-4V5a1 1 0 0 0-1-1ZM6 10a2 2 0 0 1-2-2V6h2v2a6 6 0 0 0 .35 2Zm8 8a1 1 0 0 1 1 1v1H9v-1a1 1 0 0 1 1-1Zm2-10a4 4 0 0 1-8 0V4h8Zm4 0a2 2 0 0 1-2 2h-.35A6 6 0 0 0 18 8V6h2Z"></path>
                </svg>
              </div>
              <h3 className="font-title text-2xl font-semibold mb-2 text-gray-900">
                Award the Tender
              </h3>
              <p className="text-gray-700 font-base">
                Select the best offer confidently and move directly to contract
                and project delivery.
              </p>
            </li>
          </Reveal>
        </ul>
      </div>
    </section>
  );
};

export default Steps;
