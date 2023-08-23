import "./Portifolio.css";
import IconHealty from "../../assets/icon-healty.png";
import IconHealty1 from "../../assets/icon-healty.png";
import IconHealty2 from "../../assets/icon-healty.png";
import imagePeople from "../../assets/image-people.jpg";

const icons = [
  {
    id: 1,
    png: IconHealty,
    title: "Safety and Support",
    desc: "Our top priority is the safety and well-being of our clients. We maintain high safety standards and have emergency support available during the trip.",
  },
  {
    id: 2,
    png: IconHealty1,
    title: "Safety and Support",
    desc: "Wheter it's domestic tour or an international adventure we cover a wide range of destinations to cater to different innterests and preferences.",
  },
  {
    id: 3,
    png: IconHealty2,
    title: "24/7 Customer",
    desc: "Our dedicated customer support team is available round the clock to address any queries or concerns before, during, and after the trip.",
  },
];

const Portifolio = () => {
  return (
    <div className="portifolio section container">
      <div className="secContainer">
        <div className="leftContent">
          <div className="secHeading">
            <h3>Why Should You choose Us</h3>
            <p>
              We have extensive knowledge and experience in the travel industry
            </p>
          </div>

          <div className="grid">
            {icons.map((icon) => {
              return (
                <div className="singlePortifolio flex" key={icon.id}>
                  <div className="iconDiv">
                    <img src={icon.png} alt={icon.title} />
                  </div>
                  <div className="infoPort">
                    <h4>{icon.title}</h4>
                    <p>{icon.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="rightContent">
          <img src={imagePeople} alt="Image People" />
        </div>
      </div>
    </div>
  );
};

export default Portifolio;
