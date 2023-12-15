import React, { useRef, useEffect } from "react";
import { styled } from "styled-components";
import Slider from "react-slick";
import HotCard from "../Hotitem/HotCard";
import ProductCard from "../../../components/ProductCard";

const StyledSlide = styled(Slider)`
  margin-bottom: -40px;
  width: 100%;

  .slick-list {
    width: 520px;
    height: 100%;
    overflow: hidden;
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


function Carousel({newProducts}) {
  const slickRef = useRef(null);

  useEffect(() => {
    const Track = slickRef.current.innerSlider.list; // innerSlider를 통해 slick의 내부 요소에 접근
    Track.style.transform = "translate3d(-20px, 0px, 0px)";
  }, [slickRef]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    initialSlide: 1,
  };

  return (
    <div>
      <StyledSlide ref={slickRef} {...settings}>
        {newProducts.map((item) => (
          // Use the properties of the heart.product object in the ProductCardSmall component
          <ProductCard
            key={item.productNumber}
            name={item.productTitle}
            price={item.productPrice}
            stocks={item.productStock}
            imageUrl={item.productImageUrl}
            isHeart={item.isHeart}
            onCartClick={() => this.handleCartClick(item)}
            onHeartClick={() => this.handleHeartClick(item)}
          />
        ))}
      </StyledSlide>
    </div>
  );
}

export default Carousel;
