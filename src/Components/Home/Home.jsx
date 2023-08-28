import "./Home.css";
import { useEffect } from "react";
import VideoBackground from "../../assets/video-background.mp4";
import PopularImages from "../../assets/popular.jpg";
import { AiOutlineSwapRight } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="home">
      <div className="videoBg">
        <video src={VideoBackground} autoPlay loop muted></video>
      </div>
      <div className="sectionText">
        <h1 data-aos="fade-up">Unlock Your Travel Dreams With Us!</h1>
        <p data-aos="fade-up">
          Discover the most adventurous nature, life is so short for a trip
        </p>
        <button className="btn flex" data-aos="fade-up">
          GET STARTED <AiOutlineSwapRight className="icon" />
        </button>
      </div>
      <div className="popularPlaces">
        <div className="content">
          <h3 data-aos="fade-up">Popular Places</h3>
          <div className="images flex" data-aos="fade-up">
            <img src={PopularImages} alt="Popular Images" />
            <img src={PopularImages} alt="Popular Images" />
            <img src={PopularImages} alt="Popular Images" />
            <img src={PopularImages} alt="Popular Images" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
