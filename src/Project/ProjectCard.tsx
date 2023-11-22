import styled from "styled-components";
import { CardProps } from "./ProjectWrap";
import { GlobalStyleProps } from "../GlobalStyle";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  item: CardProps;
}

export default function ProjectCard({ item }: ProjectCardProps) {
  const indexId = item.id - 1;
  return (
    <Card>
      <Link to={`project/${indexId}`}>
        <div
          className="img_box"
          style={{ backgroundImage: `url(${item.thumb})` }}
        >
          <div className="border_box">
            <div className="border"></div>
          </div>
          <div className="info_box">
            <h3>
              <span>{item.title}</span>
            </h3>
            <p>
              <span>{item.date}</span>
            </p>
            <p>
              <span>{item.skill}</span>
            </p>
          </div>
        </div>
      </Link>
    </Card>
  );
}

const Card = styled.li<GlobalStyleProps>`
  width: 33.3333%;
  height: 385px;
  margin-top: 20px;
  padding: 10px 20px;

  h3 {
    font-size: 32rem;
    font-weight: 800;
    color: #fff;
    overflow: hidden;
    position: relative;
  }
  span {
    display: inline-block;
    transform: translateY(100%);
  }
  p {
    font-size: 18rem;
    padding-bottom: 4px;
    margin-top: 10px;
    overflow: hidden;
    position: relative;
    color: #fff;
  }

  @media screen and (max-width: 1440px) {
    height: 260px;
    padding: 0px 10px;

    h3 {
      font-size: 24rem;
    }
    p {
      font-size: 14rem;
      margin-top: 4px;
    }
  }
  @media screen and (max-width: 1240px) {
    width: 50%;
    h3 {
      font-size: 28rem;
    }
    p {
      margin-top: 8px;
      font-size: 16rem;
    }
  }

  .img_box {
    width: 100%;
    height: 100%;
    cursor: pointer;
    background-size: cover;
    background-position: center;
    position: relative;

    .info_box {
      width: 100%;
      height: 100%;
      text-align: center;
      background-color: #0f0f0fd1;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      opacity: 0;
    }
    &:hover .info_box {
      opacity: 1;
      transition: 0.2s ease all;
    }
    &:hover .info_box span {
      transform: translateY(0);
      transition: 0.8s cubic-bezier(0.895, 0, 0.18, 1);
    }

    .border_box {
      width: calc(100% - 20px);
      height: calc(100% - 20px);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .border {
        width: 100%;
        height: 100%;
        position: absolute;
        &::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 6px;
          height: 6px;
          border: 1px solid #fff;
          border-right-color: transparent;
          border-bottom-color: transparent;
        }
        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          right: 0;
          width: 6px;
          height: 6px;
          border: 1px solid #fff;
          border-left-color: transparent;
          border-top-color: transparent;
        }
      }
    }

    &:hover .border_box .border::after,
    &:hover .border_box .border::before {
      width: 100%;
      height: 100%;
      transition: 0.5s ease all;
    }
  }
`;
