import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { persistModeState } from "../State/MenuState";

interface ProgressProps {
  title: string;
  percent: number;
  color: string;
}

export default function ProgressBar({ title, percent, color }: ProgressProps) {
  const currentMode = useRecoilValue(persistModeState);
  const [animate, setAnimate] = useState(false);

  console.log(currentMode);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("barWrap");
      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        if (isVisible) {
          setAnimate(true);
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <BarWrap
      percent={percent}
      color={color}
      animate={animate ? "true" : "false"}
      currentmode={currentMode.mode}
      id="barWrap"
    >
      <p>{title}</p>
      <div className="bar">
        <div className={`percent_bar ${animate ? "animate" : ""}`}>
          <span>{percent}%</span>
        </div>
      </div>
    </BarWrap>
  );
}

const BarWrap = styled.li<{
  percent: number;
  color: string;
  animate: string;
  currentmode: string;
}>`
  display: flex;
  align-items: center;
  width: 100%;
  p {
    font-size: 20rem;
    width: 140px;
    flex-shrink: 0;
  }
  .bar {
    width: 100%;
    background-color: ${(props) =>
      props.currentmode === "dark" ? "#575757" : "#e7e7e7"};
    height: 24px;
    border-radius: 4px;
    overflow: hidden;
    position: relative;
  }
  .percent_bar {
    width: 0%;
    height: 100%;
    border-radius: 4px;
    background-color: ${(props) => props.color};
    position: absolute;
    width: ${(props) => (props.animate === "true" ? props.percent + "%" : "0")};
    transition: width 1.5s;
    span {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      font-size: 14rem;
      color: #fff;
      right: 10px;
    }
  }
`;
