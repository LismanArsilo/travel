import "./Questions.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Accordion from "./Accordion";
import { useEffect, useState } from "react";

const Questions = () => {
  const [active, setActive] = useState(
    "How do i choose the right travel destination for me ?"
  );

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="question section container">
      <div className="secHeading">
        <h3 data-aos="fade-up">Frequently Asked Questions</h3>
      </div>
      <div className="secContainer grid">
        {/* We Will Import a Component from a different file*/}
        <div className="accordion grid" data-aos="fade-up">
          <Accordion
            title="How do i choose the right travel destination for me ?"
            desc="Consider your interests, budget, desired experiences, and the type of
          environtment you enjoy. Research destinations or activities you find
          appealing."
            active={active}
            setActive={setActive}
          />
          <Accordion
            title="What are the best times to visit spesific destinations ?"
            desc="Research the climate, weather patterns, and peak tourist seasons of the weather is pleasant, and crowds are fewer, if possible"
            active={active}
            setActive={setActive}
          />
          <Accordion
            title="How can I find budget-friendly travel options and deals ?"
            desc="Look for travel deals, discounts on flights and accommadations, and consider using travel apps or websites that offer competitive prices. Being flexible with your travel dates can also help you find better deals."
            active={active}
            setActive={setActive}
          />

          <Accordion
            title="What essential items should I pack for my adventure ?"
            desc="Pack appropriate clothing, toiletries, travel documents (passport, visa, etc.), essential medications, and any specific gear needed for your adventure (e.g., hiking boots, snorkeling gear)"
            active={active}
            setActive={setActive}
          />
        </div>

        <div className="formQuestion">
          <div className="secHeading">
            <h4 data-aos="fade-down">Do you have any specific question ?</h4>
            <p data-aos="fade-down">
              Please fill the form below and our dedicated team will get intouch
              with you as soon as possible.
            </p>
          </div>
          <form className="form">
            <div className="formContent grid" data-aos="fade-down">
              <input type="email" placeholder="Enter email address" />
              <textarea
                placeholder="Enter your question here"
                id=""
                cols="30"
                rows="10"
              ></textarea>
              <button className="btn">Submit Query</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Questions;
