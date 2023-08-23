import { AiFillStar } from "react-icons/ai";
import "./Reviews.css";
import People from "../../assets/people.jpg";
import PeopleTravel from "../../assets/people-travel.jpg";

const Reviews = () => {
  return (
    <div className="review section container">
      <div className="secContainer grid">
        <div className="textDiv">
          <span className="redText">FROM OUR CLIENTS</span>
          <h3>Real Travel History From Our Beloved Clients</h3>
          <p>
            By choosing us as their tour agency, customers can expect an
            encriching and enjoyable travel experience, memories that will last
            a lifetime
          </p>
          <span className="stars flex">
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
          </span>

          <div className="clientImages flex">
            <img src={People} alt="People Review" />
            <img src={People} alt="People Review" />
            <img src={People} alt="People Review" />
            <img src={People} alt="People Review" />
            <img src={People} alt="People Review" />
          </div>
        </div>
        <div className="imgDiv">
          <img src={PeopleTravel} alt="Image Review" />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
