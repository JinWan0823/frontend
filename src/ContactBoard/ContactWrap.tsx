import styled from "styled-components";
import ContactImg from "../assets/contact.png";
import ContactForm from "./ContactForm";

export default function ContactWrap() {
  return (
    <Contact>
      <div className="title">
        <h1>CONTACT ME.</h1>
        <p>
          포트폴리오를 봐주셔서 감사합니다. 궁금한 사항은 연락주시면
          감사하겠습니다.
        </p>
      </div>
      <div className="inner">
        <div className="contact_lt">
          <img src={ContactImg} alt="contact-img" />
        </div>
        <div className="contact_rt">
          <ContactForm />
        </div>
      </div>
    </Contact>
  );
}

const Contact = styled.div`
  padding: 100px 20px;
  .title {
    text-align: center;
    h1 {
      font-size: 35rem;
      color: #07788c;
    }
    p {
      margin-top: 20px;
    }
  }

  .inner {
    width: 100%;
    margin: 0 auto;
    margin-top: 40px;
    padding: 20px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  .contact_lt {
    border-radius: 20px;
    overflow: hidden;
    width: 560px;
    img {
      width: 100%;
    }
  }
  .contact_rt {
    width: calc(100% - 580px);
  }
`;
