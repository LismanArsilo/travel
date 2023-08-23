import "./Navbar.css";
import { BiLogoMediumOld } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";
import { useState } from "react";

const Navbar = () => {
  // State for navbar
  const [navbar, setNavbar] = useState("menu");

  // Function to show navbar
  const showNavbar = () => {
    setNavbar("menu showNavbar");
  };

  // Function to show navbar
  const removeNavbar = () => {
    setNavbar("menu");
  };
  return (
    <div className="navBar">
      <div className="logoDiv">
        <BiLogoMediumOld className="icon" />
        <span>OU - Trips</span>
      </div>

      <div className={navbar}>
        <ul>
          <li className="navList">Destination</li>
          <li className="navList">About Us</li>
          <li className="navList">Testimonial</li>
          <li className="navList">Gallery</li>
        </ul>
        {/* Icon Remove Navbar */}
        <AiFillCloseCircle
          className="icon closeIcon"
          onClick={() => removeNavbar()}
        />
      </div>
      <button className="signUpBtn btn">Sign Up</button>
      {/* Icon Toggle Navbar */}
      <PiDotsNineBold className="icon menuIcon" onClick={() => showNavbar()} />
    </div>
  );
};

export default Navbar;
