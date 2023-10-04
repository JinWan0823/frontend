import styled from "styled-components";

interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const NextArrow = ({ onClick }: ArrowProps) => {
  return (
    <SlickBtn className="custom-arrow next" onClick={onClick}>
      <span>Next</span>
    </SlickBtn>
  );
};

const PrevArrow = ({ onClick }: ArrowProps) => {
  return (
    <SlickBtn className="custom-arrow prev" onClick={onClick}>
      <span>Prev</span>
    </SlickBtn>
  );
};

const SlickBtn = styled.div`
  width: 20px;
  height: 20px;
  background-color: #fff;
  cursor: pointer;
`;
export { NextArrow, PrevArrow };
