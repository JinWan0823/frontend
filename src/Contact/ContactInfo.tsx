import styled from "styled-components";
import DotList from "./DotList";
import ContactBtn from "./ContactBtn";
import ContactImg from "../assets/contact.png";

export default function ContactInfo() {
  return (
    <InfoWrap>
      <ImgWrap>
        <img src={ContactImg} alt="contact-img" />
      </ImgWrap>
      <MyInfo>
        <h3>Park JinWan</h3>
        <ul>
          <DotList
            text={"2021-03 ~ 2021-09 라인컴퓨터학원 웹 퍼블리셔 과정 수료"}
          />
          <DotList text={"2021-10 ~ 2022-11 우리플랫폼 개발기획팀 근무"} />
          <DotList
            text={
              "2023-02 ~ 2023-09 제로베이스 프론트엔드 스쿨 12기 과정 수료 "
            }
          />
        </ul>
        <ContactBtn />
        <h3
          className="thk"
          style={{ marginTop: "40px", fontSize: "60rem", lineHeight: "1.1" }}
        >
          Thank you for watching <br /> my portfolio
        </h3>
      </MyInfo>
    </InfoWrap>
  );
}

const InfoWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 60px;
`;

const ImgWrap = styled.div`
  width: 48%;
  border-radius: 20px;
  overflow: hidden;
  img {
    width: 100%;
    object-fit: cover;
  }
`;

const MyInfo = styled.div`
  width: 48%;
  h3 {
    font-size: 65rem;
    color: #07788c;
  }
  ul {
    margin-top: 40px;
  }

  @media screen and (max-width: 1440px) {
    width: 50%;
    h3 {
      font-size: 52rem;
    }
    ul {
      margin-top: 10px;
      li {
        font-size: 18rem;
        word-break: keep-all;
      }
    }
    .thk {
      display: none;
    }
  }
`;
