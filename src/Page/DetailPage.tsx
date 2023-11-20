import styled from "styled-components";
import ThemeGlobalStyle from "../GlobalStyle";
import Sidebar from "../Header/SideBar";
import Header from "../Header/Header";
import ProjectDetail from "../Project/ProjectDetail";

export default function DetailPage() {
  return (
    <>
      <ThemeGlobalStyle />
      <Sidebar />
      <Wrap>
        <Header />
        <ProjectDetail />
      </Wrap>
    </>
  );
}

const Wrap = styled.div`
  width: 100%;
  overflow-x: hidden;
`;
