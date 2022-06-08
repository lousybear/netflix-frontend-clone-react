import "./App.css";
import Row from "./Row";
import request from "./request";

function App() {
  return (
    <div className="App">
      <Row title="Netflix Originals" fetchUrl={request.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
    </div>
  );
}

export default App;
