import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faRightLeft,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import ProductCard from "../../ProductCard";
import BottomSheet from "../../BottomSheet";

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const SearchBox = styled.form`
  display: flex;
  width: 80%;
  align-items: center;
  position: relative;
`;

const SearchBar = styled.input.attrs({ type: "text" })`
  padding: 8px 24px;
  border: 2px solid #a0a0a0;
  border-radius: 24px;
  width: 100%;
  outline: none;

  &:focus {
    border: 2px solid #ff8200;
  }
  transition: border 0.5s ease-in-out;
`;

const SearchBtn = styled.button`
  border: none;
  background-color: inherit;
  top: 8px;
  right: 16px;
  position: absolute;
`;

const SearchIcon = styled(FontAwesomeIcon)`
  width: 20px;
  height: 20px;
`;

const Notice = styled.p`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.408px;
  margin: 16px 0;
`;

const CountBold = styled.span`
  color: #ff8200;
  text-align: center;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.408px;
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
  line-height: 22px;
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
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.408px;
`;

const ProductsContainer = styled.div`
  margin-top: 8px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;
`;

function SearchPage() {
  const accessToken = localStorage.getItem("accessToken");
  const [keyword, setKeyword] = useState("");
  const [count, setCount] = useState(0);
  const [results, setResults] = useState([]);
  const [onSort, setOnSort] = useState(false);
  const [sortInitialized, setSortInitialized] = useState(false);
  const [sortCriterion, setSortCriterion] = useState("인기순");

  const onChange = (e) => {
    setKeyword(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const response = await axios({
      method: "get",
      url: `${process.env.REACT_APP_DONG10_BASEURL}/products/search`,
      params: { keyword: keyword, sortBy: "newer" },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    setResults(response.data.content);
    setCount(response.data.totalElements);
    setSortInitialized(false);
  };

  const onSortBtnClick = (e) => {
    e.preventDefault();
    setOnSort(true);
    setSortInitialized(true);
  };

  const handleCartClick = async (item) => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await fetch(
        `${process.env.REACT_APP_DONG10_BASEURL}/carts/productNumber/${item.productNumber}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        alert(`${item.productTitle}이 카트에 추가됐습니다!`);
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleHeartClick = async (item) => {
    if (item.isHeart === false) {
      console.log("isHeart==false");
      try {
        const token = localStorage.getItem("accessToken");
        const response = await fetch(
          `${process.env.REACT_APP_DONG10_BASEURL}/hearts/product/${item.productNumber}`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          setResults((prevItems) =>
            prevItems.map((prevItem) => {
              if (prevItem.productNumber === item.productNumber) {
                return {
                  ...prevItem,
                  isHeart: true,
                };
              }
              return prevItem;
            })
          );
        } else {
          console.error("Error:", response.statusText);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      try {
        console.log("isHeart==true");
        const token = localStorage.getItem("accessToken");
        const response = await fetch(
          `${process.env.REACT_APP_DONG10_BASEURL}/hearts/product/${item.productNumber}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          setResults((prevItems) =>
            prevItems.map((prevItem) => {
              if (prevItem.productNumber === item.productNumber) {
                return {
                  ...prevItem,
                  isHeart: false,
                };
              }
              return prevItem;
            })
          );
        } else {
          console.error("Error:", response.statusText);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <>
      <Header>
        <SearchBox onSubmit={onSubmit}>
          <SearchBar
            value={keyword}
            onChange={onChange}
            placeholder="검색어를 입력해 주세요"
          />
          <SearchBtn>
            <SearchIcon icon={faMagnifyingGlass} />
          </SearchBtn>
        </SearchBox>
      </Header>
      {count !== 0 && (
        <>
          <Notice>
            총 <CountBold>{count}</CountBold>개 상품이 검색되었습니다.
          </Notice>
          <Options>
            <ResultNumber>검색결과 {count}</ResultNumber>
            <SortingButton onClick={onSortBtnClick}>
              <FontAwesomeIcon icon={faRightLeft} rotation={90} />
              <SortingOption>
                {sortInitialized ? sortCriterion : "인기순"}
              </SortingOption>
            </SortingButton>
          </Options>
          <ProductsContainer>
            {results.map((v) => (
              <ProductCard
                key={v.productNumber}
                name={v.productTitle}
                price={v.productStock}
                stocks={v.productStock}
                imageUrl={v.productImageUrl}
                isHeart={v.isHeart}
                onCartClick={() => handleCartClick(v)}
                onHeartClick={() => handleHeartClick(v)}
              />
            ))}
          </ProductsContainer>
        </>
      )}

      {sortInitialized && (
        <BottomSheet
          url={"products/search"}
          params={{ keyword: keyword }}
          onSort={onSort}
          setOnSort={setOnSort}
          setResults={setResults}
          setSortCriterion={setSortCriterion}
        />
      )}
    </>
  );
}

export default SearchPage;
