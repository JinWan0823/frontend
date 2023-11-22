import styled from "styled-components";

export const DetailWrap = styled.div`
  width: 100%;
  margin-top: 80px;
  display: flex;
  align-items: flex-start;

  h4 {
    font-size: 30rem;
    width: 120px;
    flex-shrink: 0;
  }

  @media screen and (max-width: 1240px) {
    flex-direction: column;
    h4 {
      margin-bottom: 20px;
    }
  }
`;
