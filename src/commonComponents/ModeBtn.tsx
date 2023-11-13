import styled from "styled-components"
import { useRecoilState } from "recoil"
import { ThemeState } from "../State/MenuState"


export default function ModeBtn(){

    const [theme,setTheme] = useRecoilState(ThemeState);

    const toggleTheme = () => {
        setTheme((prevTheme)=>(prevTheme === "dark" ? "light" : "dark"));
        console.log(theme);
    }

    return <Mode onClick={toggleTheme}>
    </Mode>
}

const Mode = styled.div`
    width:90px;
    height:90px;
    position:absolute;
    top:0;left:20px;
    z-index:9999999999;
    background-color:yellow;
    cursor:pointer;
`