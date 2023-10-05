import styled, { keyframes } from "styled-components";
import { useState } from "react";
import FullMenu from "./FullMenu";

export default function HeaderTabMenu() {
  const [TabMenu, setTebMenu] = useState(false);
  const TabOn = () => {
    setTebMenu(!TabMenu);
  };

  return (
    <>
      <HeaderTab onClick={TabOn} className={"burger-wrap"}>
        <div className={"burger".concat(TabMenu ? " on" : "")}></div>
      </HeaderTab>
      <FullMenu toggleMenu={TabMenu} />
    </>
  );
}

const TabAnimate = keyframes`
  30% {
    top:0;
  }
  100% {
    top:0px;
    width:30px;
    height:2px;
    transform: translateX(-50%) rotate(45deg);
  }
`;
const TabAnimate2 = keyframes`
  30% {
    top:0px;
  }
  100% {
    top:0px;
    width:30px;
    height:2px;
    transform: translateX(-50%) rotate(-45deg);
  }
`;

const HeaderTab = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  width: 60px;
  height: 60px;
  z-index: 9999999999;
  cursor: pointer;
  border-radius: 50%;
  background-color: #000;
  box-shadow: 0px 0px 3px 2px #868686;
  display: flex;
  align-items: center;
  justify-content: center;

  .burger {
    width: 6px;
    height: 6px;
    background-color: #fff;
    border-radius: 50%;
    position: relative;
    &.on {
      width: 0;
      height: 0;
    }
    &::after,
    &::before {
      content: "";
      width: 6px;
      height: 6px;
      background-color: #fff;
      border-radius: 50%;
      position: absolute;
      transition: 0.5s ease all;
      transform: translateX(-50%);
      left: 50%;
    }
    &::after {
      top: -14px;
    }
    &::before {
      top: 14px;
    }

    &.on::after {
      animation: ${TabAnimate} 0.5s linear forwards;
    }
    &.on::before {
      animation: ${TabAnimate2} 0.5s linear forwards;
    }
  }
`;
