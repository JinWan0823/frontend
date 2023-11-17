import styled from "styled-components";
import Title from "../commonComponents/title";
import ImgSlide from "./ImgSlide";
import { useState } from "react";
import useInterval from "../Hooks/useInterval";

export default function Intro() {
  const originalText = `Thank you for joining my portfolio
Let me show you my stack of skills 💡
: react.js / typescript / javascript (es6) / html (5) / css (3)`;
  const [landingTitle, setLandingTitle] = useState("");
  const [count, setCount] = useState(0);

  useInterval(() => {
    if (count >= originalText.length) {
      return;
    }
    setLandingTitle((prev) => {
      const result = prev ? prev + originalText[count] : originalText[0];
      setCount((prev) => (prev += 1));
      return result;
    });
  }, 50);

  return (
    <section>
      <IntroTitle>
        <pre>{landingTitle}</pre>
      </IntroTitle>
      <ImgSlide />
      <TitleWrap>
        <h3>
          ONE STEP FROM <br />
          PUBLISHER TO <br />
          FRONT-END DEVELOPER <br />
        </h3>
        <Title>PORTFOLIO</Title>
      </TitleWrap>
    </section>
  );
}

const IntroTitle = styled.h1`
  height: 245px;
  font-size: 45rem;
  line-height: 1.3;
  padding: 30rem 40rem;

  span {
    font-size: 40rem;
  }
`;

const TitleWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  h3 {
    font-size: 32rem;
    line-height: 1.1;
    text-align: right;
    margin-right: 110px;
    letter-spacing: -1.2px;
    @media screen and (max-width: 1440px) {
      font-size: 26rem;
    }
  }
`;
