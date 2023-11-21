import styled from "styled-components";
import { CardProps } from "./ProjectWrap";
import { GlobalStyleProps } from "../GlobalStyle";
import { useRecoilValue } from "recoil";
import { persistModeState } from "../State/MenuState";
import ListData from "../../db";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
interface ProjectInfoProps {
  data: CardProps;
}
export default function ProjectNavi({ data }: ProjectInfoProps) {
  const currentMode = useRecoilValue(persistModeState);
  const bgcolor = currentMode.bgcolor;
  const textColor = currentMode.textColor;

  const indexId = data.id;
  const length = ListData.portfolio.length;

  const navigate = useNavigate();

  const handlePrevProject = () => {
    const NowProject = indexId - 1;
    if (NowProject === 0) {
      alert("첫번째 페이지입니다.");
      return;
    }
    navigate(`/project/${NowProject - 1}`);
  };

  const handleNextProject = () => {
    const NowProject = indexId - 1;
    if (NowProject >= length - 1) {
      alert("마지막 페이지입니다.");
      return;
    }
    navigate(`/project/${NowProject + 1}`);
  };

  return (
    <Navi bgcolor={bgcolor} textColor={textColor}>
      <Btn onClick={() => handlePrevProject()}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </Btn>
      <h4>
        {data.title}
        <span>
          {indexId} / {length}
        </span>
      </h4>
      <Btn onClick={() => handleNextProject()}>
        <FontAwesomeIcon icon={faAngleRight} />
      </Btn>
    </Navi>
  );
}

const Navi = styled.div<GlobalStyleProps>`
  background-color: ${(props) => props.bgcolor};
  border: 1px solid ${(props) => props.textColor};
  position: fixed;
  bottom: 10px;
  left: calc(50%);
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  border-radius: 45px;
  overflow: hidden;
  h4 {
    font-size: 18rem;
    padding: 0px 12px;
    span {
      font-size: 16rem;
      margin-left: 10px;
    }
  }
`;

const Btn = styled.button`
  width: 45px;
  height: 45px;
  border-radius: 45px;
  background-color: #b15e30;
  cursor: pointer;
  border: none;
  color: #fff;
  svg {
    font-size: 20rem;
  }
`;
