import styled from "styled-components";
import HookingButton from "../components/HookingButton";
import ScreenContainer from "../components/ScreenContainer";
import PageHeader from "../components/mypage/PageHeader";
import ProductCardSmall from "../components/ProductCardSmall";
import ProductCard from "../components/ProductCard";

const HookingButtons = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ProductsContainer = styled.section`
  margin-top: 32px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 4px;
`;

function LikeProductPage() {
  return (
    <ScreenContainer>
      <PageHeader pageTitle="관심상품" />
      <HookingButtons>
        <HookingButton desc="요즘 인기 있는" pageName="인기상품" link="/" />
        <HookingButton desc="현명한 소비를 위한" pageName="할인상품" link="/" />
        <HookingButton desc="혹시 이건 어때요?" pageName="신상품" link="/" />
      </HookingButtons>
      <ProductsContainer>
        {/* API로부터 데이터 받아왔을 때는 map함수를 통해 ProductCardSamll 컴포넌트를 그리면 OK */}
        <ProductCardSmall
          name="아사히생맥주"
          price={2100}
          stocks={107}
          imageUrl="*"
        />
        <ProductCardSmall
          name="아사히생맥주"
          price={2100}
          stocks={107}
          imageUrl="*"
        />
        <ProductCardSmall
          name="아사히생맥주"
          price={2100}
          stocks={107}
          imageUrl="*"
        />
        <ProductCardSmall
          name="아사히생맥주"
          price={2100}
          stocks={107}
          imageUrl="*"
        />
        <ProductCardSmall
          name="아사히생맥주"
          price={2100}
          stocks={107}
          imageUrl="*"
        />
        <ProductCardSmall
          name="아사히생맥주"
          price={2100}
          stocks={107}
          imageUrl="*"
        />
        <ProductCard
          name="아사히생맥주"
          price={2100}
          stocks={107}
          imageUrl="*"
        />
      </ProductsContainer>
    </ScreenContainer>
  );
}

export default LikeProductPage;
