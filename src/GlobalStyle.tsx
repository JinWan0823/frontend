import { useRecoilValue } from "recoil"
import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"
import { ThemeState, ThemeType } from "./State/MenuState"

interface GlobalProps {
    theme : ThemeType
}

const GlobalStyle = createGlobalStyle<GlobalProps>`
    ${reset}

    html {
        font-size:6.25%;
    }
    body {
        background-color: ${(props) => (props.theme === "dark" ? "#FFFFFF" : "#212426")};
        color: ${(props) => (props.theme === "dark" ? "#212426" : "#FEFEFE")};
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
`

export default function  ThemeGlobalStyle() {
    const theme = useRecoilValue(ThemeState);

    return <GlobalStyle theme={theme}></GlobalStyle>
}