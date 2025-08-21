import logo from "../../public/TenderPro_Small_Transperent.svg";

const Footer = () => {
  return (
    <footer id="contact" className="text-gray-600 body-font overflow-x-hidden">
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-8 sm:py-12 flex flex-wrap md:flex-nowrap md:items-center lg:items-start flex-col md:flex-row">
          <div className="w-full md:w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex font-title items-center md:justify-start justify-center text-gray-900">
              <img src={logo} alt="TenderPro Logo" className="w-12 h-12" />
              <span className="ml-3 text-xl font-title">TenderPro</span>
            </a>
            <p className="mt-2 text-base font-base text-gray-500">
              Revolutionizing Property Management
            </p>
          </div>

          <div className="flex flex-wrap mt-6 md:mt-auto md:ml-4 gap-4 justify-center md:justify-start w-full md:w-auto">
            {/* Reduced md:ml-10 to md:ml-4 and gap-6 to gap-4 for tighter spacing */}
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20" // Adjusted viewBox to 20x20 for better alignment
                className="text-gray-600 self-center" // Added self-center for vertical alignment
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="m7.172 11.334 2.83 1.935 2.728-1.882 6.115 6.033c-.161.052-.333.08-.512.08H1.667c-.22 0-.43-.043-.623-.12l6.128-6.046ZM20 6.376v9.457c0 .247-.054.481-.15.692l-5.994-5.914L20 6.376ZM0 6.429l6.042 4.132-5.936 5.858A1.663 1.663 0 010 15.833V6.43ZM18.333 2.5c.92 0 1.667.746 1.667 1.667v.586L9.998 11.648 0 4.81v-.643C0 3.247.746 2.5 1.667 2.5h16.666Z"
                />
              </svg>
              <p className="text-base font-base text-gray-600 self-center">
                info@tenderpro.io
              </p>
            </div>

            <div className="flex items-center">
              <a
                href="https://www.linkedin.com/company/tenderproio/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-PrimaryBlue hover:text-blue-700"
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
        </div>
      </div>

      <div className="bg-PrimaryBlue">
        <div className="container mx-auto px-4 py-4 flex flex-wrap flex-col sm:flex-row items-center">
          <p className="text-base font-base text-gray-200 text-center sm:text-left w-full sm:w-auto">
            © 2025 TenderPro — All rights reserved
          </p>

          <nav className="sm:ml-auto flex flex-wrap justify-center sm:justify-start mt-3 sm:mt-0 gap-x-6">
            <a
              href="#"
              className="text-base font-medium text-gray-200 hover:text-gray-800"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-base font-medium text-gray-200 hover:text-gray-800"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-base font-medium text-gray-200 hover:text-gray-800"
            >
              Cookie Policy
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
