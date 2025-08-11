import logo from "../../public/TenderPro_Full_Transperent.svg";

function Navbar() {
  return (
    <nav className="text-white bg-PrimaryBlue flex items-center w-full mb-20 overflow-x-hidden">
      <img
        src={logo}
        alt="TenderPro Logo"
        className="w-auto max-w-[200px] h-20 ml-4 sm:ml-10"
      />
    </nav>
  );
}

export default Navbar;
