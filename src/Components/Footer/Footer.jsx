import "./Footer.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { BiLogoMediumOld } from "react-icons/bi";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="footer section container">
      <div className="secContainer grid footerContainer">
        <div className="logoDiv" data-aos="fade-up">
          <div className="logoFooter">
            <BiLogoMediumOld className="icon" />
            <span>OU - Trips</span>
          </div>
          <div className="socials flex">
            <ImFacebook className="icon" />
            <BsTwitter className="icon" />
            <AiFillInstagram className="icon" />
          </div>
        </div>

        <div className="footerLinks" data-aos="fade-up">
          <span className="linkTittle">Information</span>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">Travel</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </div>

        <div className="footerLinks" data-aos="fade-up">
          <span className="linkTittle">Helpful Links</span>
          <li>
            <a href="#">Destination</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Travel & Condition</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
        </div>

        <div className="footerLinks" data-aos="fade-up">
          <span className="linkTittle">Contact Details</span>
          <span className="phoneTitle">+62852-1235-7622</span>
          <span className="emailTitle">lismanarsilo@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
