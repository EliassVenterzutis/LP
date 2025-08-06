import logo from "../../public/TenderPro_Small_Transperent.svg";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="bg-gray-100">
        <div className="container px-5 py-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <img src={logo} alt="Icon" className="w-12 h-12" />
              <span className="ml-3 text-xl">TenderPro</span>
            </a>

            <p className="mt-2 text-sm text-gray-500">
              Revolutionizing Property Management
            </p>
          </div>
          <div className="flex mt-auto ml-160">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 14"
              className="mr-5"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="m7.172 11.334l2.83 1.935l2.728-1.882l6.115 6.033c-.161.052-.333.08-.512.08H1.667c-.22 0-.43-.043-.623-.12l6.128-6.046ZM20 6.376v9.457c0 .247-.054.481-.15.692l-5.994-5.914L20 6.376ZM0 6.429l6.042 4.132l-5.936 5.858A1.663 1.663 0 0 1 0 15.833V6.43ZM18.333 2.5c.92 0 1.667.746 1.667 1.667v.586L9.998 11.648L0 4.81v-.643C0 3.247.746 2.5 1.667 2.5h16.666Z"
              />
            </svg>
            <p className="mt-auto">info@tenderpro.io</p>
          </div>
          <div className="flex mt-auto ml-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27"
              viewBox="0 0 40 18"
            >
              <path
                fill="currentColor"
                d="M22.386 18.026c-1.548-1.324-3.119-2.126-4.648-.804l-.913.799c-.668.58-1.91 3.29-6.712-2.234c-4.801-5.517-1.944-6.376-1.275-6.951l.918-.8c1.521-1.325.947-2.993-.15-4.71l-.662-1.04C7.842.573 6.642-.552 5.117.771l-.824.72c-.674.491-2.558 2.087-3.015 5.119c-.55 3.638 1.185 7.804 5.16 12.375c3.97 4.573 7.857 6.87 11.539 6.83c3.06-.033 4.908-1.675 5.486-2.272l.827-.721c1.521-1.322.576-2.668-.973-3.995l-.931-.801z"
              />
            </svg>
            <p className="mt-auto">+371 26 111 499</p>
          </div>
          <div className="flex mt-auto ml-10">
            <a className="ml-3 text-gray-200">
              <svg
                fill="PrimaryBlue"
                stroke="PrimaryBlue"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="PrimaryBlue"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  fill="PrimaryBlue"
                />
                <circle
                  cx="4"
                  cy="4"
                  r="2"
                  fill="PrimaryBlue"
                  stroke="PrimaryBlue"
                  strokeWidth="1.5"
                />
              </svg>
            </a>
          </div>

          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4"></div>
          </div>
        </div>
      </div>
      <div className="bg-PrimaryBlue">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-200 text-sm text-center sm:text-left">
            © 2025 TenderPro —
          </p>
          <div className="inline-flex ml-auto">
            <nav className="mr-20">
              <a className="text-gray-200 hover:text-gray-800 mr-10">
                Privacy Policy
              </a>
              <a className="text-gray-200 hover:text-gray-800 mr-10">
                Terms of Service
              </a>
              <a className="text-gray-200 hover:text-gray-800">Cookie Policy</a>
            </nav>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              {/* <a className="text-gray-200">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a> */}
              {/* <a className="ml-3 text-gray-200">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a> */}
              {/* <a className="ml-3 text-gray-200">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a> */}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
