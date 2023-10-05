import styled from "styled-components";

interface BtnProps {
  btn: string;
  cate: string;
}

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

  const LinkBtn = styled.a`
    font-size: 18rem;
    display: inline-block;
    padding: 10px 34px;
    text-decoration: none;
    border-radius: 6px;
    font-weight: 800;
    background-color: ${bgColor};
    color: ${color};
    font-family: "Oswald", sans-serif;
  `;

  return (
    <LinkBtn href={btn} target="_blank">
      {text}
    </LinkBtn>
  );
}
