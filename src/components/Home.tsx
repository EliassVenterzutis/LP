interface Props {
  isVisable: boolean;
  setVisability: (visability: boolean) => void;
}

const Home = ({ isVisable, setVisability }: Props) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-10 flex-col md:flex-row items-center justify-center">
        <div className="lg:flex-grow md:w-1/2 flex flex-col items-center text-center mb-16 md:mb-0">
          <h1 className="font-title sm:text-5xl text-4xl mb-4 text-gray-900 font-bold max-w-2xl">
            Manage real estate tenders without chaos
          </h1>
          <p className="mb-8 leading-relaxed text-lg max-w-xl font-base">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
