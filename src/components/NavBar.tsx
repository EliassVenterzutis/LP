import { useState } from "react";
import logo from "../../public/TenderPro_Full_Transperent.svg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-PrimaryBlue text-white shadow-md sticky top-0 z-50 w-full">
      <div className="container mx-auto px-6 py-1 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex-shrink-0">
          <img
            src={logo}
            alt="TenderPro Logo"
            className="w-auto max-w-[180px] h-16 sm:h-20"
          />
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex flex-1 justify-center space-x-12 font-title text-lg">
          <a
            href="#home"
            className="hover:text-PrimaryGreen transition-colors duration-300 cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#features"
            className="hover:text-PrimaryGreen transition-colors duration-300 cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            Features
          </a>
          <a
            href="#pricing"
            className="hover:text-PrimaryGreen transition-colors duration-300 cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            Pricing
          </a>
          <a
            href="#contact"
            className="hover:text-PrimaryGreen transition-colors duration-300 cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </div>

        {/* Social Icons Desktop */}
        <div className="hidden md:flex space-x-6 ml-auto items-center">
          <a
            href="https://www.linkedin.com/company/tenderproio/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white hover:text-PrimaryGreen transition-colors duration-300"
          >
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden ml-auto">
          <button
            aria-label={menuOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none p-2 rounded-md hover:bg-PrimaryGreen/20 transition-colors"
          >
            {menuOpen ? (
              // Close Icon
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="md:hidden bg-PrimaryBlue/95 backdrop-blur-sm absolute top-full inset-x-0 shadow-lg z-40">
          <nav className="flex flex-col py-6 space-y-6 font-title text-lg text-white px-6">
            <a
              href="#home"
              className="hover:text-PrimaryGreen transition-colors duration-300 cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#features"
              className="hover:text-PrimaryGreen transition-colors duration-300 cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#pricing"
              className="hover:text-PrimaryGreen transition-colors duration-300 cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="hover:text-PrimaryGreen transition-colors duration-300 cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
            <div className="pt-4 border-t border-white/20">
              <a
                href="https://www.linkedin.com/company/tenderproio/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex items-center space-x-2 text-white hover:text-PrimaryGreen transition-colors duration-300"
              >
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
