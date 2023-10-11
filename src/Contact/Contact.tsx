import styled from "styled-components";
import Title from "../commonComponents/title";
import ContactInfo from "./ContactInfo";

export default function Contact() {
  return (
    <ContactWrap>
      <Title>CONTACT</Title>
      <p className="sub-tit">
        포트폴리오를 봐주셔서 감사합니다. 궁금한 사항은 아래 연락처로 연락주시면
        감사하겠습니다.
      </p>
      <ContactInfo />
    </ContactWrap>
  );
}

const ContactWrap = styled.div`
  width: 1440px;
  margin: 40px auto;
  h1 {
    text-align: center;
  }
  p.sub-tit {
    font-size: 20rem;
    text-align: center;
    color: #fff;
  }
`;
