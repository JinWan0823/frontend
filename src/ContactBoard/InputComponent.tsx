import styled from "styled-components";

interface InputProps {
  type: string;
  required: boolean;
  title: string;
  setState?: React.Dispatch<React.SetStateAction<string>>;
}

export default function InputComponent({
  type,
  required,
  title,
  setState,
}: InputProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // input 값에 따라 처리
    if (setState) {
      setState(event.target.value);
    }
  };
  return (
    <Li>
      <p className={`${required ? "required" : ""}`}>{title}</p>
      <input
        type={type}
        onChange={(e) => handleChange(e)}
        {...(required && { required: true })}
      />
    </Li>
  );
}

const Li = styled.li`
  &:not(:nth-of-type(1)) {
    margin-top: 30px;
  }
  display: flex;
`;
