import styled from "styled-components";
import ScreenContainer from "../components/ScreenContainer";
import PageHeader from "../components/mypage/PageHeader";
import ProductCard from "../components/ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLeft } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const ProductsContainer = styled.div`
  margin-top: 8px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;
`;

const Options = styled.div`
  margin-top: 4px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ResultNumber = styled.span`
  display: flex;

  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 183.333% */
  letter-spacing: -0.408px;
`;

const SortingButton = styled.button`
  border: none;
  background-color: inherit;

  display: flex;
  align-items: center;
  gap: 4px;
`;

const SortingOption = styled.span`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 183.333% */
  letter-spacing: -0.408px;
`;

function ItemsPage() {
  return (
    <ScreenContainer>
      <PageHeader pageTitle="전체상품" />
      <Options>
        <ResultNumber>검색결과 {35}</ResultNumber>
        <SortingButton>
          <FontAwesomeIcon icon={faRightLeft as IconProp} rotation={90} />
          <SortingOption>최신순</SortingOption>
        </SortingButton>
      </Options>
      <ProductsContainer>
        <ProductCard
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
        <ProductCard
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

export default ItemsPage;
