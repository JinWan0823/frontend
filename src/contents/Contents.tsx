import styled from "styled-components";
import Banner from "../assets/banner.png";
import { GlobalStyleProps } from "../GlobalStyle";
import Pdf from "../assets/jinwan.pdf";

export default function Contents() {
  return (
    <>
      <ContentsWrap>
        <div className="img-wrap">
          <img src={Banner} alt="banner-img" />
          <div className="introduce">
            <h2>I'm</h2>
            <div className="text">
              <p>
                안녕하세요. 신입 프론트엔드 개발자 박진완입니다. <br />
                하고 싶은 일과 할 수 있는 일의 차이는 크지 않다고 생각합니다.
                누구나 그렇듯 저 또한 대학교를 재학하면서 장래에 대한 고민이
                많았습니다. 제가 추구하는 삶의 방향성과 흥미를 접목할 수 있는
                일을 찾고 싶었습니다. 그렇게 찾은 일이 코딩이었고 퍼블리셔로서
                정해져 있지 않고 기본 틀을 바탕으로 이해하며 응용한다는 점에서
                재미를 느꼈습니다. 새로운 모양을 입히고 동작을 실행시키며
                모르거나 궁금한 것이 생기면 스스로 생각해 보고 구글링을 통하여
                해결 방안을 찾아가며 성취감을 느꼈습니다. 우리플랫폼에서의
                경험뿐만 아니라 최근 여러 프로젝트를 수행하면서, 웹 기술의
                동향과 사용자들의 니즈를 탐구하는 과정에서, 제 관심은 프론트엔드
                개발 분야로 명확히 정렬되었습니다. 새로운 기술을 배우고,
                창의적인 문제 해결 방법을 모색하며 사용자 친화적이고 혁신적인 웹
                애플리케이션을 개발하는 것에 끊임없이 동기 부여되고 있습니다.
                <br />
                <br />
                '배움에는 끝이 없다' 라는 말이 있듯이 공부도 100% 라는 완벽한
                수치는 없다고 생각합니다. 그렇지만 100%에 근접할 수 있도록
                배웠던것도 복습하고 새로운 것들을 공부하여 차근차근 프론트엔드
                개발자로써 저만의 전문성과 경쟁력을 갖추겠습니다.
              </p>
              <a href={Pdf} download={"박진완이력서.pdf"}>
                이력서 다운로드
              </a>
            </div>
          </div>
        </div>
      </ContentsWrap>
    </>
  );
}

const ContentsWrap = styled.div<GlobalStyleProps>`
  width: 100%;
  margin-top: 40px;

  h3 {
    font-size: 32rem;
    line-height: 1.1;
    margin-left: 110px;
    letter-spacing: -1.2px;
  }

  .img-wrap {
    position: relative;
    background-color: ${(props) => props.bgcolor};
    box-shadow: 0px 0px 3px #333 inset;
    img {
      width: 100%;
      height: 100%;
      opacity: 0.15;
      z-index: -1;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  .introduce {
    padding: 40rem;
    display: flex;
    h2 {
      font-size: 30rem;
      width: 140px;
      flex-shrink: 0;
    }

    .text {
      padding-top: 10rem;
      p {
        font-size: 18rem;
        line-height: 1.6;
        word-break: keep-all;
      }

      a {
        display: inline-block;
        text-decoration: none;
        color: ${(props) => props.textColor};
        margin-top: 40px;
        font-size: 16rem;
        border: 1px solid ${(props) => props.textColor};
        padding: 12px 16px;
        border-radius: 6px;
      }
      a:hover {
        color: ${(props) => props.bgcolor};
        border-color: ${(props) => props.bgcolor};
      }
    }
  }
`;
