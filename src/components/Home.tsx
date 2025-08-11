interface Props {
  isVisable: boolean;
  setVisability: (visability: boolean) => void;
}

const Home = ({ isVisable, setVisability }: Props) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-center md:text-center mb-16 md:mb-0 items-center text-center">
          <h1 className="font-title sm:text-5xl text-4xl mb-4 text-gray-900 leading-15 max-w-200">
            <b>Manage real estate tenders without chaos</b>
          </h1>
          <p className="mb-8 leading-relaxed text-lg max-w-150 font-base">
            One platform to publish, compare, and close tenders — built for
            property managers and service providers.
          </p>
          <div className="flex justify-center">
            <button
              onClick={() => setVisability(!isVisable)}
              className="flex items-center mt-auto text-PrimaryBlue bg-gray-100 border-0 py-2 px-4 mr-10 focus:outline-none hover:bg-gray-500 rounded text-xl font-title"
            >
              Get early access
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-5"
                viewBox="0 0 20 20"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>

            {/* <button className="flex items-center mt-auto text-PrimaryBlue bg-PrimaryGreen border-0 py-2 px-4 focus:outline-none hover:bg-gray-500 rounded text-xl font-title">
              Schedule a demo
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-5"
                viewBox="0 0 20 20"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button> */}
          </div>
        </div>
        {/* <button className="ml-4 inline-flex text-PrimaryBlue bg-PrimaryGreen border-0 py-2 px-6 focus:outline-none hover:bg-PrimaryBlue hover:text-PrimaryWhite *:rounded text-lg">
          Schedule a demo
        </button> */}
      </div>
    </section>
  );
};

export default Home;
