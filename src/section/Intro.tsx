import styled from "styled-components";
import Rent from "../assets/rent.png";
import FaceMaker from "../assets/facemaker.png";
import Arum from "../assets/arum.png";
import RightFix from "./RightFix";

export default function Intro() {
  return (
    <section>
      <Title>FRONTEND DEVELOPER</Title>
      <ImgWrap>
        <li>
          <img src={FaceMaker} alt="slide" />
        </li>
        <li>
          <img src={Arum} alt="slide" />
        </li>
        <li>
          <img src={Rent} alt="slide" />
        </li>
      </ImgWrap>
    </section>
  );
}

const Title = styled.h1`
  font-size: 130rem;
  padding: 30rem 10rem;
  color: #b15e30;
`;

const ImgWrap = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  li {
    width: 33%;
  }
`;
