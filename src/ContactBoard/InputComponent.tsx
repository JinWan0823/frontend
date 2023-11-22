import { useState } from "react";
import styled from "styled-components";
import { GlobalStyleProps } from "../GlobalStyle";
import { SubTitle } from "./ContactForm";

interface InputProps {
  type: string;
  required: boolean;
  title: string;
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}

export default function InputComponent({
  type,
  required,
  title,
  state,
  setState,
}: InputProps) {
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (type === "tel") {
      const numericValue = event.target.value.replace(/[^0-9]/g, "");
      setState(numericValue);

      if (numericValue.length < 9 || numericValue.length > 11) {
        setErrorMessage("* 전화번호는 9 - 11 자 사이로 입력해주세요.");
        setIsError(true);
      } else {
        setIsError(false);
      }
    } else if (type === "email") {
      const emailValue = event.target.value;
      setState(emailValue);

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValidEmail = emailRegex.test(emailValue);

      setErrorMessage("* 이메일 형식에 맞게 입력해주세요.");
      setIsError(!isValidEmail);
    } else {
      const updatedValue = event.target.value;
      setState(updatedValue);

      if (updatedValue.length < 2) {
        setErrorMessage("* 2자 이상 입력해주세요.");
        setIsError(true);
      } else {
        setIsError(false);
      }
    }

    if (event.target.value.length === 0) {
      setIsError(false);
    }
  };

  return (
    <Li>
      <div>
        <SubTitle className={`${required ? "required" : ""}`}>{title}</SubTitle>
        <input
          type={type}
          value={state}
          onChange={(e) => handleChange(e)}
          {...(required && { required: true })}
          className={isError ? "error" : ""}
        />
      </div>

      <p> {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}</p>
    </Li>
  );
}

const Li = styled.li<GlobalStyleProps>`
  &:not(:nth-of-type(1)) {
    margin-top: 30px;
  }
  div {
    display: flex;
  }
  input {
    width: 100%;
    padding: 10px;
    background-color: transparent;
    font-size: 18rem;
    &:focus-visible {
      outline: none;
    }
    &:focus {
      border-color: #07788c;
    }
    &.error {
      border-color: #d95050;
    }
    &.error:focus {
      border-color: #d95050;
      box-shadow: 0px 0px 8px #c39191;
    }
  }
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 14rem;
  margin-top: 5px;
  padding-left: 110px;
`;
