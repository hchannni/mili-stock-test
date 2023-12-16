import React, { useRef, useEffect } from "react";
import { styled } from "styled-components";
import Slider from "react-slick";
import HotCard from "../Hotitem/HotCard";

const Container = styled.div`
  height: 216px;
  padding: 8px 0px 8px 20px;
  overflow: hidden;
  `


const StyledSlide = styled(Slider)`
  margin-bottom: -40px;
  width: 100%;

  .slick-list {
    width: 520px;
    height: 100%;
    top: -30px;
  }

  .slick-slider {
    display: flex;
  }

  .slick-track {
    display: flex;
    align-items: flex-start;
    height: 100%;
    gap: 4px;
  }

  .slick-dots {
    display: none !important;
  }

  .slick-arrow {
    padding: 4px 6px;
    transform: translate(30px, 150px);
    background-color: transparent;
    color: white;
    border-radius: 3px;
    cursor: pointer;
  }

  .slick-prev {
    top: -20px;
    right: -800px;
    cursor: pointer;
    z-index: 100;
  }

  .slick-next {
    top: -20px;
    left: 810px;
    cursor: pointer;
  }
`;

function Carousel() {
  const slickRef = useRef(null);

  useEffect(() => {

    const Track = slickRef.current.innerSlider.list; // innerSlider를 통해 slick의 내부 요소에 접근
    Track.style.transform = 'translate3d(-20px, 0px, 0px)';
  }, [slickRef]);


  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: false,
    variableWidth: true,
    initialSlide: 0,
  }

  return (
    <Container>
      <StyledSlide ref={slickRef} {...settings}>
        <HotCard />
        <HotCard />
        <HotCard />
        <HotCard />
      </StyledSlide>
    </Container>
  );
}

export default Carousel;