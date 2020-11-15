import React from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import { tour } from "./types/type";
const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = React.useState(true);
  const [tour, setTour] = React.useState<tour[]>([]);
  const removeTour = (id: string) => {
    console.log("removed", id);
    const newTours = tour.filter((tour) => tour.id !== id);
    setTour(newTours);
  };
  const fetchTour = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTour(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  React.useEffect(() => {
    fetchTour();
  }, []);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tour.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tour left</h2>
          <button className="btn" onClick={() => fetchTour()}>
            Refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <div className="App">
      <Tours tour={tour} removeTour={removeTour} />
    </div>
  );
}

export default App;
