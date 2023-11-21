import styled from "styled-components";
import { GlobalStyleProps } from "../GlobalStyle";
import { useRecoilValue } from "recoil";
import { persistModeState } from "../State/MenuState";
import InputComponent from "./InputComponent";

export default function ContactForm() {
  const currentMode = useRecoilValue(persistModeState);
  const textColor = currentMode.textColor;
  const mode = currentMode.mode;

  return (
    <Form textColor={textColor} mode={mode}>
      <ul>
        <InputComponent type={"text"} required={true} title={"기업명"} />
        <InputComponent type={"text"} required={true} title={"성함"} />
        <InputComponent type={"text"} required={true} title={"전화번호"} />
        <InputComponent type={"email"} required={false} title={"이메일"} />
        <li>
          <p className="required">메세지</p>
          <textarea rows={5} />
        </li>
        <li>
          <button type="submit">보내기</button>
        </li>
      </ul>
    </Form>
  );
}

const Form = styled.form<GlobalStyleProps>`
  width: 100%;

  li {
    &:not(:nth-of-type(1)) {
      margin-top: 30px;
    }
    display: flex;
    p {
      width: 110px;
      padding-top: 8px;
      text-align: left;
      flex-shrink: 0;
      font-size: 16rem;
      &.required::after {
        content: "*";
        color: #e8a42f;
        margin-left: 4px;
      }
    }
    input {
      width: 100%;
      padding: 10px;
      background-color: transparent;
      border: 1px solid
        ${(props) => (props.mode === "dark" ? "#676767" : "#b0b0b0")};
      color: ${(props) => props.textColor};
      font-size: 18rem;
    }
    textarea {
      width: 100%;
      padding: 10px;
      background-color: transparent;
      border: 1px solid
        ${(props) => (props.mode === "dark" ? "#676767" : "#b0b0b0")};
      color: ${(props) => props.textColor};
      font-size: 18rem;
    }

    button {
      width: 100%;
      margin-top: 20px;
      padding: 14px 0px;
      font-size: 18rem;
      background-color: #07788c;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-weight: 800;
    }
  }
`;
