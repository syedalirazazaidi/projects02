import React from "react";
import List from "./List";
import data from "./data";
import { reminder } from "./types/type";
function App() {
  const [people, setPeople] = React.useState<reminder[]>(data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthday today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;
