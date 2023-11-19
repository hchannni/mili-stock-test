import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 24px 24px 0 0;
  padding: 40px 24px 32px 24px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  color: #000;
  text-align: start;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 110% */
  letter-spacing: -0.408px;
`;

const SortOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

const SortBy = styled.button`
  border: none;
  background-color: inherit;

  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const OptName = styled.span`
  color: #000;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 137.5% */
  letter-spacing: -0.408px;
`;

const SelectedCircleOuter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #ff8200;
`;

const SelectedCircleInner = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #fff;
`;

const NotSelectedCircle = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid #a0a0a0;
`;

const ConfirmBtn = styled.button`
  border: none;
  background-color: #ff8200;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  padding: 12px 4px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
`;

function BottomSheet() {
  return (
    <Wrapper>
      <Header>
        <Title>정렬 선택</Title>
      </Header>
      <SortOptions>
        <SortBy>
          <OptName>인기순</OptName>
          <NotSelectedCircle />
        </SortBy>
        <SortBy>
          <OptName>신상품순</OptName>
          <NotSelectedCircle />
        </SortBy>
        <SortBy>
          <OptName>가격낮은순</OptName>
          <NotSelectedCircle />
        </SortBy>
        <SortBy>
          <OptName>가격높은순</OptName>
          <NotSelectedCircle />
        </SortBy>
        <SortBy>
          <OptName>재고적은순</OptName>
          <SelectedCircleOuter>
            <SelectedCircleInner></SelectedCircleInner>
          </SelectedCircleOuter>
        </SortBy>
      </SortOptions>
      <ConfirmBtn>확인</ConfirmBtn>
    </Wrapper>
  );
}

export default BottomSheet;
