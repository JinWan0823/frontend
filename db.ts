import Triptogether from "./src/assets/slideImg/triptogether.png";
import FaceMaker from "./src/assets/slideImg/facemaker.png";
import Arum from "./src/assets/slideImg/karum.png";
import OliveRent from "./src/assets/slideImg/rentcar.png";
import Nengtul from "./src/assets/slideImg/nengtul.png";
import Toy from "./src/assets/toyproject.png";
import Web from "./src/assets/slideImg/web.png";

const ListData = {
  portfolio: [
    {
      id: 1,
      title: "TEAM NENGTUL",
      thumb: Nengtul,
      content:
        "냉장고를 털어줘는 팀 프로젝트로 진행한 음식 레시피 추천 및 공유 커뮤니티 서비스입니다. 자신이 가진 재료를 이용해 맞춤 음식 레시피를 추천합니다. 디자인, 로그인, 정보관리, 재료검색, 레시피관리 등을 담당했습니다. 서버 비용 문제로 유튜브 동영상 참고 부탁드립니다.",
      date: "2023-07-08 ~ 2023-08-16",
      github: "https://github.com/nengtul/nengtul-frontend",
      notion:
        "https://sapphire-loaf-f04.notion.site/3f81f4b39c434eabbfa1dc28c4167988?pvs=4",
      site: "https://nengtul-frontend-iota.vercel.app/",
      skill: "React / TypeScript / Redux-persist / Styled-components",
      youtube: "https://www.youtube.com/watch?v=nAZUx73mwVU&t=71s",
    },
    {
      id: 2,
      title: "TRIP TOGETHER",
      thumb: Triptogether,
      content:
        "TripTogether 프로젝트는 국문 관광 서비스 api를 이용한 지역별 여행지, 축제 정보 제공 서비스 웹입니다. Firebase를 이용해 로그인 정보는 contextApi로 관리하고 여행지 정보를 사용자가 공유할 수 있는 커뮤니티를 제공합니다.",
      skill: "React / TypeScript / TailwindCss / Firebase",
      date: "2023-06-01 ~ 2023-07-10",
      github: "https://github.com/JinWan0823/tripTogether",
      site: "https://trip-together-apw04bp2z-jinwan0823.vercel.app/",
      youtube: "https://www.youtube.com/watch?v=ekboLw2p_2M",
      notion:
        "https://sapphire-loaf-f04.notion.site/Trip-Together-9b19a025516e465590ae4c824357f21c?pvs=4",
    },
    {
      id: 3,
      title: "FACE MAKER",
      thumb: FaceMaker,
      skill: "JavaScript / Jquery / PHP / MySql",
      content:
        "그누보드/PHP를 이용한 웹에이전시 홈페이지입니다. 기존 그누보드 테마 판매만 진행하던 사이트와 별도로 주문 제작을 위하여 100% 담당하여 진행한 신규 홈페이지입니다.",
      date: "2022-08 ~ 2022-09",
      site: "https://face-maker.co.kr/",
    },
    {
      id: 4,
      title: "OLIVE RENTCAR",
      thumb: OliveRent,
      skill: "JavaScript / Jquery / PHP / MySql",
      content:
        "mySql을 이용하여 차량 db를 저장하고 사용자와 관리자 맞춤 게시판을 제작한 홈페이지입니다. 관리자의 승인 없이는 게시글이 페이지에 노출되지 않습니다.",
      date: "2022-10 ~ 2022-11",
      site: "https://dhksl823.iwinv.net/rent/",
    },
    {
      id: 5,
      title: "SUPER MODEL ARUM",
      skill: "JavaScript / Jquery / PHP / MySql",
      thumb: Arum,
      date: "2022-06-10 ~ 2022-07-29",
      content:
        "클라이언트 요청에 맞춰 디자인하고 웹표준을 준수하며 반응형으로 제작한 홈페이지입니다.",
      site: "https://ksarum.com/",
    },
    {
      id: 6,
      title: "TOY PROJECT",
      skill: "Toy Project02 - 계산기, 에디터, 3d Carousel, 무한스크롤 등",
      thumb: Toy,
      date: "Toy Project01 - 화살표 게임, 마우스 컨트롤 게임",

      content:
        "Toy Project03 - 아날로그 시계, Star Rating, Date picker , 뉴스api 무한스크롤",
      github01: "https://github.com/JinWan0823/gamePage",
      github02: "https://github.com/JinWan0823/ToyProject",
      github03: "https://github.com/JinWan0823/js-ToyProject",
    },
    {
      id: 7,
      title: "RESPONSIVE WEB",
      date: "기존 홈페이지를 개선하고 웹표준을 준수해 만든 반응형 홈페이지입니다.",
      skill: "잎사귀치과 / 시의원 / 파라다이스 호텔 / 카페 읍천리 / 카페게이트",
      content: "리아한의원 / 퓨린피부과 / E&C / 정우그룹",
      thumb: Web,
      leef: "https://lemonjw2.iwinv.net/lm02/",
      seoul: "https://lemonjw2.iwinv.net/lm03/",
      hotel: "https://lemonjw2.iwinv.net/lm04/",
      cafe382: "https://lemonjw2.iwinv.net/lm05/",
      cafegate: "https://lemonjw2.iwinv.net/lm06/",
      lia: "https://lemonjw2.iwinv.net/lm07/",
      skin: "https://lemonjw2.iwinv.net/lm09/",
      ec: "https://lemonjw2.iwinv.net/lm10/",
      jungwoo: "https://lemonjw2.iwinv.net/lm13",
    },
  ],
};
export default ListData;
