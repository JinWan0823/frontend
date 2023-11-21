import styled from "styled-components";
import ProgressBar from "./ProgressBar";

export default function SkillWrap() {
  return (
    <SkillWrapper>
      <div className="skill_wrap">
        <h2>Skills</h2>
        <ul className="progress_wrap">
          <ProgressBar title={"react.js"} percent={80} color={"#83A2FF"} />
          <ProgressBar title={"Typescript"} percent={70} color={"#B4BDFF"} />
          <ProgressBar title={"Javascript"} percent={80} color={"#eabe7e"} />
          <ProgressBar title={"JQuery"} percent={90} color={"#FFD28F"} />
          <ProgressBar title={"Html"} percent={90} color={"#27e5e8"} />
          <ProgressBar title={"CSS"} percent={85} color={"#e78f7b"} />
        </ul>
      </div>
    </SkillWrapper>
  );
}

const SkillWrapper = styled.div`
  padding: 110rem 40rem;
  border-bottom: 1px solid #ddd;
  .skill_wrap {
    display: flex;
    h2 {
      font-size: 30rem;
      width: 140px;
    }
  }
  .progress_wrap {
    padding-top: 10rem;
    width: 100%;
    li:not(:nth-of-type(1)) {
      margin-top: 36px;
    }
  }
`;
