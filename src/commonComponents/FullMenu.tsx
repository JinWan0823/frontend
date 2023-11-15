import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { MenuState, MenuType } from "../State/MenuState";

interface Props {
  toggleMenu: boolean;
  TabOn: () => void;
}

const menuItems: MenuType[] = [
  { menu: "ABOUT" },
  { menu: "PROJECT" },
  { menu: "CONTACT" },
];

export default function FullMenu({ toggleMenu, TabOn }: Props) {
  const setMenuState = useSetRecoilState(MenuState);

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
    TabOn();
  };

  return (
    <MenuOverlay className={toggleMenu ? "on" : ""}>
      <nav className="menu-wrap">
        <ul>
          {menuItems.map((item) => (
            <li key={item.menu} onClick={() => handleMenuItemClick(item.menu)}>
              <h2>{item.menu}</h2>
            </li>
          ))}
        </ul>
      </nav>
    </MenuOverlay>
  );
}

const MenuOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 1;
  visibility: hidden;
  transition: opacity 0.5s, visibility 0.5s, width 0.5s;
  z-index: 99;

  &::before {
    content: "";
    background: #000;
    position: absolute;
    left: -55%;
    top: 0;
    width: 50%;
    height: 100%;
    transition: left 0.5s ease;
  }
  &::after {
    content: "";
    background: #000;
    position: absolute;
    right: -55%;
    top: 0;
    width: 50%;
    height: 100%;
    transition: all 0.5s ease;
  }

  &.on {
    opacity: 0.95;
    visibility: visible;
    &::before {
      left: 0;
    }
    &::after {
      right: 0;
    }
    li {
      animation: fadeInRight .5s ease forwards;
      animation-delay: .5s;
      
      &:nth-of-type(2) {
        animation-delay: .6s;
      }
      &:nth-of-type(3) {
        animation-delay: .7s;
      }
    }
  }
  nav {
    position: relative;
    height: 60%;
    top: 50%;
    transform: translateY(-50%);
    font-size: 50px;
    text-align: center;
    z-index: 100;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0 auto;
    display: inline-block;
    position: relative;
    height: 100%; 
    font-family: "Oswald", sans-serif;
    font-weight:800;
    li {
      display: flex;
      align-items:center;
      justify-content:center;
      height: 33.333%;
      height: calc(100% / 3);
      min-height: 50px;
      position: relative;
      opacity: 0;
      
      h2 {
        position: relative;
        text-decoration: none;
        font-size:110rem;
        cursor:pointer;
        &:hover {
          color:#b15e30
        }
        &:hover::after {
           width: 100%;
         }
        
        &:after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 50%;
          width: 0%;
          transform: translateX(-50%);
          height: 6px;
          background: #b15e30;
          transition: .35s;
        }
      }
    }
  }
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    left: 20%;
  }
  100% {
    opacity: 1;
    left: 0;
  }
}`;
