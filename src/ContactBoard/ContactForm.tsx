import styled from "styled-components";
import { GlobalStyleProps } from "../GlobalStyle";
import { useRecoilValue } from "recoil";
import { persistModeState } from "../State/MenuState";
import InputComponent from "./InputComponent";

import { collection, addDoc } from "@firebase/firestore";
import { useState } from "react";
import { db } from "../firebase";

export default function ContactForm() {
  const currentMode = useRecoilValue(persistModeState);
  const color = currentMode.textColor;
  const mode = currentMode.mode;

  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitData = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "Contact"), {
        name: name,
        company: company,
        phone: phone,
        email: email,
        message: message,
      });
      setCompany("");
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form color={color} mode={mode}>
      <ul>
        <InputComponent
          type={"text"}
          required={true}
          title={"기업명"}
          setState={setCompany}
        />
        <InputComponent
          type={"text"}
          required={true}
          title={"성함"}
          setState={setName}
        />
        <InputComponent
          type={"number"}
          required={true}
          title={"전화번호"}
          setState={setPhone}
        />
        <InputComponent
          type={"email"}
          required={false}
          title={"이메일"}
          setState={setEmail}
        />
        <li>
          <p className="required">메세지</p>
          <textarea
            required
            rows={5}
            onChange={(e) => setMessage(e.target.value)}
          />
        </li>
        <li>
          <button onClick={(e) => submitData(e)}>보내기</button>
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
      color: ${(props) => props.color};
      font-size: 18rem;
    }
    textarea {
      width: 100%;
      padding: 10px;
      background-color: transparent;
      border: 1px solid
        ${(props) => (props.mode === "dark" ? "#676767" : "#b0b0b0")};
      color: ${(props) => props.color};
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
