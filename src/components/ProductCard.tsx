import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const Container = styled.div`
  width: 160px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  position: relative;
`;

const Image = styled.img`
  width: 160px;
  height: 160px;
  border: 1px solid rgba(160, 160, 160, 0.5);
  border-radius: 12px;
`;

const HeartBtn = styled.button`
  position: absolute;
  right: 4px;
  top: 128px;

  border: none;
  background-color: inherit;
`;

const HeartIcon = styled(FontAwesomeIcon)`
  width: 20px;
  height: 20px;
  color: #d61818;
`;

const Info = styled.div`
  display: flex;
  padding: 0px 4px;
  justify-content: space-between;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ProductName = styled.h4`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 110% */
  letter-spacing: -0.408px;
`;

const Price = styled.span`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 137.5% */
  letter-spacing: -0.408px;
`;

const Stocks = styled.span`
  color: #0a86f9;
  text-align: center;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 183.333% */
  letter-spacing: -0.408px;
`;

const CartBtn = styled.button`
  border: none;
  background-color: inherit;
  width: 20px;
  height: 20px;

  position: relative;
`;

const CartIcon = styled(FontAwesomeIcon)`
  width: 20px;
  height: 20px;

  position: absolute;
  right: 0;
  top: 0;
`;

interface ProductCardProps {
  name: string;
  price: number;
  stocks: number;
  imageUrl: string;
}

// <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
// <FontAwesomeIcon icon="fa-solid fa-heart" /> // heart-filled
// <FontAwesomeIcon icon="fa-regular fa-heart" /> // heart-outlined
function ProductCard({ name, price, stocks, imageUrl }: ProductCardProps) {
  return (
    <Container>
      <Image src={imageUrl} alt={name} />
      <HeartBtn>
        <HeartIcon icon={faHeart as IconProp} />
      </HeartBtn>
      <Info>
        <TextBox>
          <ProductName>{name}</ProductName>
          <Price>{`${price}원`}</Price>
          <Stocks>{`${stocks}개 남음`}</Stocks>
        </TextBox>
        <CartBtn>
          <CartIcon icon={faCartShopping as IconProp} />
        </CartBtn>
      </Info>
    </Container>
  );
}

export default ProductCard;
