import styled from "styled-components";

interface TooltipProps {
  cate: string;
}

export default function Tootip({ cate }: TooltipProps) {
  return (
    <Balloon cate={cate}>
      <p>{cate}</p>
    </Balloon>
  );
}
const Balloon = styled.div<TooltipProps>`
  opacity: 0;
  padding: 6px 10px;
  border-radius: 4px;
  background-color: ${(props) =>
    props.cate === "Kakao" ? "#ffbd30" : "#e94e32"};
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 120%);
  &::after {
    content: "";
    width: 6px;
    height: 6px;
    background-color: inherit;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
  }
  p {
    font-size: 14rem;
  }
`;
