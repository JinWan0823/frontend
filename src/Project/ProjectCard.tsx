import styled from "styled-components"
import { CardProps } from "./ProjectWrap";


interface ProjectCardProps {
  item: CardProps;
}

export default function ProjectCard({item}:ProjectCardProps){
  return (
    <Card>
      <div className="img_box" style={{backgroundImage:( `url(${item.thumb})`)}}>
        <p>{item.title}</p>
      </div>
    </Card>
  )
}

const Card = styled.li`
  width:33.3333%;
  height:320px;
  margin-top:20px;
  padding:10px 20px;
  .img_box{
    width:100%;
    height:100%;
    background-size:cover;
    border:2px solid #fff;
  }
  p {
    font-size:16rem;
  }
`