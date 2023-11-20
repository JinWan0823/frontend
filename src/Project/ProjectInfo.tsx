import styled from "styled-components";
import { CardProps } from "./ProjectWrap";
import { DetailWrap } from "./ProjectDetailWrap";

interface ProjectInfoProps {
  data: CardProps;
}

export default function ProjectInfo({ data }: ProjectInfoProps) {
  const workArray = Array.isArray(data.work) ? data.work : [];
  return (
    <DetailWrap>
      <h4>Info.</h4>
      <InfoWrap>
        <li>
          <p>작업기간</p>
          <span>{data.date}</span>
        </li>
        <li>
          <p>개발언어</p>
          <span>{data.skill}</span>
        </li>
        <li>
          <p>담당업무</p>
          <ul className="work">
            {workArray.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </li>
        <li>
          <p>프로젝트</p>
          <span>{data.content}</span>
        </li>
        <li>
          <p>사이트</p>
          <span>
            <a href={data.site} target="_blank">
              {data.site}
            </a>
          </span>
        </li>
        {data.github && (
          <li>
            <p>깃허브</p>
            <span>
              <a href={data.github} target="_blank">
                {data.github}
              </a>
            </span>
          </li>
        )}
        {data.youtube && (
          <li>
            <p>시연영상</p>
            <span>
              <a href={data.youtube} target="_blank">
                {data.youtube}
              </a>
            </span>
          </li>
        )}
      </InfoWrap>
    </DetailWrap>
  );
}

const InfoWrap = styled.ul`
  width: 100%;
  padding-top: 8px;
  & > li {
    width: calc(100% - 100px);
    display: flex;
    font-size: 18rem;
    line-height: 1.4;

    &:not(:nth-of-type(1)) {
      margin-top: 12px;
    }
    p {
      width: 100px;
      color: #999;
      font-weight: 800;
      flex-shrink: 0;
    }
    span {
      display: inline-block;
      word-break: keep-all;
    }

    a {
      color: #6b60e5;
      text-decoration: none;
    }
  }

  .work li:not(:nth-of-type(1)) {
    margin-top: 4px;
  }
  .work li::before {
    content: " - ";
  }
`;
