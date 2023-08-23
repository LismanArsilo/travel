import "./Home.css";
import VideoBackground from "../../assets/video-background.mp4";
import { AiOutlineSwapRight } from "react-icons/ai";

const Home = () => {
  return (
    <div className="home">
      <div className="videoBg">
        <video src={VideoBackground} autoPlay loop muted></video>
      </div>
      <div className="sectionText">
        <h1>Unlock Your Travel Dreams With Us!</h1>
        <p>Discover the most adventurous nature, life is so short for a trip</p>
        <button className="btn flex">
          GET STARTED <AiOutlineSwapRight className="icon" />
        </button>
      </div>
      <div className="popularPlaces">
        <div className="content">
          <h3>Popular Places</h3>
          <div className="images flex"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
