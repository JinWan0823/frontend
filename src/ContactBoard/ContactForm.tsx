import styled from "styled-components";
import { GlobalStyleProps } from "../GlobalStyle";
import { useRecoilValue } from "recoil";
import { persistModeState } from "../State/MenuState";
import InputComponent from "./InputComponent";

import { collection, addDoc } from "@firebase/firestore";
import { useState } from "react";
import { db } from "../firebase";
import Modal from "../commonComponents/Modal";

export default function ContactForm() {
  const currentMode = useRecoilValue(persistModeState);
  const color = currentMode.textColor;
  const mode = currentMode.mode;

  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
      setModal(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {modal && (
        <Modal
          modalCategory="보내기 완료"
          handleModal={handleModal}
          text={"소중한 의견, 내용 감사드립니다."}
        />
      )}
      <Form color={color} mode={mode} onSubmit={handleSubmit}>
        <ul>
          <InputComponent
            type={"text"}
            required={true}
            title={"기업명"}
            state={company}
            setState={setCompany}
          />
          <InputComponent
            type={"text"}
            required={true}
            title={"성함"}
            state={name}
            setState={setName}
          />
          <InputComponent
            type={"tel"}
            required={true}
            title={"전화번호"}
            state={phone}
            setState={setPhone}
          />
          <InputComponent
            type={"email"}
            required={false}
            title={"이메일"}
            state={email}
            setState={setEmail}
          />
          <li style={{ marginTop: "30px" }}>
            <div className="input_wrap">
              <SubTitle className="required">메세지</SubTitle>
              <textarea
                value={message}
                required
                rows={5}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </li>
          <li>
            <button type="submit">보내기</button>
          </li>
        </ul>
      </Form>
    </>
  );
}

const Form = styled.form<GlobalStyleProps>`
  width: 100%;

  .input_wrap {
    display: flex;
  }

  input {
    border: 1px solid
      ${(props) => (props.mode === "dark" ? "#676767" : "#b0b0b0")};
    color: ${(props) => props.color};
  }

  textarea {
    width: 100%;
    padding: 10px;
    background-color: transparent;
    border: 1px solid
      ${(props) => (props.mode === "dark" ? "#676767" : "#b0b0b0")};
    color: ${(props) => props.color};
    font-size: 18rem;
    &:focus {
      border-color: #07788c;
    }
    &:focus-visible {
      outline: none;
    }
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
`;

export const SubTitle = styled.p`
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
`;
