import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";


const Container = styled.div`
  width: 100%;
`;

const ProductHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  align-self: stretch;
`;

const ProductBottom = styled.div`
display: flex;
justify-content: space-between;
align-items: baseline;
align-self: stretch;
`;

const ProductMid = styled.div`
display: flex;
align-items: baseline;
gap: 8px;
`

const ProductCard = styled.div`
  display: flex;
  gap: 16px;

  width: 100%;
  padding: 8px;
  position: relative;
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  border: 1px solid #a0a0a0;
  border-radius: 12px;
  flex-shrink: 0; // 이걸로 이미지가 찌그러지는 것 방지!
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 12px;
`;

const ProductName = styled.h3`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
`;

const SaledPrice = styled.span`
  color: #000;

  text-align: center;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 91.667% */
  letter-spacing: -0.408px;
`;

const OgPrice = styled.span`
  color: #A0A0A0;

  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 110% */
  letter-spacing: -0.408px;
  text-decoration-line: line-through;
`;

const Stocks = styled.span`
  color: #0a86f9;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
`;

const HeartBtn = styled.button`
  bottom: 40px;
  right: 12px;

  border: none;
  background-color: inherit;
`;

const HeartIcon = styled(FontAwesomeIcon)`
  width: 20px;
  height: 20px;
  color: #d61818;
`;

const CartBtn = styled.button`
  right: 0px;
  bottom: -2px;

  border: none;
  background-color: inherit;
`;

const CartIcon = styled(FontAwesomeIcon)`
  width: 24px;
  height: 24px;
`;

/*
const DeleteBtn = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;

  border: none;
  background-color: inherit;
  cursor: pointer;

  &:hover {
    color: darkred; 
  }
`;
*/

interface CartProductProps {
  name: string;
  price: number;
  stocks: number;
  imageUrl: string;
  }

/*{name}*/

function CartProduct({ name, price, stocks, imageUrl, }: CartProductProps) {

  console.log('Received imageUrl:', imageUrl);

  return (
    <Container>
      <ProductCard>
      <Img src={imageUrl} alt={name} />
        <ProductInfo>
          <ProductHeader>
            <ProductName>아사히생맥주</ProductName>
            <HeartBtn>
              <HeartIcon icon={faHeart as IconProp}></HeartIcon>
            </HeartBtn>
          </ProductHeader>
          <ProductMid>
            <SaledPrice>2,100원</SaledPrice>
            <OgPrice>3,600원</OgPrice>
          </ProductMid>
          <ProductBottom>
            <Stocks>{`${stocks}개 남음`}</Stocks>
            <CartBtn>
              <CartIcon icon={faCartShopping as IconProp}></CartIcon>
            </CartBtn>
          </ProductBottom>
        </ProductInfo>
      </ProductCard>
    </Container>
  );
}

export default CartProduct;
