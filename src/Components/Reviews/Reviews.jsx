import "./Reviews.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { AiFillStar } from "react-icons/ai";
import People from "../../assets/people.jpg";
import PeopleTravel from "../../assets/people-travel.jpg";
import { useEffect } from "react";

const Reviews = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div className="review section container">
      <div className="secContainer grid">
        <div className="textDiv">
          <span className="redText" data-aos="fade-up">
            FROM OUR CLIENTS
          </span>
          <h3 data-aos="fade-up">
            Real Travel History From Our Beloved Clients
          </h3>
          <p data-aos="fade-up">
            By choosing us as their tour agency, customers can expect an
            encriching and enjoyable travel experience, memories that will last
            a lifetime
          </p>
          <span className="stars flex" data-aos="fade-up">
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
          </span>

          <div className="clientImages flex">
            <img src={People} alt="People Review" data-aos="fade-up" />
            <img src={People} alt="People Review" data-aos="fade-up" />
            <img src={People} alt="People Review" data-aos="fade-up" />
            <img src={People} alt="People Review" data-aos="fade-up" />
            <img src={People} alt="People Review" data-aos="fade-up" />
          </div>
        </div>
        <div className="imgDiv">
          <img src={PeopleTravel} alt="Image Review" data-aos="fade-down" />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
