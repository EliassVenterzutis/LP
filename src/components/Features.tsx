const Features = () => {
  return (
    <section className="text-gray-600 body-font overflow-x-hidden">
      <div className="container px-8 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <p className="text-sm font-title uppercase tracking-widest text-PrimaryGreen">
            Who is it for?
          </p>
          <h2 className="mt-6 text-3xl font-title tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Because Property Management Deserves Better Tools
          </h2>
        </div>
        <div className="flex flex-wrap -m-4 overflow-x-hidden">
          <div className="p-4 w-full md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-PrimaryGreen text-white flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className="text-gray-900 text-lg font-title">
                  Property Owners & Managers
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base font-base">
                  All your properties. Every tender. One streamlined workspace.
                  From creating and comparing offers to signing contracts and
                  managing payments — everything happens in one place, clearly
                  and securely.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 w-full md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-PrimaryGreen text-white flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h2 className="text-gray-900 text-lg font-title">
                  Contractors & Service Providers
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base font-base">
                  Find relevant tenders. Win more work. Get paid faster.
                  Discover tenders in your field, make structured offers, track
                  decisions in real time, and manage contracts and invoices in
                  one place — without email chaos.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 w-full md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-PrimaryGreen text-white flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <h2 className="text-gray-900 text-lg font-title">
                  Why Choose TenderPRO
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base font-base">
                  Because tendering shouldn’t feel like a second job. TenderPRO
                  saves hours of admin by centralizing the full workflow — from
                  publishing tenders to payments — in one transparent platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
