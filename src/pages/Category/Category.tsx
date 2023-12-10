import { useState } from "react";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import styled from "styled-components";

const CustomFontAwesomeIcon = styled(FontAwesomeIcon)<{ isVisible?: boolean }>`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  transform: ${(props) => (props.isVisible ? "rotate(-90deg)" : "rotate(90deg)")};
`;

const BtnWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 48px);
  gap: 32px 24px;
`;

const Btn = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background: #d9d9d9;
`;

const Title = styled.div`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 48px;
  letter-spacing: -0.408px;
  cursor: pointer;
`;

const ShowMoreContainer = styled.div<{ showMoreExpanded?: boolean }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top: ${(props) => (props.showMoreExpanded ? "16px" : "0")};
`;

const ShowMoreText = styled.div`
  font-size: 12px;
  margin-right: 8px;
`;

interface ContainerProps {
  showMoreExpanded: boolean;
}

const CategorySection = () => {
  const [showMoreExpanded, setShowMoreExpanded] = useState(false);
  const [visibleCategories, setVisibleCategories] = useState(4);

  const handleClick = () => {
    setShowMoreExpanded((prev) => (!prev));
    setVisibleCategories((prev) => (prev === 4 ? categories.length : 4));
  };

  const CategoryTab = styled.div<ContainerProps>`
    width: 100%;
    height: ${(props) => props.showMoreExpanded ? "160px" : "88px"};
    display: flex;
    flex-direction: column; /* ShowMoreText를 아래로 위치시키기 위해 flex-direction을 column으로 변경 */
    align-items: center; /* 중앙 정렬 */
    overflow: hidden;
    margin: 0 auto;
    transition: height 3s ease; /* 애니메이션 효과를 위한 설정 */
  `;

  const categories: { id: number; title: string }[] = [
    { id: 1, title: '전체' },
    { id: 2, title: '신상' },
    { id: 3, title: '인기' },
    { id: 4, title: '할인' },
    { id: 5, title: '식품류' },
    { id: 6, title: '주류' },
    { id: 7, title: '유제품' },
    { id: 8, title: '생활용품' },
    // ... 더 많은 카테고리들
  ];

  return (
    <CategoryTab showMoreExpanded={showMoreExpanded} >
      <BtnWrap>
        {categories.slice(0, visibleCategories).map((category, index) => (
          <Btn key={index}>
            <Title>{category.title}</Title>
          </Btn>
        ))}
      </BtnWrap>
      {categories.length > 4 && (
        <ShowMoreContainer onClick={handleClick}>
          <ShowMoreText>{showMoreExpanded ? "접기" : "더보기"}</ShowMoreText>
          <CustomFontAwesomeIcon
            isVisible={showMoreExpanded}
            icon={faAngleRight as IconProp}
          />
        </ShowMoreContainer>
      )}
    </CategoryTab>
  );
};

export default CategorySection;