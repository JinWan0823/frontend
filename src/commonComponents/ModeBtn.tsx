import styled from "styled-components";
import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { DarkState, LightState, persistModeState } from "../State/MenuState";
import Stars from "../assets/icon/stars.png";
import Clouds from "../assets/icon/clouds.png";

export default function ModeBtn() {
  const [Theme, setTheme] = useRecoilState(persistModeState);
  const currentMode = useRecoilValue(persistModeState);
  const [Btn, setBtn] = useState(currentMode.mode);

  const lightMode = useRecoilValue(LightState);
  const darkMode = useRecoilValue(DarkState);

  const toggleTheme = () => {
    console.log(currentMode);
    if (Theme === lightMode) {
      setTheme(darkMode);
      setBtn("dark");
    } else {
      setTheme(lightMode);
      setBtn("light");
    }
  };

  return (
    <Mode
      onClick={toggleTheme}
      className={`${Btn === "dark" ? "darkmode" : "lightmode"}`}
    >
      <div className={`circle`}></div>
    </Mode>
  );
}

const Mode = styled.div`
  width: 80px;
  height: 40px;
  z-index: 9999999999;
  border-radius: 40px;
  cursor: pointer;
  position: relative;
  border: 1px solid #ddd;

  &.darkmode {
    background-color: #1f2533;
    box-shadow: 0px 7.8px 11.7px 0px #171b24 inset;
    background-image: url(${Stars});
  }
  &.lightmode {
    background-color: #a2d1fd;
    box-shadow: 0px 7.8px 11.7px 0px #72bbff inset;
    background-image: url(${Clouds});
  }

  .circle {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: 0.5s ease all;
  }
  &.darkmode .circle {
    background-color: #dee5f3;
    right: 1px;
    &::after {
      content: "";
      position: absolute;
      top: 2px;
      left: 0px;
      width: 30px;
      height: 30px;
      background-color: #1f2533c9;
      border-radius: 50%;
    }
  }
  &.lightmode .circle {
    background-color: #ffc187f5;
    left: 1px;
  }
`;
