import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ListData from "../../db";
import styled from "styled-components";
import { useRef, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight";
import ButtonComponent from "./SIteBtn";

const carouselSettings = {
  dots: true,
  fade: true,
  arrows: false,
};

export default function ListSlider() {
  const slickRef = useRef<Slider | null>(null);

  const previous = useCallback(() => {
    if (slickRef.current) {
      slickRef.current.slickPrev();
    }
  }, []);
  const next = useCallback(() => {
    if (slickRef.current) {
      slickRef.current.slickNext();
    }
  }, []);

  return (
    <SliderWrap>
      <Slider {...carouselSettings} ref={slickRef}>
        {ListData.portfolio?.map((item, index) => (
          <div key={index}>
            <div className={`list-${item.id} list`}>
              <div className="info">
                <h3>{item.title}</h3>
                <ul>
                  <li>
                    <span className="circle"></span> {item.date}
                  </li>
                  <li>
                    <span className="circle"></span> {item.skill}
                  </li>
                  <li>
                    <span className="circle"></span> {item.content}
                  </li>
                </ul>
                <div className="btn-wrap">
                  {item.site ? (
                    <ButtonComponent btn={item.site} cate="site" />
                  ) : (
                    ""
                  )}
                  {item.github ? (
                    <ButtonComponent btn={item.github} cate="github" />
                  ) : (
                    ""
                  )}
                  {item.notion ? (
                    <ButtonComponent btn={item.notion} cate="notion" />
                  ) : (
                    ""
                  )}
                  {item.youtube ? (
                    <ButtonComponent btn={item.youtube} cate="youtube" />
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="list-img">
                <img src={item.thumb} alt={`${item.title}-img`} />
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="slick-arrow-wrap">
        <div className="prev slick-btn" onClick={previous}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </div>
        <div className="next slick-btn" onClick={next}>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </div>
    </SliderWrap>
  );
}

const SliderWrap = styled.div`
  width: 1440px;
  margin: 80px auto;
  padding: 20px 0px;
  position: relative;

  .slick-current {
    z-index: 999999;
  }

  .list {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  .info {
    width: 45%;
    padding: 20px 10px 0px;
    h3 {
      color: #07788c;
      font-size: 70rem;
    }
    ul {
      margin-top: 40px;
    }
    li {
      display: flex;
      align-items: flex-start;
      font-size: 20rem;
      color: #fff;
      margin-top: 12px;
      word-break: keep-all;
      line-height: 1.4;
      span.circle {
        display: block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #07788c;
        margin-right: 18px;
        flex-shrink: 0;
        margin-top: 10px;
      }
    }
  }

  .list-img {
    width: 50%;
    height: 620px;
    border-radius: 10px;
    border: 2px solid #fff;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 3px;
    }
    &::-webkit-scrollbar-thumb {
      background: #b15e30;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-track {
      background: #f8dccc;
    }
    img {
      width: 100%;
    }
  }

  .slick-dots {
    position: absolute;
    top: 0;
    left: 0;
    bottom: auto;
    width: auto;
    margin-left: 4px;
    li {
      margin: 0px;
      button::before {
        color: #fff;
        opacity: 0.8;
      }
      &.slick-active button::before {
        color: #07788c;
        opacity: 1;
      }
    }
  }

  .slick-arrow-wrap {
    position: absolute;
    bottom: 20px;
    left: 10px;
    display: flex;
  }

  .slick-btn {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background-color: #07788cab;
    cursor: pointer;
    &:nth-of-type(1) {
      margin-right: 10px;
    }
    svg {
      font-size: 40rem;
    }
  }

  .btn-wrap {
    margin-top: 30px;
    display: flex;
    flex-flow: row wrap;
    a:not(:nth-of-type(1)) {
      margin-left: 10px;
    }
  }
`;
