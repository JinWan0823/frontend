import styled from "styled-components";
import TabMenu from "./TabMenu";
import ProjectCard from "./ProjectCard";
import ListData from "../../db";
import { useEffect, useState } from "react";


export interface CardProps {
  id:number,
  title:string,
  thumb:string,
  content:string,
  date:string,
  github:string,
  notion:string,
  site:string,
  skill:string,
  youtube:string,
  category:string
}



export default function ProjectWrap (){
  const [category,setCategory] = useState("All");
  const [filteredData, setFilteredData] = useState<CardProps[]>([]);

  const portfolioData: CardProps[] = ListData.portfolio as CardProps[];
  useEffect(()=>{
    console.log(category)
    if(category === "All") {
      setFilteredData(portfolioData);
    } else {
      const filteredPortfolio = portfolioData.filter((item)=>item.category === category)
      setFilteredData(filteredPortfolio)
    }
  },[category,portfolioData])

  return (
    <Project>
      <h1>My Project.</h1>
      <div className="project_inner">
        <TabMenu setCategory={setCategory}/>
        <CardWrap>
          {filteredData.map((item,index)=> (
            <ProjectCard key={index} item={item} />
          ))}
        </CardWrap>
      </div>
    </Project>
)
}

const Project = styled.div`
  padding:100px 20px;
  h1 {
    font-size:35rem;
    text-align:center;
    color:#b15e30
  }
`

const CardWrap = styled.ul`
  width:100%;
  display:flex;
  flex-flow:row wrap;
  align-content:center;
  justify-content:flex-start;
  align-items:flex-start;
  transition:.5s ease all;
`