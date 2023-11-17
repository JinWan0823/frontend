import styled from "styled-components"
import { GlobalStyleProps } from "../GlobalStyle"
import { useState } from "react";

interface TabMenuProps {
  setCategory : React.Dispatch<React.SetStateAction<string>>
}

export default function TabMenu({setCategory}:TabMenuProps){
  
  const [activeCategory,setActiveCategory] = useState("All");
  const handleCategory = (category : string) => {
    setCategory(category);
    setActiveCategory(category);
  }
  
  return <TabUl>
    <li className={activeCategory === "All" ? "on" : ""} onClick={()=>handleCategory("All")}>
      ALL
    </li>
    <li className={activeCategory === "Front-end" ? "on" : ""} onClick={()=>handleCategory("Front-end")}>Front-end</li>
    <li className={activeCategory === "Back-end" ? "on" : ""} onClick={()=>handleCategory("Back-end")}>Back-end</li>
    <li className={activeCategory === "Responsive-web" ? "on" : ""} onClick={()=>handleCategory("Responsive-web")}>Responsive Web</li>
    
  </TabUl>
}

const TabUl = styled.ul<GlobalStyleProps>`
  display:flex;
  align-items:center;
  justify-content:center;
  margin-top:28px;
  li {
    font-size:16rem;
    margin:0px 6px;
    padding:10px 14px;
    border:1px solid ${(props) => props.color};
    border-radius:8px;
    cursor:pointer;
  }
  li.on {
    color:#fff;
    background-color:#b15e30;
  }
`