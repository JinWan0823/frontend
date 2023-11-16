import ListSlider from "./Carousel/ListSlider";
import Contents from "./contents/Contents";
import Intro from "./intro/Intro";

import { useRecoilValue } from "recoil";
import { MenuState } from "./State/MenuState";
import { useRef, useEffect } from "react";
import Contact from "./Contact/Contact";
import styled from "styled-components";
import Header from "./commonComponents/Header";
import SkillWrap from "./SkillProgress/SkillWrap";
import List from "./contents/list";

export default function WrapComponents() {
  const menuState = useRecoilValue(MenuState);
  const introSectionRef = useRef<HTMLDivElement | null>(null);
  const sliderSectionRef = useRef<HTMLDivElement | null>(null);
  const contactSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (menuState[0]?.menu === "ABOUT" && introSectionRef.current) {
      introSectionRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (menuState[0]?.menu === "PROJECT" && sliderSectionRef.current) {
      sliderSectionRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (menuState[0]?.menu === "CONTACT" && contactSectionRef.current) {
      contactSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [menuState]);

  return (
    <Wrap>
      <Header />
      <div
        id="introSection"
        ref={introSectionRef}
        style={{ paddingTop: "100px" }}
      >
        <Intro />
        <Contents />
      </div>
      <div id="SkillSection">
        <SkillWrap />
      </div>
      <div id="sliderSection" ref={sliderSectionRef}>
        <List />
        <ListSlider />
      </div>
      <div id="contactSection" ref={contactSectionRef}>
        <Contact />
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background: #b15e30;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background: #f8dccc;
  }

  width: 100%;
  overflow-x: hidden;
`;
