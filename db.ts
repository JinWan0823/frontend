import Triptogether from "./src/assets/triptogether.png";
import FaceMaker from "./src/assets/facemaker.png";
import Arum from "./src/assets/arum.png";
import OliveRent from "./src/assets/rent.png";

const ListData = {
  portfolio: [
    {
      id: 1,
      title: "TEAM NENGTUL",
      thumb: Triptogether,
      content:
        "냉장고를 털어줘 프로젝트는 사용자들이 자신이 가지고 있는 재료를 이용해 다른 사람들이 올린 레시피의 재료들과 매칭 시켜 음식 레시피를 추천해주는 서비스입니다. 추가로 음식 재료가 남는다면 주변 사람들과 공유할 수 있는 커뮤니티를 제공합니다.",
      date: "2023-07-08 ~ 2023-08-16",
      github: "https://github.com/nengtul/nengtul-frontend",
      notion:
        "https://spice-expert-177.notion.site/5ecad1dcc16c4df5b81c18395a21e6bc?pvs=4",
      site: "https://nengtul-frontend-iota.vercel.app/",
      skill: "React / TypeScript / Redux-persist / Styled-components",
    },
    {
      id: 2,
      title: "TRIP TOGETHER",
      thumb: FaceMaker,
      content: "~~~~~~~~~~~~~~~~~~~~~~~~",
      date: "2023-06-01 ~ 2023-07-10",
      gitub: "https://github.com/JinWan0823/tripTogether",
      site: "",
    },
    {
      id: 3,
      title: "FACE MAKER",
      thumb: Arum,
      content: "~~~~~~~~~~~~~~~~~~~~~~~~",
    },
    {
      id: 4,
      title: "OLIVE RENTCAR",
      thumb: OliveRent,
      content: "~~~~~~~~~~~~~~~~~~~~~~~~",
    },
  ],
};
export default ListData;
