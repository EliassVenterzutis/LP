import logo from "../../public/TenderPro_Full_Transperent.svg";

function Navbar() {
  return (
    <nav className="text-white bg-PrimaryBlue flex items-center w-full mb-20">
      <img src={logo} alt="Icon" className="w-auto max-w-[200px] h-20 ml-10" />
      {/* <div className="flex-1">
        <p className="text-lg max-w-150 place-self-center-safe">
          Revolutionizing Property Management
        </p>
      </div> */}
    </nav>
  );
}

export default Navbar;
