import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faHeart, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const TotalPrice = styled.span`
  position: absolute;
  bottom: 12px;
  right: 12px;
  font-size: 18px;
  font-weight: bold;
  color: #000;
`;

const Container = styled.div`
  width: 100%;
`;

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

const Price = styled.span`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
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
  position: absolute;
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

const DeleteBtn = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;

  border: none;
  background-color: inherit;
  cursor: pointer;

  &:hover {
    color: darkred; /* Change the color on hover */
  }
`;

const DeleteIcon = styled(FontAwesomeIcon)`
  width: 20px;
  height: 20px;
`;

const CountInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Counter = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 2px;
  border-radius: 20px;
  border: 2px solid #d3d3d3;
`;

const MinusBtn = styled.button`
  border: none;
  background-color: inherit;
  width: 24px;
  height: 24px;
  border-radius: 50%;

  &:hover {
    color: darkred; /* Change the color on hover */
  }
`;

const PlusBtn = styled.button`
  border: none;
  background-color: inherit;
  width: 24px;
  height: 24px;
  border-radius: 50%;

  &:hover {
    color: darkred; /* Change the color on hover */
  }
`;

const Count = styled.span`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  padding: 0 24px;
`;


interface CartProductProps {
  name: string;
  price: number;
  stocks: number;
  count: number;
  imageUrl: string;
  onDelete?: () => void;
  increaseCount?: () => void;
  decreaseCount?: () => void;
  liked?: boolean;
}

function CartProduct({ name, price, stocks, count, imageUrl, onDelete, increaseCount, decreaseCount, liked }: CartProductProps) {

  console.log('Received imageUrl:', imageUrl);

  return (
    <Container>
      <ProductCard>
      <Img src={imageUrl} alt={name} />
        <ProductInfo>
          <ProductName>{name}</ProductName>
          <Price>{`${price}원`}</Price>
          <Stocks>{`${stocks}개 남음`}</Stocks>
          <CountInfo>
            <Counter>
              <MinusBtn onClick={decreaseCount}>
                <FontAwesomeIcon icon={faMinus as IconProp} />
              </MinusBtn>
              <Count>{count}</Count>
              <PlusBtn onClick={increaseCount}>
                <FontAwesomeIcon icon={faPlus as IconProp} />
              </PlusBtn>
            </Counter>
            <TotalPrice>{`${price * count}`}원</TotalPrice>
          </CountInfo>
        </ProductInfo>
        <HeartBtn>
          <HeartIcon icon={faHeart as IconProp}></HeartIcon>
        </HeartBtn>
        <DeleteBtn onClick={onDelete}>
          <DeleteIcon icon={faTrashCan as IconProp}></DeleteIcon>
        </DeleteBtn>
        <TotalPrice>{`${price * count}`}원</TotalPrice>
      </ProductCard>
    </Container>
  );
}

export default CartProduct;
