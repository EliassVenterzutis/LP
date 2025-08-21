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

const Features = () => {
  return (
    <section
      id="features"
      className="body-font text-gray-700 bg-gradient-to-br from-PrimaryWhite to-PrimaryGreen/30 py-20"
    >
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="text-center mb-16">
          <Reveal keyframes={pureFade} duration={800} delay={200} triggerOnce>
            <p className="text-sm font-title uppercase tracking-widest text-PrimaryGreen">
              Who is it for?
            </p>
          </Reveal>
          <Reveal keyframes={slideUp} duration={800} delay={400} triggerOnce>
            <h2 className="mt-4 text-4xl font-title font-extrabold text-gray-900 drop-shadow-md sm:text-5xl">
              Because Property Management Deserves Smart Tools
            </h2>
          </Reveal>
          <Reveal keyframes={pureFade} duration={800} delay={600} triggerOnce>
            <p className="mt-4 max-w-3xl mx-auto text-gray-600 font-base leading-relaxed">
              Streamline your tendering process with our intuitive platform
              built for property owners, managers, contractors, and service
              providers.
            </p>
          </Reveal>
        </div>
        <div className="flex flex-wrap -m-6">
          {/* Card 1 */}
          <div className="p-6 w-full md:w-1/3 flex">
            <Reveal keyframes={slideUp} duration={800} delay={700} triggerOnce>
              <article className=" bg-white/80 rounded-3xl backdrop-blur-xl border border-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col flex-grow min-h-[320px]">
                <div className="flex items-center mb-5 space-x-4">
                  <div className="w-14 h-14 bg-PrimaryGreen rounded-full p-2 flex items-center justify-center text-white shadow-md aspect-square">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                    </svg>
                  </div>
                  <h3 className="font-title text-xl font-semibold text-gray-900">
                    Property Owners & Managers
                  </h3>
                </div>
                <p className="text-gray-700 font-base flex-grow">
                  Manage all your properties and tenders in one connected,
                  easy-to-use workspace. Publish offers, sign contracts, and
                  track payments with peace of mind.
                </p>
              </article>
            </Reveal>
          </div>
          {/* Card 2 */}
          <div className="p-6 w-full md:w-1/3 flex">
            <Reveal keyframes={slideUp} duration={800} delay={900} triggerOnce>
              <article className=" bg-white/80 rounded-3xl backdrop-blur-xl border border-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col flex-grow min-h-[320px]">
                <div className="flex items-center mb-5 space-x-4">
                  <div className="w-14 h-14 bg-PrimaryGreen rounded-full p-2 flex items-center justify-center text-white shadow-md aspect-square">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="currentColor"
                        d="m16.154 3.901l-2.492 2.492l1.768 1.768a1.5 1.5 0 0 1 .293 1.707l1.357 1.358l1.939-1.952a6.07 6.07 0 0 1 1.715-5.567l.003-.003a6.062 6.062 0 0 1 5.65-1.53c1.214.296 1.617 1.8.75 2.668L24.88 7.1l1.026 1.026l2.254-2.254c.89-.908 2.384-.435 2.672.745l.001.003a6.061 6.061 0 0 1-7.122 7.371l-1.925 1.94l7.16 7.16a4 4 0 1 1-5.657 5.656l-7.14-7.14l-1.375 1.384a6.07 6.07 0 0 1-1.727 5.512l-.003.003a6.062 6.062 0 0 1-5.651 1.53c-1.213-.297-1.616-1.802-.75-2.668l2.259-2.258l-1.026-1.026l-2.253 2.253c-.89.909-2.385.436-2.673-.745l-.001-.003A6.061 6.061 0 0 1 6.8 18.444a1.23 1.23 0 0 1-.096-.087L.366 12.02a1.251 1.251 0 0 1 0-1.768l.788-.788a3 3 0 0 1 2.52-.852a2 2 0 0 1 .089-.1l7.073-7.073a1.5 1.5 0 0 1 1.219-.43l3.2.338a1.5 1.5 0 0 1 .904 2.555h-.005ZM5.53 9.575l3.894 3.888l4.242-4.243l-1.6-1.6a1.688 1.688 0 0 1-.466-1.626c.15-.606.566-1 1.31-1.704c.306-.29.668-.634 1.09-1.066l-1.918-.2L5.53 9.575Zm3.205 8.518c.466-.008.933.038 1.39.137l1.318-1.327l-1.31-1.31a2.987 2.987 0 0 1-.874 1.975l-.524.525Zm4.118-2.61l2.818-2.838l-1.302-1.302l-2.828 2.828l1.312 1.312Zm4.704 4.704l7.145 7.145a2 2 0 0 0 2.828-2.828l-7.155-7.154l-2.818 2.837ZM2.569 10.879l-.258.258l5.276 5.276l.258-.258a1 1 0 0 0 0-1.414l-3.862-3.862a1 1 0 0 0-1.414 0Zm19.556-5.734a4.078 4.078 0 0 0-1.043 4.136l.179.575L10.699 20.49l-.587-.194a4.058 4.058 0 0 0-4.145.986a4.047 4.047 0 0 0-1.185 3.067l1.971-1.971c.62-.62 1.624-.62 2.244 0l1.61 1.61c.62.62.62 1.623 0 2.244l-1.973 1.973a4.069 4.069 0 0 0 3.021-1.14a4.077 4.077 0 0 0 1.056-4.094l-.17-.57l10.585-10.66l.583.185a4.058 4.058 0 0 0 4.104-.998a4.047 4.047 0 0 0 1.185-3.067l-1.97 1.97a1.586 1.586 0 0 1-2.245 0l-1.61-1.61a1.585 1.585 0 0 1 0-2.243l1.973-1.973a4.069 4.069 0 0 0-3.021 1.139Z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-title text-xl font-semibold text-gray-900">
                    Contractors & Service Providers
                  </h3>
                </div>
                <p className="text-gray-700 font-base flex-grow">
                  Discover tenders specific to your industry, submit structured
                  offers, track progress in real time, and streamline your
                  contract and invoice management.
                </p>
              </article>
            </Reveal>
          </div>
          {/* Card 3 */}
          <div className="p-6 w-full md:w-1/3 flex">
            <Reveal keyframes={slideUp} duration={800} delay={1100} triggerOnce>
              <article className=" bg-white/80 rounded-3xl backdrop-blur-xl border border-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col flex-grow min-h-[320px]">
                <div className="flex items-center mb-5 space-x-4">
                  <div className="w-14 h-14 bg-PrimaryGreen rounded-full p-3 flex items-center justify-center text-white shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-14 h-14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M11.09 21.5a.67.67 0 0 1-.24 0a.83.83 0 0 1-.59-.81v-.11l.9-6.35H6.82a.8.8 0 0 1-.71-.43a.85.85 0 0 1 0-.86l2-3.49l4.1-6.52a.79.79 0 0 1 .92-.35a.83.83 0 0 1 .59.81v.11l-.9 6.35h4.35a.8.8 0 0 1 .71.43a.85.85 0 0 1 0 .86l-2 3.49l-4.1 6.52a.79.79 0 0 1-.69.35Zm-.53-1.21Zm-2.63-7.6h4a.84.84 0 0 1 .83.85v.11l-.59 4.14l2.5-4l1.44-2.48h-4a.84.84 0 0 1-.83-.85v-.11l.59-4.14l-2.5 4Zm-.57 1Zm9.28-3.34Zm-3.2-6.65Z" />
                    </svg>
                  </div>
                  <h3 className="font-title text-xl font-semibold text-gray-900">
                    Why Choose TenderPRO
                  </h3>
                </div>
                <p className="text-gray-700 font-base flex-grow">
                  TenderPRO combines all stages of tendering into a transparent
                  and AI-ready platform, saving you time and reducing admin
                  complexity from publishing to payment.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
