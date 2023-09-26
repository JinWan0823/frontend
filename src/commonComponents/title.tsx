import styled from "styled-components";

interface TitleProps {
  children: string;
}

export default function Title({ children }: TitleProps) {
  const color = children === "PORTFOLIO" ? "#07788C" : "#b15e30";

  const Text = styled.h1`
    font-size: 142rem;
    padding: 30rem 20rem;
    color: ${color};
  `;

  return <Text>{children}</Text>;
}
