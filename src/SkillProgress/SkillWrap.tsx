import styled from "styled-components";
import ProgressBar from "./ProgressBar";

export default function SkillWrap() {
  return (
    <SkillWrapper>
      <div className="skill_wrap">
        <h2>Skills</h2>
        <ul className="progress_wrap">
          <ProgressBar title={"react.js"} percent={80} color={"#fcb9aa"} />
          <ProgressBar title={"typescript"} percent={70} color={"#ffdbcc"} />
          <ProgressBar title={"javascript"} percent={80} color={"#eceae4"} />
          <ProgressBar title={"JQuery"} percent={90} color={"#a2e1db"} />
          <ProgressBar title={"Html"} percent={90} color={"#55cbcd"} />
          <ProgressBar title={"CSS"} percent={85} color={"#fcb9aa"} />
        </ul>
      </div>
    </SkillWrapper>
  );
}

const SkillWrapper = styled.div`
  padding: 110rem 40rem;
  border-bottom:1px solid #ddd;
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
