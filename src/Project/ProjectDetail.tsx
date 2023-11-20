import styled from "styled-components";
import { CardProps } from "./ProjectWrap";
import ListData from "../../db";
import { useParams } from "react-router-dom";
import ProjectInfo from "./ProjectInfo";
import ProjectView from "./ProjectView";
import ProjectNavi from "./ProjectNavi";

export default function ProjectDetail() {
  const { Id } = useParams();
  const portfolioData: CardProps[] = ListData.portfolio as CardProps[];
  const data = portfolioData[Number(Id)];
  return (
    <Detail>
      <h2>{data.title}</h2>
      <ProjectInfo data={data} />
      <ProjectView data={data} />
      <ProjectNavi data={data} />
    </Detail>
  );
}

const Detail = styled.div`
  padding: 120px 60px 160px;
  h2 {
    font-size: 60rem;
  }
`;
