import { tour } from "./types/type";
import React from "react";
interface PropTour {
  tour: tour;
  removeTour: (id: string) => void;
}
export const Tour = ({ tour, removeTour }: PropTour) => {
  const [readMore, setReadMore] = React.useState(true);
  const { id, image, info, price, name } = tour;

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <div className="tour-price">${price}</div>
        </div>
        <p>
          {" "}
          {readMore ? info : `${info.substring(0, 150)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? `show Less` : `read More`}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          {" "}
          Not Interested
        </button>
      </footer>
    </article>
  );
};
