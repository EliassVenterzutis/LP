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
    <section
      id="pricing"
      className="py-20 bg-gradient-to-br from-PrimaryWhite to-PrimaryGreen/20 body-font text-gray-800"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <Reveal keyframes={pureFade} duration={800} delay={200} triggerOnce>
            <p className="text-sm font-title uppercase tracking-widest text-PrimaryGreen">
              How much?
            </p>
          </Reveal>
          <Reveal keyframes={slideUp} duration={800} delay={400} triggerOnce>
            <h2 className="mt-2 text-4xl font-title font-extrabold text-gray-900">
              Pricing
            </h2>
          </Reveal>
          <Reveal keyframes={pureFade} duration={800} delay={600} triggerOnce>
            <p className="mt-4 max-w-xl mx-auto text-gray-600 font-base">
              Transparent pricing plans tailored for property owners, managers,
              and service providers. Coming soon!
            </p>
          </Reveal>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Plan Card Template */}
          {[
            {
              title: "Property Owner Plan",
              features: [
                "Tender creation & management",
                "Team roles per property",
                "Contractor access",
                "Contract and document tools",
                "Analytics dashboard",
              ],
            },
            {
              title: "Property Manager Plan",
              features: [
                "Tender creation & management",
                "Team roles per property",
                "Contractor access",
                "Contract and document tools",
                "Analytics dashboard",
              ],
            },
            {
              title: "Service Provider Plan",
              features: [
                "Access to industry-specific tenders",
                "Offer submission tools",
                "Contract generation",
                "Task and invoice management",
              ],
            },
          ].map(({ title, features }, idx) => (
            <Reveal
              key={title}
              keyframes={slideUp}
              duration={800}
              delay={600 + idx * 200}
              triggerOnce
            >
              <article
                className="w-full sm:w-[360px] h-[420px] bg-white/80 rounded-3xl backdrop-blur-xl border border-white shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 flex flex-col"
                aria-label={`Pricing plan for ${title}`}
              >
                <div className="min-h-[120px] flex flex-col">
                  <h3 className="text-2xl font-title font-semibold mb-4 text-gray-900">
                    {title}
                  </h3>
                  <h4 className="text-gray-600 text-base border-b border-gray-300 pb-4 font-medium">
                    Price: Coming Soon
                  </h4>
                </div>
                <ul className="flex-grow space-y-4 mt-4">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-gray-700 font-base leading-relaxed"
                    >
                      <span className="inline-flex items-center justify-center w-5 h-5 mr-3 rounded-full bg-PrimaryGreen text-white flex-shrink-0 shadow-sm">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
