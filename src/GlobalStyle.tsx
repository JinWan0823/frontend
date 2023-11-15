import { useRecoilValue } from "recoil";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { persistModeState } from "./State/MenuState";

export interface GlobalStyleProps {
  bgColor?: string;
  textColor?: string;
}

export default function ThemeGlobalStyle() {
  const theme = useRecoilValue(persistModeState);
  const bgColor = theme.bgColor;
  const textColor = theme.textColor;
  return <GlobalStyle bgColor={bgColor} textColor={textColor}></GlobalStyle>;
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
    ${reset}

    html {
        font-size:6.25%;
    }
    body {
        padding-left:100px;
        color : ${(props) => props.textColor};
        background-color : ${(props) => props.bgColor};
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
