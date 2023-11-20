import { useRecoilValue } from "recoil";
import { MenuState } from "./State/MenuState";
import { useRef, useEffect } from "react";
import Contact from "./Contact/Contact";
import styled from "styled-components";
import Header from "./Header/Header";
import SkillWrap from "./SkillProgress/SkillWrap";
import ProjectWrap from "./Project/ProjectWrap";
import Intro from "./intro/Intro";
import Contents from "./contents/Contents";

export default function WrapComponents() {
  const menuState = useRecoilValue(MenuState);
  const introSectionRef = useRef<HTMLDivElement | null>(null);
  const skillSectionRef = useRef<HTMLDivElement | null>(null);
  const sliderSectionRef = useRef<HTMLDivElement | null>(null);
  const contactSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (menuState[0]?.menu === "ABOUT" && introSectionRef.current) {
      introSectionRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (menuState[0]?.menu === "SKILL" && skillSectionRef.current) {
      skillSectionRef.current.scrollIntoView({ behavior: "smooth" });
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
      </div>
      <div id="SkillSection" ref={skillSectionRef}>
        <Contents />
        <SkillWrap />
      </div>
      <div id="sliderSection" ref={sliderSectionRef}>
        <ProjectWrap />
      </div>
      <div
        id="contactSection"
        ref={contactSectionRef}
        style={{ paddingTop: "100px" }}
      >
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
