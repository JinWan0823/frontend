import { CardProps } from "./ProjectWrap";
import { DetailWrap } from "./ProjectDetailWrap";
import styled from "styled-components";

interface ProjectInfoProps {
  data: CardProps;
}

export default function ProjectView({ data }: ProjectInfoProps) {
  return (
    <DetailWrap>
      <h4>View.</h4>
      <ImgBox>
        <iframe
          title="Project View"
          width="100%"
          height="100%"
          src={data.site} // 이 부분을 data.site 또는 다른 소스로 바꿔주세요
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </ImgBox>
    </DetailWrap>
  );
}

const ImgBox = styled.div`
  width: calc(100% - 200px);
  height: 520px;
  border-radius: 20px;
  overflow: hidden;

  @media screen and (max-width: 1240px) {
    width: 100%;
  }
`;
