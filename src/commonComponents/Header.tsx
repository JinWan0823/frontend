import styled from "styled-components";
import { MenuState, MenuType, persistModeState } from "../State/MenuState";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { GlobalStyleProps } from "../GlobalStyle";
import LinkBtn from "./LinkBtn";

const menuItems: MenuType[] = [
  { menu: "ABOUT" },
  { menu: "PROJECT" },
  { menu: "CONTACT" },
];

export default function Header() {
  const setMenuState = useSetRecoilState(MenuState);
  const [activeSection, setActiveSection] = useState("");
  const [scrollOn, setScrollOn] = useState(false);
  const currentMode = useRecoilValue(persistModeState);
  const bgcolor = currentMode.bgcolor;
  const textColor = currentMode.textColor;

  const handleMenuItemClick = (selectedMenu: string) => {
    const updatedMenuState: MenuType[] = menuItems.map((item) => {
      if (item.menu === selectedMenu) {
        return { menu: item.menu };
      }
      return { menu: "" };
    });
    const filteredMenuState = updatedMenuState.filter(
      (item) => item.menu !== ""
    );

    setMenuState(filteredMenuState);
  };

  const handleScroll = () => {
    const aboutSection = document.getElementById("introSection");
    const projectSection = document.getElementById("sliderSection");
    const contactSection = document.getElementById("contactSection");

    if (window.scrollY >= 30) {
      setScrollOn(true);
    } else {
      setScrollOn(false);
    }

    if (
      aboutSection &&
      projectSection &&
      contactSection &&
      window.scrollY >= aboutSection.offsetTop &&
      window.scrollY < projectSection.offsetTop
    ) {
      setActiveSection("ABOUT");
    } else if (
      projectSection &&
      contactSection &&
      window.scrollY >= projectSection.offsetTop &&
      window.scrollY < contactSection.offsetTop
    ) {
      setActiveSection("PROJECT");
    } else if (contactSection && window.scrollY >= contactSection.offsetTop) {
      setActiveSection("CONTACT");
    } else {
      setActiveSection("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ScrollHeader
      className={`${currentMode.mode === "dark" ? "darkmode" : "lightmode"} ${
        scrollOn ? "on" : ""
      }`}
      bgcolor={bgcolor}
    >
      <ul className="navi">
        {menuItems.map((item) => (
          <li
            key={item.menu}
            onClick={() => handleMenuItemClick(item.menu)}
            className={activeSection === item.menu ? "active" : ""}
          >
            <h2>{item.menu}</h2>
          </li>
        ))}
      </ul>
      <LinkBtn textColor={textColor} />
    </ScrollHeader>
  );
}

const ScrollHeader = styled.header<GlobalStyleProps>`
  width: calc(100% - 100px);
  padding: 20px 0px;
  position: fixed;
  top: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &.on {
    transition: 0.5s ease all;
    background-color: #212426;
    background-color: ${(props) => props.bgcolor};
  }
  ul.navi {
    display: flex;
    align-items: center;
    padding-left: 20px;
    li {
      margin: 0px 10px;
      position: relative;
      cursor: pointer;
      h2 {
        font-size: 22rem;
      }
      &::after {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 50%;
        width: 0%;
        transform: translateX(-50%);
        height: 2px;
        background: #b15e30;
        transition: 0.35s;
      }
    }
    li.active {
      h2 {
        color: #b15e30;
      }
      &::after {
        width: 100%;
      }
    }
  }
`;
