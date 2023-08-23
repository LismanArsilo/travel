import "./Subscribe.css";
import PeopleSubscribe from "../../assets/people-subscribe.jpg";

const Subscribe = () => {
  return (
    <div className="subscribe section container">
      <div className="secContainer grid">
        <img src={PeopleSubscribe} alt="" />
        <div className="textSub">
          <h4>Best Way To Start Your Journey!</h4>
          <p>
            we offer personalized itineraries tailored to individual preferences
            and interests
          </p>
          <button className="btn">Start Here</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
