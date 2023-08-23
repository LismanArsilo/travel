import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";

// eslint-disable-next-line react/prop-types
const Accordion = ({ title, desc, active, setActive }) => {
  return (
    <div className="accordionContainer">
      <span
        className={(active === title ? "activeTitle" : "") + " accorTitle flex"}
      >
        {title}
        <span onClick={() => setActive(title)}>
          {active === title ? (
            <BsArrowDownCircle className="icon" />
          ) : (
            <BsArrowUpCircle className="icon" />
          )}
        </span>
      </span>
      <p className={(active === title ? "show" : "") + " accorDescription"}>
        {desc}
      </p>
    </div>
  );
};

export default Accordion;
