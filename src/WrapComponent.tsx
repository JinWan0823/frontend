import ListSlider from "./Carousel/ListSlider";
import BackCircle from "./commonComponents/BackCircle";
import HeaderTabMenu from "./commonComponents/HeaderTabMenu";
import Contents from "./contents/Contents";
import Intro from "./intro/Intro";

import { useRecoilValue } from "recoil";
import { MenuState } from "./State/MenuState";

export default function WrapComponents() {
  const menuState = useRecoilValue(MenuState);
  console.log(menuState);

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
