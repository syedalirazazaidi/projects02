import React from "react";
import { reminder } from "./types/type";
interface propsType {
  people: reminder[];
}
export default function List({ people }: propsType) {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age}</p>
            </div>
          </article>
        );
      })}
    </>
  );
}
