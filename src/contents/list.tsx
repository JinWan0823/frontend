import styled from "styled-components";
import Title from "../commonComponents/title";

export default function List() {
  return (
    <TitleWrap>
      <Title>SKILLS & PROJECT</Title>
      <p>
        '배움에는 끝이 없다' 라는 말이 있듯이 공부도 100% 라는 완벽한 수치는
        없다고 생각합니다.
        <br /> 그렇지만 100%에 근접할 수 있도록 배웠던것도 복습하고 새로운
        것들을 공부하여
        <br /> 차근차근 프론트엔드 개발자로써 저만의 전문성과 경쟁력을
        갖추겠습니다.
      </p>
      <Ul>
        <li>
          <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />{" "}
          <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />{" "}
          <img src="https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" />{" "}
          <img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />{" "}
          <img src="https://img.shields.io/badge/styledcomponents-db7093?style=for-the-badge&logo=styledcomponents&logoColor=white" />{" "}
          <img src="https://img.shields.io/badge/jquery-0769AD?style=for-the-badge&logo=jquery&logoColor=white" />{" "}
        </li>
        <li>
          <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white" />{" "}
          <img src="https://img.shields.io/badge/typescript-3178c6?style=for-the-badge&logo=typescript&logoColor=white" />{" "}
          <img src="https://img.shields.io/badge/php-777bb4?style=for-the-badge&logo=php&logoColor=white" />{" "}
          <img src="https://img.shields.io/badge/react-61dafb?style=for-the-badge&logo=react&logoColor=white" />{" "}
          <img src="https://img.shields.io/badge/redux-764abc?style=for-the-badge&logo=redux&logoColor=white" />{" "}
        </li>
        <li>
          <img src="https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=white" />{" "}
          <img src="https://img.shields.io/badge/mysql-4479a1?style=for-the-badge&logo=mysql&logoColor=white" />{" "}
          <img src="https://img.shields.io/badge/vercel-ffffff?style=for-the-badge&logo=vercel&logoColor=black" />{" "}
          <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white" />{" "}
        </li>
      </Ul>
    </TitleWrap>
  );
}

const TitleWrap = styled.div`
  h1 {
    text-align: center;
    margin-top: 60px;
  }
  p {
    color: #fff;
    text-align: center;
    font-size: 20rem;
    line-height: 1.5;
    margin-top: 20px;
  }
`;

const Ul = styled.ul`
  margin-top: 40px;
  text-align: center;
  li {
    font-size: 30rem;
    color: #fff;
    font-weight: 700;
    line-height: 1.2;
  }
`;
