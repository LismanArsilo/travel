import "./Subscribe.css";
import Aos from "aos";
import "aos/dist/aos.css";
import PeopleSubscribe from "../../assets/people-subscribe.jpg";
import { useEffect } from "react";

const Subscribe = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="subscribe section">
      <div className="secContainer grid container">
        <img src={PeopleSubscribe} alt="" data-aos="fade-up" />
        <div className="textSub">
          <h4 data-aos="fade-down">Best Way To Start Your Journey!</h4>
          <p data-aos="fade-down">
            we offer personalized itineraries tailored to individual preferences
            and interests
          </p>
          <button className="btn" data-aos="fade-down">
            Start Here
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
