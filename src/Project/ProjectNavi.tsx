import styled from "styled-components";
import { CardProps } from "./ProjectWrap";
import { GlobalStyleProps } from "../GlobalStyle";
import { useRecoilValue } from "recoil";
import { persistModeState } from "../State/MenuState";
interface ProjectInfoProps {
  data: CardProps;
}
export default function ProjectNavi({ data }: ProjectInfoProps) {
  const currentMode = useRecoilValue(persistModeState);
  const bgcolor = currentMode.bgcolor;
  const textColor = currentMode.textColor;

  return (
    <Navi bgcolor={bgcolor} textColor={textColor}>
      {data.title}
    </Navi>
  );
}

const Navi = styled.div<GlobalStyleProps>`
  width: calc(100% - 100px);
  position: fixed;
  bottom: 0;
  left: 100px;
  padding: 20px;
  background-color: ${(props) => props.bgcolor};
`;
