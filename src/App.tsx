import ListSlider from "./Carousel/ListSlider";
import BackCircle from "./commonComponents/BackCircle";
import HeaderTabMenu from "./commonComponents/HeaderTabMenu";
import Contents from "./contents/Contents";
import Intro from "./intro/Intro";

function App() {
  return (
    <>
      <BackCircle />
      <HeaderTabMenu />
      <Intro />
      <Contents />
      <ListSlider />
    </>
  );
}

export default App;
