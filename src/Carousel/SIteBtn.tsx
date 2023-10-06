import styled from "styled-components";

interface BtnProps {
  btn: string;
  cate: string;
}
interface LinkBtnProps {
  color: string;
  $bg: string; // bg prop 추가
}

const LinkBtn = styled.a<LinkBtnProps>`
  font-size: 18rem;
  display: inline-block;
  padding: 10px 34px;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 800;
  background-color: ${(props) => props.$bg};
  color: ${(props) => props.color};
  font-family: "Oswald", sans-serif;
`;

export default function ButtonComponent({ btn, cate }: BtnProps) {
  let text = "";
  let color = "";
  let bgColor = "";
  if (cate === "github") {
    text = "Github";
    color = "#fff";
    bgColor = "#764abc";
  } else if (cate === "notion") {
    text = "Notion";
    color = "#333";
    bgColor = "#fff";
  } else if (cate === "site") {
    text = "Site";
    color = "#333";
    bgColor = "#fff";
  } else if (cate === "youtube") {
    text = "Youtube";
    color = "#fff";
    bgColor = "#e34f26";
  }
  return (
    <LinkBtn href={btn} target="_blank" color={color} $bg={bgColor}>
      {text}
    </LinkBtn>
  );
}
