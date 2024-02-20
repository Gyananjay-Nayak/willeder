import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/header";
import Carousel from "./components/carousel";
import BodySection from "./components/bodySection";
import DetailSection from "./components/detailSection";
import LogoSection from "./components/logoSection";

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <BodySection />
      <DetailSection />
      <LogoSection />
    </div>
  );
}

export default App;
