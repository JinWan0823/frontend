import styled from "styled-components";
import List from "./list";
import Banner from "../assets/banner.png";

export default function Contents() {
  return (
    <>
      <ContentsWrap>
        <div className="img-wrap">
          <img src={Banner} alt="banner-img" />
        </div>
        <List />
      </ContentsWrap>
    </>
  );
}

const ContentsWrap = styled.div`
  width: 100%;
  margin-top: 40px;

  h3 {
    font-size: 32rem;
    line-height: 1.1;
    margin-left: 110px;
    letter-spacing: -1.2px;
  }

  .img-wrap {
    width: 1260px;
    background-color: #000;
    img {
      width: 100%;
      opacity: 0.55;
    }
  }
`;
