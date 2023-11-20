import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function HomeBtn() {
  const navigate = useNavigate();
  return (
    <Btn onClick={() => navigate("/")}>
      <FontAwesomeIcon icon={faHome} />
    </Btn>
  );
}

const Btn = styled.div`
  width: 54px;
  height: 54px;
  z-index: 9999999999999999999999999;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0px 0px 3px #333;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    font-size: 26rem;
    color: #b15e30;
  }
`;
