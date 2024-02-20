import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/header";
import Carousel from "./components/carousel";
import BodySection from "./components/bodySection";
import DetailSection from "./components/detailSection";

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <BodySection />
      <DetailSection />
    </div>
  );
}

export default App;
