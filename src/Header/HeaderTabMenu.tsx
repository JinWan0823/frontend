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
      <FullMenu toggleMenu={TabMenu} TabOn={TabOn} />
    </>
  );
}

const TabAnimate = keyframes`
  30% {
    top:0;
  }
  100% {
    top:0px;
    transform: translateX(-50%) rotate(45deg);
  }
`;
const TabAnimate2 = keyframes`
  30% {
    top:0px;
  }
  100% {
    top:0px;
    transform: translateX(-50%) rotate(-45deg);
  }
`;

const HeaderTab = styled.div`
  width: 54px;
  height: 54px;
  z-index: 9999999999999999999999999;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0px 0px 3px #333;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  .burger {
    width: 32px;
    height: 4px;
    background-color: #b15e30;
    position: relative;
    border-radius: 8px;
    &.on {
      width: 0;
    }
    &::after,
    &::before {
      content: "";
      width: 32px;
      height: 4px;
      border-radius: 8px;
      background-color: #b15e30;
      position: absolute;
      transition: 0.5s ease all;
      transform: translateX(-50%);
      left: 50%;
    }
    &::after {
      top: -10px;
    }
    &::before {
      top: 10px;
    }

    &.on::after {
      animation: ${TabAnimate} 0.5s linear forwards;
    }
    &.on::before {
      animation: ${TabAnimate2} 0.5s linear forwards;
    }
  }
`;
