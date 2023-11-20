import styled from "styled-components";
import TabMenu from "./TabMenu";
import ProjectCard from "./ProjectCard";
import ListData from "../../db";
import { useEffect, useState } from "react";

export interface CardProps {
  id: number;
  title: string;
  thumb: string;
  content: string;
  date: string;
  github: string;
  notion: string;
  site: string;
  skill: string;
  youtube: string;
  mobile: boolean;
  category: string;
  work: string[];
}

export default function ProjectWrap() {
  const [category, setCategory] = useState("All");
  const [filteredData, setFilteredData] = useState<CardProps[]>([]);

  const portfolioData: CardProps[] = ListData.portfolio as CardProps[];
  useEffect(() => {
    if (category === "All") {
      setFilteredData(portfolioData);
    } else if (category === "Responsive-web") {
      const mobile = portfolioData.filter((item) => item.mobile);
      setFilteredData(mobile);
    } else {
      const filteredPortfolio = portfolioData.filter(
        (item) => item.category === category
      );
      setFilteredData(filteredPortfolio);
    }
  }, [category, portfolioData]);

  return (
    <Project>
      <h1>My Project.</h1>
      <div className={`project_inner`}>
        <TabMenu setCategory={setCategory} />
        <CardWrap className="card_wrap">
          {filteredData.map((item, index) => (
            <ProjectCard key={index} item={item} />
          ))}
        </CardWrap>
      </div>
    </Project>
  );
}

const Project = styled.div`
  padding: 100px 20px;
  border-bottom: 1px solid rgb(221, 221, 221);
  h1 {
    font-size: 35rem;
    text-align: center;
    color: #b15e30;
  }
`;

const CardWrap = styled.ul`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  justify-content: flex-start;
  align-items: flex-start;
  transition: 0.5s ease all;

  &.fade-in {
    opacity: 1;
    transform: translateY(0);
  }

  &.initial-state {
    opacity: 0;
    transform: translateY(-20px);
  }
`;
