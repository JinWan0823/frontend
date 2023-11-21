import styled from "styled-components";
import ModeBtn from "./ModeBtn";
import HeaderTabMenu from "./HeaderTabMenu";
import { useEffect, useState } from "react";
import UpBtn from "../commonComponents/UpBtn";
import { useParams } from "react-router-dom";
import HomeBtn from "./HomeBtn";

export default function Sidebar() {
  const [upBtn, setUpBtn] = useState(false);
  const { Id } = useParams();

  const handleScroll = () => {
    if (window.scrollY >= 50) {
      setUpBtn(true);
    } else {
      setUpBtn(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <SideMenu>
      <div className="side_wrap" style={{ paddingTop: "10px" }}>
        {!Id ? <HeaderTabMenu /> : <HomeBtn />}
        <p className="thk">Thanks for watching my portfolio :)</p>
      </div>
      <div style={{ paddingBottom: "20px" }}>
        <ModeBtn />
        {upBtn && !Id && <UpBtn />}
      </div>
    </SideMenu>
  );
}

const SideMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100px;
  height: 100%;
  background-color: #ececec;
  z-index: 999999999999999999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 0px 3px #646464;

  .side_wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .thk {
    font-size: 20rem;
    font-family: "Oswald", sans-serif;
    color: #333;
    font-weight: 800;
    white-space: nowrap;
    writing-mode: vertical-lr;
    text-align: center;
    margin-top: 20px;
  }
`;
