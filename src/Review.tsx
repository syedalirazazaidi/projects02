import React from "react";
import people from "./Data";
import { review } from "./Types/types";
import { FaQuoteRight, FaChevronRight, FaChevronLeft } from "react-icons/fa";
export const Review = () => {
  const [index, setIndex] = React.useState<number>(0);
  const { name, job, image, text }: review = people[index];
  const checkedNumber = (number: number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index: number) => {
      let newIndex = index + 1;
      return checkedNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index: number) => {
      let newIndex = index - 1;
      return checkedNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkedNumber(randomNumber));
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        Suprise me
      </button>
    </article>
  );
};
