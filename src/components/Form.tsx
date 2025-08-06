interface Props {
  isVisable: boolean;
}

const Form = ({ isVisable }: Props) => {
  return (
    <>
      {isVisable && (
        <div className="px-5 max-w-1/2 py-24 mx-auto bg-gray-100 text-gray-900 rounded-lg">
          <form>
            <div>
              <span className="uppercase text-sm text-gray-600 font-bold">
                Full Name *
              </span>
              <input
                className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-400"
                type="text"
                placeholder="Enter your Name"
                required
              />
            </div>
            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Email *
              </span>
              <input
                className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-400"
                type="email"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Phone Number
              </span>
              <input
                className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-400"
                type="phone"
                placeholder="Enter your Phone Number including country code"
              />
            </div>
            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Message
              </span>
              <textarea
                className="w-full h-32 bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-400"
                placeholder="Enter your Message"
              ></textarea>
            </div>
            <div className="mt-8">
              <button
                className="uppercase text-sm font-bold tracking-wide bg-PrimaryGreen text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline hover:bg-indigo-700"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Form;
