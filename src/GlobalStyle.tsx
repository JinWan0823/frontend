import { useRecoilValue } from "recoil";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { persistModeState } from "./State/MenuState";

export interface GlobalStyleProps {
  bgcolor?: string;
  textColor?: string;
}

export default function ThemeGlobalStyle() {
  const theme = useRecoilValue(persistModeState);
  const bgcolor = theme.bgcolor;
  const textColor = theme.textColor;
  return <GlobalStyle bgcolor={bgcolor} textColor={textColor}></GlobalStyle>;
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
    ${reset}

    html {
        font-size:6.25%;
    }
    a{
      color:inherit;
    }
    body {
        padding-left:100px;
        color : ${(props) => props.textColor};
        background-color : ${(props) => props.bgcolor};
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        font-family: "Noto Sans KR", sans-serif;
        font-size: 6.25%;
        vertical-align: baseline;
        box-sizing: border-box;      
    }
    h1,h2,h3,h4,h5,h6 {
        font-family: "Oswald", sans-serif;
        font-weight:700;
    }
`;
