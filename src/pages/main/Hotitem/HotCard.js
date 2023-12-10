import { styled } from "styled-components";


const Container = styled.div`
  width: 160px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

const Image = styled.div`
  width: 160px;
  height: 160px;
  border: 1px solid #a0a0a0;
  border-radius: 12px;
`;

const Info = styled.div`
  display: flex;
  padding: 0px 4px;
  justify-content: space-between;
  align-self: stretch;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.h4`
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
  font-weight: 400;
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

const CartBtn = styled.div`
  width: 16px;
  height: 16px;
`;

function ProductCard() {
    return (
      <Container>
        <Image />
        <Info>
          <TextBox>
            <Title>Title</Title>
            <Price>2,100원</Price>
            <Stocks>000 left</Stocks>
          </TextBox>
          <CartBtn></CartBtn>
        </Info>
      </Container>
    );
}
  
export default ProductCard;
  