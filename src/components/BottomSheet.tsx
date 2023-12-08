import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";

const popup = keyframes`
  0% {opacity: 0; transform: translate(0, 0);}
  100% {opacity: 1; transform: translate(0, -100%);}
`;

interface ContainerProps {
  onSort: boolean;
}

const Container = styled.div<ContainerProps>`
  width: 390px;
  padding: 0 20px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  position: relative;

  ${({ onSort }) =>
    onSort &&
    css`
      animation: ${popup} 0.5s forwards;
    `}
`;

const Wrapper = styled.form`
  background-color: #fff;
  border-radius: 24px 24px 0 0;
  padding: 40px 24px 32px 24px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  position: absolute;
  bottom: 0px;
  width: calc(100% - 20px * 2);

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
  padding: 0px 4px;
`;

const SortBy = styled.div`
  width: 100%;
`;

const StyledLabel = styled.label`
  color: #000;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 137.5% */
  letter-spacing: -0.408px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  :hover {
    cursor: pointer;
  }
`;

const StyledRadio = styled.input.attrs({ type: "radio" })`
  &:checked {
    background-color: #ff8200;
  }
`;

interface FAIconProps {
  checked: boolean;
}

const FAIcon = styled(FontAwesomeIcon)<FAIconProps>`
  width: 18px;
  height: 18px;
  color: ${(props) => (props.checked ? "#ff8200" : "#000")};

  transition: all 0.25s ease-in-out;
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

interface BottomSheetProps {
  url: string;
  params?: any;
  onSort: boolean;
  setOnSort: React.Dispatch<React.SetStateAction<boolean>>;
}

function BottomSheet(props: BottomSheetProps) {
  const accessToken = localStorage.getItem("accessToken");
  const [sortValue, setSortValue] = useState("");
  const onClick = (e: React.MouseEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setSortValue(e.currentTarget.htmlFor);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await axios({
      method: "get",
      url: `${process.env.REACT_APP_DONG10_BASEURL}/${props.url}`,
      params: { ...props.params, sortBy: sortValue },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log(response.data);
    props.setOnSort(false);
  };

  return (
    <Container
      className={props.onSort ? "clicked" : undefined}
      onSort={props.onSort}
    >
      <Wrapper onSubmit={onSubmit}>
        <Header>
          <Title>정렬 선택</Title>
        </Header>
        <SortOptions>
          <SortBy>
            <StyledLabel htmlFor="popular" onClick={onClick}>
              인기순
              <StyledRadio id="popular" />
              <FAIcon
                icon={faCheck as IconProp}
                checked={sortValue === "popular" ? true : false}
              />
            </StyledLabel>
          </SortBy>
          <SortBy>
            <StyledLabel htmlFor="newer" onClick={onClick}>
              신상품순
              <StyledRadio id="newer" />
              <FAIcon
                icon={faCheck as IconProp}
                checked={sortValue === "newer" ? true : false}
              />
            </StyledLabel>
          </SortBy>
          <SortBy>
            <StyledLabel htmlFor="priceLowToHigh" onClick={onClick}>
              가격낮은순
              <StyledRadio id="priceLowToHigh" />
              <FAIcon
                icon={faCheck as IconProp}
                checked={sortValue === "priceLowToHigh" ? true : false}
              />
            </StyledLabel>
          </SortBy>
          <SortBy>
            <StyledLabel htmlFor="priceHighToLow" onClick={onClick}>
              가격높은순
              <StyledRadio id="priceHighToLow" />
              <FAIcon
                icon={faCheck as IconProp}
                checked={sortValue === "priceHighToLow" ? true : false}
              />
            </StyledLabel>
          </SortBy>
          <SortBy>
            <StyledLabel htmlFor="stockLowToHigh" onClick={onClick}>
              재고적은순
              <StyledRadio id="stockLowToHigh" />
              <FAIcon
                icon={faCheck as IconProp}
                checked={sortValue === "stockLowToHigh" ? true : false}
              />
            </StyledLabel>
          </SortBy>
          <SortBy>
            <StyledLabel htmlFor="stockHighToLow" onClick={onClick}>
              재고많은순
              <StyledRadio id="stockHighToLow" />
              <FAIcon
                icon={faCheck as IconProp}
                checked={sortValue === "stockHighToLow" ? true : false}
              />
            </StyledLabel>
          </SortBy>
        </SortOptions>
        <ConfirmBtn>확인</ConfirmBtn>
      </Wrapper>
    </Container>
  );
}

export default BottomSheet;
