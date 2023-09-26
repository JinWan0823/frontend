import styled from "styled-components";

export default function BackCircle() {
  return <Circle></Circle>;
}

const Circle = styled.div`
  width: 2000px;
  height: 2000px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 0%,
    rgb(34 34 34 / 84%) 71%,
    rgb(12 12 12 / 0%) 100%
  );
  border-radius: 0px 0% 50% 0;
  transform: translate(-50%, -50%);
`;
