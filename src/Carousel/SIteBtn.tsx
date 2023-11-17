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
  let bgcolor = "";
  if (cate === "Github") {
    text = cate;
    color = "#fff";
    bgcolor = "#764abc";
  } else if (cate.includes("Github")) {
    text = cate;
    color = "#fff";
    bgcolor = "#764abc";
  } else if (cate === "site") {
    text = "Site";
    color = "#333";
    bgcolor = "#fff";
  } else if (cate === "youtube") {
    text = "Youtube";
    color = "#fff";
    bgcolor = "#e34f26";
  } else {
    text = cate;
    color = "#333";
    bgcolor = "#fff";
  }
  return (
    <LinkBtn href={btn} target="_blank" color={color} $bg={bgcolor}>
      {text}
    </LinkBtn>
  );
}
