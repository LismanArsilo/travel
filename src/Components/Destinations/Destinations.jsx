import "./Destinations.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { MdLocationPin } from "react-icons/md";
import { BsFillCreditCardFill } from "react-icons/bs";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { TiLocation } from "react-icons/ti";
import imageDest1 from "../../assets/image-desc.jpg";
import imageDest2 from "../../assets/image-desc.jpg";
import imageDest3 from "../../assets/image-desc.jpg";
import imageDest4 from "../../assets/image-desc.jpg";
import imageDest5 from "../../assets/image-desc.jpg";
import imageDest6 from "../../assets/image-desc.jpg";
import imageDest7 from "../../assets/image-desc.jpg";
import imageDest8 from "../../assets/image-desc.jpg";
import { useEffect } from "react";

const destinations = [
  {
    id: 1,
    img: imageDest1,
    name: "Seychelles Island",
    location: "London",
    rating: 4.1,
  },
  {
    id: 2,
    img: imageDest2,
    name: "Seychelles Londan",
    location: "England",
    rating: 4.2,
  },
  {
    id: 3,
    img: imageDest3,
    name: "Seychelles Lake",
    location: "Indian Ocean",
    rating: 4.3,
  },
  {
    id: 4,
    img: imageDest4,
    name: "Seychelles Mountain",
    location: "United States of America",
    rating: 4.7,
  },
  {
    id: 5,
    img: imageDest5,
    name: "Seychelles",
    location: "Indonesian",
    rating: 4.6,
  },
  {
    id: 6,
    img: imageDest6,
    name: "Seychelles Desert",
    location: "Thailand",
    rating: 4.9,
  },
  {
    id: 7,
    img: imageDest7,
    name: "Cappadocia",
    location: "Turkey",
    rating: 4.4,
  },
  {
    id: 8,
    img: imageDest8,
    name: "Amazon River",
    location: "Japan",
    rating: 4.7,
  },
];

const Destinations = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="destination section ">
      <div className="secContainer container">
        <div className="secTitle">
          <span className="redText" data-aos="fade-up">
            EXPLORE NOW
          </span>
          <h3 data-aos="fade-up">Find Your Dream Destination</h3>
          <p data-aos="fade-up">
            Fill in the fields below to find the best spot for your next tour.
          </p>
        </div>
        <div className="searchField grid">
          <div className="inputField flex" data-aos="fade-up">
            <MdLocationPin className="icon" />
            <input type="text" placeholder="Location" />
          </div>
          <div className="inputField flex" data-aos="fade-up">
            <BsFillCreditCardFill className="icon" />
            <input type="text" placeholder="Budget" />
          </div>
          <div className="inputField flex" data-aos="fade-up">
            <BsFillCalendarDateFill className="icon" />
            <input type="text" placeholder="Date" />
          </div>
          <button className="btn flex" data-aos="fade-up">
            <BiSearchAlt className="icon" /> Search
          </button>
        </div>

        <div className="secMenu">
          <ul className="flex" data-aos="fade-up">
            <li className="active">All</li>
            <li>Recomended</li>
            <li>Beach</li>
            <li>Park</li>
            <li>Nature</li>
            <li>Montain</li>
          </ul>
        </div>

        <div className="destinationContainer grid">
          {destinations.map((dest) => {
            return (
              <div className="singleDestination" key={dest.id}>
                <div className="imgDiv" data-aos="fade-up">
                  <img src={dest.img} alt="Destination Image" />
                  <div className="descInfo flex">
                    <div className="descText">
                      <span className="descName">{dest.name}</span>
                      <p className="flex">
                        <TiLocation className="icon" />
                        {dest.location}
                      </p>
                    </div>
                    <span className="descRating">{dest.rating}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
