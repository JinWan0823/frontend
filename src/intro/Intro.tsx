import styled from "styled-components";
import Title from "../commonComponents/title";
import ImgSlide from "./ImgSlide";

export default function Intro() {
  return (
    <section>
      <Title>FRONTEND DEVELOPER</Title>
      <ImgSlide />
      <TitleWrap>
        <h3>
          ONE STEP FROM <br />
          PUBLISHER TO <br />
          FRONT-END DEVELOPER
        </h3>
        <Title>PORTFOLIO</Title>
      </TitleWrap>
    </section>
  );
}

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
