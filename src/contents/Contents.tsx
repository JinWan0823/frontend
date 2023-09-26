import styled from "styled-components";
import List from "./list";

export default function Contents() {
  return (
    <>
      <ContentsWrap>
        <div className="img-wrap"></div>
        <List />
      </ContentsWrap>
    </>
  );
}

const ContentsWrap = styled.div`
  width: 100%;
  margin-top: 24px;

  h3 {
    font-size: 32rem;
    line-height: 1.1;
    margin-left: 110px;
    letter-spacing: -1.2px;
  }

  .img-wrap {
    width: 1260px;
    height: 220px;
    background-color: #3d3d3d;
  }
`;
