import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const handleUpBtn = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export default function UpBtn() {
  return (
    <Btn onClick={handleUpBtn}>
      <FontAwesomeIcon icon={faArrowUp} />
    </Btn>
  );
}

const Btn = styled.button`
  position: fixed;
  bottom: 20px;
  right: 10px;
  width: 60px;
  height: 60px;
  z-index: 9999999;
  cursor: pointer;
  border-radius: 15px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    font-size: 30rem;
    color: #b15e30;
  }
`;
