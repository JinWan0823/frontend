import styled from "styled-components";

interface TitleProps {
  children: string;
}

export default function Title({ children }: TitleProps) {
  const color = children === "PORTFOLIO" ? "#07788C" : "#b15e30";

  return <Text color={color}>{children}</Text>;
}

const Text = styled.h1`
  font-size: 142rem;
  padding: 30rem 40rem;
  color: ${(props) => props.color};

  @media screen and (max-width: 1440px) {
    font-size: 80rem;
  }
`;
