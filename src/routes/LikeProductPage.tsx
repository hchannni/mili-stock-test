import styled from "styled-components";
import HookingButton from "../components/HookingButton";
import ScreenContainer from "../components/ScreenContainer";
import PageHeader from "../components/mypage/PageHeader";
import ProductCardSmall from "../components/ProductCardSmall";
import Toggle from "../components/Toggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLeft } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import BottomSheet from "../components/BottomSheet";
import { useState } from "react";

const HookingButtons = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ProductsContainer = styled.section`
  margin-top: 8px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 4px;
`;

const ResultNumber = styled.span`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  margin-top: 16px;

  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 183.333% */
  letter-spacing: -0.408px;
`;

const Options = styled.div`
  margin-top: 4px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ToggleLabel = styled.span`
  color: #767676;
  text-align: center;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 23px; /* 153.333% */
  letter-spacing: -0.306px;
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

function LikeProductPage() {
  const [onSort, setOnSort] = useState(false);
  const onSortBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOnSort(true);
  };

  return (
    <>
      <ScreenContainer>
        <PageHeader pageTitle="관심상품" />
        <HookingButtons>
          <HookingButton desc="요즘 인기 있는" pageName="인기상품" link="/" />
          <HookingButton
            desc="현명한 소비를 위한"
            pageName="할인상품"
            link="/"
          />
          <HookingButton desc="혹시 이건 어때요?" pageName="신상품" link="/" />
        </HookingButtons>
        <ResultNumber>{`검색결과 ${35}`}</ResultNumber>
        <Options>
          <div style={{ display: "flex", gap: "4px" }}>
            <Toggle />
            <ToggleLabel>품절제외</ToggleLabel>
          </div>
          <SortingButton onClick={onSortBtnClick}>
            <FontAwesomeIcon icon={faRightLeft as IconProp} rotation={90} />
            <SortingOption>최신순</SortingOption>
          </SortingButton>
        </Options>

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
        </ProductsContainer>
      </ScreenContainer>
      {onSort && (
        <BottomSheet
          url={"hearts/products"}
          onSort={onSort}
          setOnSort={setOnSort}
        />
      )}
    </>
  );
}

export default LikeProductPage;
