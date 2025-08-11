import logo from "../../public/TenderPro_Small_Transperent.svg";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="bg-gray-100">
        <div className="container px-5 py-10 mx-auto flex flex-wrap md:flex-nowrap md:items-center lg:items-start flex-col md:flex-row">
          <div className="w-full md:w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <img src={logo} alt="Icon" className="w-12 h-12" />
              <span className="ml-3 text-xl">TenderPro</span>
            </a>
            <p className="mt-2 text-sm text-gray-500">
              Revolutionizing Property Management
            </p>
          </div>

          <div className="flex flex-wrap mt-6 md:mt-auto md:ml-10 gap-6 justify-center md:justify-start w-full md:w-auto">
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 14"
                className="text-gray-600"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="m7.172 11.334 2.83 1.935 2.728-1.882 6.115 6.033c-.161.052-.333.08-.512.08H1.667c-.22 0-.43-.043-.623-.12l6.128-6.046ZM20 6.376v9.457c0 .247-.054.481-.15.692l-5.994-5.914L20 6.376ZM0 6.429l6.042 4.132-5.936 5.858A1.663 1.663 0 010 15.833V6.43ZM18.333 2.5c.92 0 1.667.746 1.667 1.667v.586L9.998 11.648 0 4.81v-.643C0 3.247.746 2.5 1.667 2.5h16.666Z"
                />
              </svg>
              <p className="text-gray-600 text-sm">info@tenderpro.io</p>
            </div>

            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 40 18"
                className="text-gray-600"
                fill="currentColor"
              >
                <path d="M22.386 18.026c-1.548-1.324-3.119-2.126-4.648-.804l-.913.799c-.668.58-1.91 3.29-6.712-2.234-4.801-5.517-1.944-6.376-1.275-6.951l.918-.8c1.521-1.325.947-2.993-.15-4.71l-.662-1.04C7.842.573 6.642-.552 5.117.771l-.824.72c-.674.491-2.558 2.087-3.015 5.119-.55 3.638 1.185 7.804 5.16 12.375 3.97 4.573 7.857 6.87 11.539 6.83 3.06-.033 4.908-1.675 5.486-2.272l.827-.721c1.521-1.322.576-2.668-.973-3.995l-.931-.801z" />
              </svg>
              <p className="text-gray-600 text-sm">+371 26 111 499</p>
            </div>

            <div className="flex items-center">
              <a
                href="https://www.linkedin.com/company/tenderproio/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primaryBlue hover:text-blue-700"
                aria-label="LinkedIn"
              >
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    fill="currentColor"
                  />
                  <circle
                    cx="4"
                    cy="4"
                    r="2"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center"></div>
        </div>
      </div>

      <div className="bg-PrimaryBlue">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row items-center">
          <p className="text-gray-200 text-sm text-center sm:text-left w-full sm:w-auto">
            © 2025 TenderPro — All rights reserved
          </p>

          <nav className="sm:ml-auto flex flex-wrap justify-center sm:justify-start mt-3 sm:mt-0 gap-x-8">
            <a href="#" className="text-gray-200 hover:text-gray-800 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-200 hover:text-gray-800 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-200 hover:text-gray-800 text-sm">
              Cookie Policy
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
