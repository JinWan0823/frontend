// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import ListData from "../../db";
// import styled from "styled-components";
// import { useRef, useCallback } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
// import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight";
// import ButtonComponent from "./SIteBtn";
// import DotList from "../Contact/DotList";

// const carouselSettings = {
//   dots: true,
//   fade: true,
//   arrows: false,
// };

// export default function ListSlider() {
//   const slickRef = useRef<Slider | null>(null);

//   const previous = useCallback(() => {
//     if (slickRef.current) {
//       slickRef.current.slickPrev();
//     }
//   }, []);
//   const next = useCallback(() => {
//     if (slickRef.current) {
//       slickRef.current.slickNext();
//     }
//   }, []);

//   return (
//     <SliderWrap>
//       <Slider {...carouselSettings} ref={slickRef}>
//         {ListData.portfolio?.map((item, index) => (
//           <div key={index}>
//             <div className={`list-${item.id} list`}>
//               <div className="info">
//                 <h3>{item.title}</h3>
//                 <ul>
//                   <DotList text={item.date}></DotList>
//                   <DotList text={item.skill}></DotList>
//                   <DotList text={item.content}></DotList>
//                 </ul>
//                 <div className="btn-wrap">
//                   {item.site ? (
//                     <ButtonComponent btn={item.site} cate="site" />
//                   ) : (
//                     ""
//                   )}
//                   {item.github ? (
//                     <ButtonComponent btn={item.github} cate="Github" />
//                   ) : (
//                     ""
//                   )}

//                   {item.github01 ? (
//                     <ButtonComponent btn={item.github01} cate="Github01" />
//                   ) : (
//                     ""
//                   )}
//                   {item.github02 ? (
//                     <ButtonComponent btn={item.github01} cate="Github02" />
//                   ) : (
//                     ""
//                   )}
//                   {item.github03 ? (
//                     <ButtonComponent btn={item.github01} cate="Github03" />
//                   ) : (
//                     ""
//                   )}

//                   {item.notion ? (
//                     <ButtonComponent btn={item.notion} cate="notion" />
//                   ) : (
//                     ""
//                   )}
//                   {item.youtube ? (
//                     <ButtonComponent btn={item.youtube} cate="youtube" />
//                   ) : (
//                     ""
//                   )}
//                   {item.leef ? (
//                     <ButtonComponent btn={item.leef} cate="Site01" />
//                   ) : (
//                     ""
//                   )}
//                   {item.seoul ? (
//                     <ButtonComponent btn={item.seoul} cate="Site02" />
//                   ) : (
//                     ""
//                   )}
//                   {item.leef ? (
//                     <ButtonComponent btn={item.hotel} cate="Site03" />
//                   ) : (
//                     ""
//                   )}
//                   {item.leef ? (
//                     <ButtonComponent btn={item.cafe382} cate="Site04" />
//                   ) : (
//                     ""
//                   )}
//                   {item.leef ? (
//                     <ButtonComponent btn={item.cafegate} cate="Site05" />
//                   ) : (
//                     ""
//                   )}
//                   {item.leef ? (
//                     <ButtonComponent btn={item.lia} cate="Site06" />
//                   ) : (
//                     ""
//                   )}
//                   {item.leef ? (
//                     <ButtonComponent btn={item.skin} cate="Site07" />
//                   ) : (
//                     ""
//                   )}
//                   {item.leef ? (
//                     <ButtonComponent btn={item.ec} cate="Site08" />
//                   ) : (
//                     ""
//                   )}
//                   {item.leef ? (
//                     <ButtonComponent btn={item.jungwoo} cate="Site09" />
//                   ) : (
//                     ""
//                   )}
//                 </div>
//               </div>
//               <div className="list-img">
//                 <img src={item.thumb} alt={`${item.title}-img`} />
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//       <div className="slick-arrow-wrap">
//         <div className="prev slick-btn" onClick={previous}>
//           <FontAwesomeIcon icon={faAngleLeft} />
//         </div>
//         <div className="next slick-btn" onClick={next}>
//           <FontAwesomeIcon icon={faAngleRight} />
//         </div>
//       </div>
//     </SliderWrap>
//   );
// }

// const SliderWrap = styled.div`
//   width: 1440px;
//   margin: 80px auto;
//   padding: 20px 0px;
//   position: relative;

//   .slick-current {
//     z-index: 999999;
//   }

//   .list {
//     display: flex;
//     align-items: flex-start;
//     justify-content: space-between;
//   }

//   .info {
//     width: 45%;
//     padding: 20px 10px 0px;
//     h3 {
//       color: #07788c;
//       font-size: 70rem;
//     }
//     ul {
//       margin-top: 40px;
//     }
//   }

//   .list-img {
//     width: 50%;
//     height: 620px;
//     border-radius: 10px;
//     border: 2px solid #fff;
//     overflow-y: scroll;
//     &::-webkit-scrollbar {
//       width: 3px;
//     }
//     &::-webkit-scrollbar-thumb {
//       background: #b15e30;
//       border-radius: 10px;
//     }
//     &::-webkit-scrollbar-track {
//       background: #f8dccc;
//     }
//     img {
//       width: 100%;
//     }
//   }

//   .slick-dots {
//     position: absolute;
//     top: 0;
//     left: 0;
//     bottom: auto;
//     width: auto;
//     margin-left: 4px;
//     li {
//       margin: 0px;
//       button::before {
//         color: #fff;
//         opacity: 0.8;
//       }
//       &.slick-active button::before {
//         color: #07788c;
//         opacity: 1;
//       }
//     }
//   }

//   .slick-arrow-wrap {
//     position: absolute;
//     bottom: 20px;
//     left: 10px;
//     display: flex;
//   }

//   .slick-btn {
//     width: 60px;
//     height: 60px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     color: #fff;
//     background-color: #07788cab;
//     cursor: pointer;
//     &:nth-of-type(1) {
//       margin-right: 10px;
//     }

//     svg {
//       font-size: 40rem;
//     }
//   }

//   .btn-wrap {
//     margin-top: 30px;
//     display: flex;
//     flex-flow: row wrap;
//     a {
//       margin-top: 8px;
//     }
//     a:not(:nth-of-type(1)) {
//       margin-left: 10px;
//     }
//     a:nth-of-type(6) {
//       margin-left: 0px;
//     }
//   }

//   @media screen and (max-width: 1440px) {
//     width: 95%;
//     .info {
//       h3 {
//         font-size: 58rem;
//       }
//       li {
//         font-size: 18rem;
//         word-break: keep-all;
//       }
//     }

//     .btn-wrap {
//       width: 430px;
//       a:nth-of-type(4),
//       a:nth-of-type(7) {
//         margin-left: 0px;
//       }
//       a:nth-of-type(6) {
//         margin-left: 10px;
//       }
//     }

//     .slick-btn {
//       width: 45px;
//       height: 45px;
//       svg {
//         font-size: 20rem;
//       }
//     }
//   }
// `;
