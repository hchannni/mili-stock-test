import styled from "styled-components";
import ScreenContainer from "../components/ScreenContainer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faChevronLeft,
  faMagnifyingGlass,
  faRightLeft,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import BottomSheet from "../components/BottomSheet";

const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;

  padding-top: 32px;
`;

const Btn = styled.button`
  border: none;
  background-color: inherit;
`;

const FAIcon = styled(FontAwesomeIcon)`
  width: 24px;
  height: 24px;
`;

const SearchBox = styled.form`
  width: 80%;
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

  position: absolute;
  top: 5px;
  right: 16px;
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
  line-height: 22px; /* 183.333% */
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
  line-height: 22px; /* 183.333% */
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
  font-weight: 600;
  line-height: 22px; /* 183.333% */
  letter-spacing: -0.408px;
`;

const ProductsContainer = styled.div`
  margin-top: 8px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;
`;

interface ProductProps {
  productNumber: number;
  productTitle: string;
  productPrice: number;
  productStock: number;
  productImageUrl: string;
  category: string;
  isDiscountedProduct: boolean;
  isNewProduct: boolean;
  isPopularProduct: boolean;
  productDiscountPrice: number;
  productTimeAdded: string;
  isHeart: boolean;
}

function SearchPage() {
  const accessToken = localStorage.getItem("accessToken");
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const [count, setCount] = useState(0); // 검색결과 count
  const [results, setResults] = useState<ProductProps[]>([]);
  const [onSort, setOnSort] = useState(false);
  const [sortInitialized, setSortInitialized] = useState(false);
  const [sortCriterion, setSortCriterion] = useState("인기순");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

  const onSortBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOnSort(true);
    setSortInitialized(true);
  };

  const handleCartClick = async (item: any) => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await fetch(`${process.env.REACT_APP_DONG10_BASEURL}/carts/productNumber/${item.productNumber}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        alert(`${item.productTitle}이 카트에 추가됐습니다!`);
      } else {
        // Handle error response
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      // Handle network error
      console.error('Error:', error);
    }
  }

  const handleHeartClick = async (item: any) => {
    // 하트 x -> 하트 추가
    if (item.isHeart == false){
      console.log("isHeart==false");
      try {
        const token = localStorage.getItem("accessToken");
        // 백엔드에서 하트 생성
        const response = await fetch(`${process.env.REACT_APP_DONG10_BASEURL}/hearts/product/${item.productNumber}`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.ok) {

          setResults((prevItems: any[]) => prevItems.map((prevItem: ProductProps ) => {
            if (prevItem.productNumber === item.productNumber) {
              // Update the heart of the specific cart item
              return {
                ...prevItem,
                isHeart: true,
              };
            }
            return prevItem;
          }));
        } else {
          // Handle error response
          console.error('Error:', response.statusText);
        }
      } catch (error) {
        // Handle network error
        console.error('Error:', error);
      }
    }
    // 하트 o -> 하트 해제
    else {
      try {
        console.log("isHeart==true");
        const token = localStorage.getItem("accessToken");
        // 백엔드에서 하트 삭제
        const response = await fetch(`${process.env.REACT_APP_DONG10_BASEURL}/hearts/product/${item.productNumber}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.ok) {
          setResults((prevItems: any[]) => prevItems.map((prevItem: ProductProps ) => {
            if (prevItem.productNumber === item.productNumber) {
              // Update the heart of the specific cart item
              return {
                ...prevItem, // return shallow copy
                isHeart: false,
              };
            }
            return prevItem; // map will collect all returned values -> make new array
          }));
        } else {
          // Handle error response
          console.error('Error:', response.statusText);
        }
      } catch (error) {
        // Handle network error
        console.error('Error:', error);
      }
    }
    
  };

  return (
    <>
      <ScreenContainer>
        <Header>
          <Btn onClick={() => navigate(-1)}>
            <FAIcon icon={faChevronLeft as IconProp} />
          </Btn>
          <SearchBox onSubmit={onSubmit}>
            <SearchBar
              value={keyword}
              onChange={onChange}
              placeholder="검색어를 입력해 주세요"
            ></SearchBar>
            <SearchBtn>
              <SearchIcon icon={faMagnifyingGlass as IconProp} />
            </SearchBtn>
          </SearchBox>
          <Btn onClick={() => navigate("/cart")}>
            <FAIcon icon={faCartShopping as IconProp} />
          </Btn>
        </Header>
        {count !== 0 && (
          <>
            <Notice>
              총 <CountBold>{count}</CountBold>개 상품이 검색되었습니다.
            </Notice>
            <Options>
              <ResultNumber>검색결과 {count}</ResultNumber>
              <SortingButton onClick={onSortBtnClick}>
                <FontAwesomeIcon icon={faRightLeft as IconProp} rotation={90} />
                <SortingOption>{sortInitialized ? sortCriterion : "인기순"}</SortingOption>
              </SortingButton>
            </Options>
            <ProductsContainer>
              {results.map((v: ProductProps) => (
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
      </ScreenContainer>
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
