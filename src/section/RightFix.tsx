import styled from "styled-components";
import Right from "../assets/right.png";

export default function RightFix() {
  return (
    <RightBox>
      <img src={Right} alt="intro-img" />
    </RightBox>
  );
}

const RightBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;
