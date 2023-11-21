import styled from "styled-components";

interface InputProps {
  type: string;
  required: boolean;
  title: string;
}

export default function InputComponent({ type, required, title }: InputProps) {
  return (
    <Li>
      <p className={`${required ? "required" : ""}`}>{title}</p>
      <input type={type} />
    </Li>
  );
}

const Li = styled.li`
  &:not(:nth-of-type(1)) {
    margin-top: 30px;
  }
  display: flex;
`;
