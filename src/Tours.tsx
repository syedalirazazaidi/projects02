import React from "react";
import { Tour } from "./Tour";

import { tour } from "./types/type";
interface PropTour {
  tour: tour[];
  removeTour: (id: string) => void;
}

export default function Tours({ tour, removeTour }: PropTour) {
  return (
    <section>
      <div className="title">
        <h2>ours tours</h2>
        <div className="underline"></div>
        <div>
          {tour.map((tour: tour) => {
            return <Tour key={tour.id} tour={tour} removeTour={removeTour} />;
          })}
        </div>
      </div>
    </section>
  );
}
