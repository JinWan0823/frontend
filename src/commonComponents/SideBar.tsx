import styled from "styled-components";
import ModeBtn from "./ModeBtn";
import HeaderTabMenu from "./HeaderTabMenu";
// import UpBtn from "./UpBtn";

export default function Sidebar() {
  return (
    <SideMenu>
      <div className="side_wrap" style={{ paddingTop: "10px" }}>
        <HeaderTabMenu />
        <p className="thk">Thanks for watching my portfolio :)</p>
      </div>
      <div style={{ paddingBottom: "20px" }}>
        <ModeBtn />
        {/* <UpBtn /> */}
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
