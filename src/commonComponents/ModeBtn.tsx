import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { DarkState, LightState, persistModeState } from "../State/MenuState";

export default function ModeBtn() {
  const [Theme, setTheme] = useRecoilState(persistModeState);

  const lightMode = useRecoilValue(LightState);
  const darkMode = useRecoilValue(DarkState);

  const toggleTheme = () => {
    if (Theme === lightMode) {
      setTheme(darkMode);
    } else {
      setTheme(lightMode);
    }
  };

  return <Mode onClick={toggleTheme}></Mode>;
}

const Mode = styled.div`
  width: 60px;
  height: 60px;
  z-index: 9999999999;
  background-color: yellow;
  border-radius: 15px;
  cursor: pointer;
`;
