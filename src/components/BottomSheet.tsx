import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.form`
  width: 100%;
  background-color: #fff;
  border-radius: 24px 24px 0 0;
  padding: 40px 24px 32px 24px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);

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

function BottomSheet() {
  const [value, setValue] = useState("");
  const onClick = (e: React.MouseEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setValue(e.currentTarget.innerText);
  };

  return (
    <Wrapper>
      <Header>
        <Title>정렬 선택</Title>
      </Header>
      <SortOptions>
        <SortBy>
          <StyledLabel htmlFor="인기순" onClick={onClick}>
            인기순
            <StyledRadio id="인기순" />
            <FAIcon
              icon={faCheck as IconProp}
              checked={value === "인기순" ? true : false}
            />
          </StyledLabel>
        </SortBy>
        <SortBy>
          <StyledLabel htmlFor="신상품순" onClick={onClick}>
            신상품순
            <StyledRadio id="신상품순" />
            <FAIcon
              icon={faCheck as IconProp}
              checked={value === "신상품순" ? true : false}
            />
          </StyledLabel>
        </SortBy>
        <SortBy>
          <StyledLabel htmlFor="가격낮은순" onClick={onClick}>
            가격낮은순
            <StyledRadio id="가격낮은순" />
            <FAIcon
              icon={faCheck as IconProp}
              checked={value === "가격낮은순" ? true : false}
            />
          </StyledLabel>
        </SortBy>
        <SortBy>
          <StyledLabel htmlFor="가격높은순" onClick={onClick}>
            가격높은순
            <StyledRadio id="가격높은순" />
            <FAIcon
              icon={faCheck as IconProp}
              checked={value === "가격높은순" ? true : false}
            />
          </StyledLabel>
        </SortBy>
        <SortBy>
          <StyledLabel htmlFor="재고적은순" onClick={onClick}>
            재고적은순
            <StyledRadio id="재고적은순" />
            <FAIcon
              icon={faCheck as IconProp}
              checked={value === "재고적은순" ? true : false}
            />
          </StyledLabel>
        </SortBy>
      </SortOptions>
      <ConfirmBtn>확인</ConfirmBtn>
    </Wrapper>
  );
}

export default BottomSheet;
