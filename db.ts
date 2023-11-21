import Triptogether from "./src/assets/thumb/trip_thumb.png";
import FaceMaker from "./src/assets/thumb/face_thumb.png";
import Arum from "./src/assets/thumb/arum_thumb.png";
import OliveRent from "./src/assets/thumb/rent_thumb.png";
import Nengtul from "./src/assets/thumb/nengtul_thumb.png";
import Cafe382 from "./src/assets/thumb/382_thumb.png";
import Menu from "./src/assets/thumb/menu_thumb.png";
import Company from "./src/assets/thumb/enc_thumb.png";
import Pureen from "./src/assets/thumb/pureen_thumb.png";
import Jungwoo from "./src/assets/thumb/jungwoo_thumb.png";
import Chat from "./src/assets/thumb/chat_thumb.png";

const ListData = {
  portfolio: [
    {
      id: 1,
      title: "TEAM NENGTUL",
      thumb: Nengtul,
      category: "Front-end",
      mobile: false,
      work: [
        "디자인 작업 (100%)",
        "로그인/유저 정보 관리, 레시피 관리 등 채팅,카카오맵 제외 100%",
      ],
      content:
        "냉장고를 털어줘는 팀 프로젝트로 진행한 음식 레시피 추천 및 공유 커뮤니티 서비스입니다. 자신이 가진 재료를 이용해 맞춤 음식 레시피를 추천합니다. 디자인, 로그인, 정보관리, 재료검색, 레시피관리 등을 담당했습니다. 서버 비용 문제로 유튜브 동영상 참고 부탁드립니다.",
      date: "2023.07 - 2023.08",
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
      mobile: false,
      work: [
        "디자인 작업 (100%)",
        "퍼블리싱 (100%)",
        "국문관광정보 Api, firebase crud 게시판 , 유저 정보 관리 개발 (100%)",
      ],
      category: "Front-end",
      content:
        "TripTogether 프로젝트는 국문 관광 서비스 api를 이용한 지역별 여행지, 축제 정보 제공 서비스 웹입니다. Firebase를 이용해 로그인 정보는 contextApi로 관리하고 여행지 정보를 사용자가 공유할 수 있는 커뮤니티를 제공합니다.",
      skill: "React / TypeScript / TailwindCss / Firebase",
      date: "2023.06 - 2023.07",
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
      category: "Front-end",
      mobile: true,
      work: [
        "디자인 작업 (100%)",
        "퍼블리싱 (100%)",
        "php 게시판 커스텀 개발 (100%)",
      ],
      skill: "JavaScript / Jquery / PHP ",
      content:
        "그누보드/PHP를 이용한 웹에이전시 홈페이지입니다. 기존 그누보드 테마 판매만 진행하던 사이트와 별도로 주문 제작을 위하여 100% 담당하여 진행한 신규 홈페이지입니다.",
      date: "2022.08 - 2022.09",
      site: "https://face-maker.co.kr/",
    },
    {
      id: 4,
      title: "Group Chat",
      category: "Back-end",
      mobile: false,
      work: ["디자인 작업 (진행중)", "socket.io 개발 (진행중)"],
      skill: "Socket.IO / MongoDB / React",
      thumb: Chat,
      date: "2023.11 - 진행중",
      content:
        "웹소켓을 이용한 유저간 실시간 그룹채팅을 목적으로 개발중인 프로젝트입니다. 빠른 시일내에 완성하여 업로드하겠습니다.",
      site: "",
    },
    {
      id: 5,
      title: "CAFE MAP",
      category: "Front-end",
      mobile: true,
      work: [
        "디자인 작업 (100%)",
        "퍼블리싱 (100%)",
        "매장 등록, 카카오맵 Pin 개발 (100%)",
      ],
      skill: "JavaScript / Jquery / PHP / MySql",
      thumb: Menu,
      date: "2022.05",
      content:
        "그누보드 제공 board php를 커스텀해 매장 등록 페이지를 제작하였습니다.",
      site: "https://lemonjw2.iwinv.net/lm06/bbs/board.php?bo_table=map",
    },
    {
      id: 6,
      title: "OLIVE RENTCAR",
      thumb: OliveRent,
      mobile: true,
      work: ["디자인 작업 (100%)", "퍼블리싱 (100%)", "php 커스텀 개발 (100%)"],
      category: "Front-end",
      skill: "JavaScript / Jquery / PHP / MySql",
      content:
        "mySql을 이용하여 차량 db를 저장하고 사용자와 관리자 맞춤 게시판을 제작한 홈페이지입니다. 관리자의 승인 없이는 게시글이 페이지에 노출되지 않습니다.",
      date: "2022.10 - 2022.11",
      site: "https://dhksl823.iwinv.net/rent/",
    },
    {
      id: 7,
      title: "SUPER MODEL ARUM",
      category: "Front-end",
      mobile: true,
      work: ["디자인 작업 (100%)", "퍼블리싱 (100%)", "php 커스텀 개발 (100%)"],
      skill: "JavaScript / Jquery / PHP",
      thumb: Arum,
      date: "2022.06 - 2022.07",
      content:
        "클라이언트 요청에 맞춰 디자인하고 웹표준을 준수하며 반응형으로 제작한 홈페이지입니다.",
      site: "https://ksarum.com/",
    },
    {
      id: 8,
      title: "CAFE 382",
      category: "Front-end",
      mobile: true,
      work: ["디자인 작업 (100%)", "퍼블리싱 (100%)"],
      skill: "JavaScript / Jquery / PHP ",
      thumb: Cafe382,
      date: "2022.05",
      content:
        "웹표준을 준수하며 반응형으로 기존 홈페이지를 리뉴얼 제작하였습니다.",
      site: "https://lemonjw2.iwinv.net/lm05/",
    },
    {
      id: 9,
      title: "E&C COMPANY",
      category: "Front-end",
      mobile: true,
      work: ["디자인 작업 (100%)", "퍼블리싱 (100%)"],
      skill: "JavaScript / Jquery / PHP",
      thumb: Company,
      date: "2022.06",
      content: "웹 표준을 준수하여 반응형으로 제작한 기업형 홈페이지입니다.",
      site: "https://lemonjw2.iwinv.net/lm10/",
    },
    {
      id: 10,
      title: "PUREEN SKIN CLINIC",
      category: "Front-end",
      mobile: true,
      work: ["디자인 작업 (100%)", "퍼블리싱 (100%)"],
      skill: "JavaScript / Jquery / PHP ",
      thumb: Pureen,
      date: "2022.04",
      content:
        "웹표준을 준수하며 반응형으로 기존 홈페이지를 리뉴얼 제작하였습니다.",
      site: "https://lemonjw2.iwinv.net/lm09/",
    },
    {
      id: 11,
      title: "JUNGWOO GROUP",
      category: "Front-end",
      mobile: true,
      work: ["디자인 작업 (100%)", "퍼블리싱 (100%)"],
      skill: "JavaScript / Jquery / PHP",
      thumb: Jungwoo,
      date: "2022.04",
      content: "웹 표준을 준수하여 반응형으로 제작한 기업형 홈페이지입니다.",
      site: "https://lemonjw2.iwinv.net/lm13/",
    },
  ],
};
export default ListData;
