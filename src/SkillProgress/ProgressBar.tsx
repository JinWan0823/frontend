import styled from "styled-components";

interface ProgressProps {
  title: string;
  percent: number;
  color: string;
}

export default function ProgressBar({ title, percent, color }: ProgressProps) {
  return (
    <BarWrap percent={percent} color={color}>
      <p>{title}</p>
      <div className="bar">
        <div className="percent_bar">
          <span>{percent}%</span>
        </div>
      </div>
    </BarWrap>
  );
}

const BarWrap = styled.li<{ percent: number; color: string }>`
  display: flex;
  align-items: center;
  width: 100%;
  p {
    font-size: 20rem;
    width: 140px;
    flex-shirink: 0;
  }
  .bar {
    width: 100%;
    background-color: #383838;
    height: 24px;
    border-radius: 4px;
    overflow: hidden;
    position: relative;
  }
  .percent_bar {
    width: ${(props) => props.percent}%;
    height: 100%;
    background-color: ${(props) => props.color};
    position: absolute;
    span {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      font-size: 14rem;
      color: #fff;
      right: 4px;
    }
  }
`;
