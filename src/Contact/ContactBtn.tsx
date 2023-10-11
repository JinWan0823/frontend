import styled from "styled-components";
import iconKakao from "../assets/icon/kakao-talk.png";
import iconPhone from "../assets/icon/telephone.png";
import iconMail from "../assets/icon/mail.png";

export default function ContactBtn() {
  return (
    <BtnWrap>
      <div className="phoneBtn btn">
        <Button className="pBtn">
          <img src={iconPhone} alt="phone-icon" />
          010-9974-1134
        </Button>
      </div>
      <div className="kakaoBtn btn">
        <Button className="kBtn">
          <img src={iconKakao} alt="phone-icon" />
          카카오톡
        </Button>
      </div>
      <div className="mailBtn btn">
        <Button className="mBtn">
          <img src={iconMail} alt="phone-icon" />
          이메일
        </Button>
      </div>
    </BtnWrap>
  );
}

const BtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
  .btn {
    position: relative;
    img {
      position: absolute;
      width: 26px;
      top: 50%;
      left: 12px;
      transform: translateY(-50%);
    }
  }
`;

const Button = styled.button`
  font-size: 16px;
  padding: 10px 20px;
  width: 300px;
  height: 45px;
  margin: 10px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  background-color: transparent;
  color: #fff;
  box-shadow: 0 0 0 2px #fff, 0 0.425em 0 0 rgb(110, 107, 107);
  border-radius: 4px;
  &:hover {
    transform: translate(0, 0.42em);
    box-shadow: 0 0 0 2px #fff;
  }
`;
