import styled, { keyframes } from "styled-components";
import Rent from "../assets/rent.png";
import FaceMaker from "../assets/facemaker.png";
import Arum from "../assets/arum.png";
import TripTogether from "../assets/triptogether.png";
import Woori from "../assets/woori.png";

import { useState } from "react";

const slides = [FaceMaker, Arum, Rent, TripTogether, Woori];

export default function ImgSlide() {
  const [animate, setAnimate] = useState(true);
  const onStop = () => setAnimate(false);
  const onRun = () => setAnimate(true);

  return (
    <Wrapper>
      <div className="slide-container">
        <ul
          className="slide-wrapper"
          onMouseEnter={onStop}
          onMouseLeave={onRun}
        >
          <div className={"slide original".concat(animate ? "" : " stop")}>
            {slides.map((v, i) => (
              <li key={i}>
                <img src={v} alt="img-slide" />
              </li>
            ))}
          </div>
          <div className={"slide clone".concat(animate ? "" : " stop")}>
            {slides.map((v, i) => (
              <li key={i}>
                <img src={v} alt="img-slide" />
              </li>
            ))}
          </div>
        </ul>
      </div>
    </Wrapper>
  );
}

const infiniteAnimation1 = keyframes`
  0% {
    transform: translateX(0%);
  }
  50% {
    transform: translateX(-100%);
  }
  50.1% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0%);
  }
`;
const infiniteAnimation2 = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-200%);
  }
`;
const Wrapper = styled.div`
  .slide-container {
    overflow: hidden;
  }
  .slide-wrapper {
    display: flex;
    flex-wrap: nowrap;
  }
  .slide {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    position: relative;
    &::before {
      content: "";
      display: block;
      width: 100%;
      height: 1px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #bbb;
      z-index: 1;
    }
    &.original {
      animation: 45s linear infinite normal none running ${infiniteAnimation1};
    }
    &.clone {
      animation: 45s linear infinite ${infiniteAnimation2};
    }
    &.stop {
      animation-play-state: paused;
    }

    li {
      margin: 0px 10px;
      z-index: 2;
      transition: 0.3s;
      transform: scale(1);
      cursor: pointer;
      position: relative;
      border: 1px solid #07788c;
    }
  }
  @media screen and (max-width: 1440px) {
    margin: 10px 0px;
    li img {
      width: 490px;
    }
  }
`;
