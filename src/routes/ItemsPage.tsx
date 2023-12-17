import styled from "styled-components";
import ScreenContainer from "../components/ScreenContainer";
import PageHeader from "../components/mypage/PageHeader";
import ProductCard from "../components/ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLeft } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useEffect, useState } from "react";
import BottomSheet from "../components/BottomSheet";
import { Link, useParams } from "react-router-dom";

const ProductsContainer = styled.div`
  margin-top: 8px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;
`;

const Categories = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 12px;
  overflow-x: scroll;
  margin-bottom: 20px;
`;

interface CategoryProps {
  selected: boolean;
}

const Category = styled(Link)<CategoryProps>`
  border: none;
  background-color: inherit;
  white-space: nowrap;
  font-size: 18px;
  padding: 6px 12px;
  border-radius: 16px;
  background: ${(props) =>
    props.selected ? "#ff8200" : "rgba(160, 160, 160, 0.1)"};
  color: ${(props) => (props.selected ? "#fff" : "#000")};
  font-weight: ${(props) => (props.selected ? "600" : "500")};
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
  const [count, setCount] = useState(0); // 검색결과 count
  const [onSort, setOnSort] = useState(false);
  const [sortInitialized, setSortInitialized] = useState(false);
  const [sortCriterion, setSortCriterion] = useState("인기순");
  const [items, setItems] = useState<any[]>([]); // 배열이라서 any[], default값 = []

  const { category } = useParams();
  const [urlName, setUrlName] = useState("");

  // Fetch products from the backend when the component mounts
  useEffect(() => {
    // Fetch hearts from the backend when the component mounts
    const fetchItems = async () => {
      // async 왜 씀? .then.then.catch 대신 await로 코드 깔끔하게 가능
      try {
        // Send a request to your backend API to get all hearts for the current user
        const token = localStorage.getItem("accessToken");

        if (category === "hotitems") {
          setUrlName("popularProduct");
        } else if (category === "newitems") {
          setUrlName("newProduct");
        } else if (category === "discountitems") {
          setUrlName("discountProduct");
        } else if (category === "all") {
          setUrlName("search?size=6&page=0&sortBy=popular");
        }

        const response = await fetch(
          `${process.env.REACT_APP_DONG10_BASEURL}/products/${urlName}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Check if the request was successful (status code 200)
        if (response.ok) {
          // Parse the response JSON and set it to the state
          const pageData = await response.json();
          // Ensure data is an array before setting it to state
          const items = pageData.content;
          if (Array.isArray(items)) {
            setItems(items);
            setCount(pageData.totalElements);
          } else {
            console.error("Data is not an array:", items);
          }
        } else {
          // Handle error cases
          console.error(
            "Failed to fetch items:",
            response.status,
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error during fetch:", error);
      }
    };

    // Call the fetchHearts function
    fetchItems();
  }, [category, urlName]);

  const handleCartClick = async (item: any) => {
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
        // Handle error response
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      // Handle network error
      console.error("Error:", error);
    }
  };

  const handleHeartClick = async (item: any) => {
    // 하트 x -> 하트 추가
    if (item.isHeart === false) {
      console.log("isHeart==false");
      try {
        const token = localStorage.getItem("accessToken");
        // 백엔드에서 하트 생성
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
          setItems((prevItems: any[]) =>
            prevItems.map(
              (prevItem: { productNumber: number; isHeart: boolean }) => {
                if (prevItem.productNumber === item.productNumber) {
                  // Update the heart of the specific cart item
                  return {
                    ...prevItem,
                    isHeart: true,
                  };
                }
                return prevItem;
              }
            )
          );
        } else {
          // Handle error response
          console.error("Error:", response.statusText);
        }
      } catch (error) {
        // Handle network error
        console.error("Error:", error);
      }
    }
    // 하트 o -> 하트 해제
    else {
      try {
        console.log("isHeart==true");
        const token = localStorage.getItem("accessToken");
        // 백엔드에서 하트 삭제
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
          setItems((prevItems: any[]) =>
            prevItems.map(
              (prevItem: { productNumber: number; isHeart: boolean }) => {
                if (prevItem.productNumber === item.productNumber) {
                  // Update the heart of the specific cart item
                  return {
                    ...prevItem, // return shallow copy
                    isHeart: false,
                  };
                }
                return prevItem; // map will collect all returned values -> make new array
              }
            )
          );
        } else {
          // Handle error response
          console.error("Error:", response.statusText);
        }
      } catch (error) {
        // Handle network error
        console.error("Error:", error);
      }
    }
  };

  const onSortBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOnSort(true);
    setSortInitialized(true);
  };

  return (
    <>
      <ScreenContainer>
        <PageHeader pageTitle="전체상품" />
        <Categories>
          <Category
            to={"/allitems/all"}
            id="전체"
            selected={category === "all" ? true : false}
          >
            전체
          </Category>
          <Category
            to={"/allitems/hotitems"}
            id="인기상품"
            selected={category === "hotitems" ? true : false}
          >
            인기상품🔥
          </Category>
          <Category
            to={"/allitems/newitems"}
            id="신상품"
            selected={category === "newitems" ? true : false}
          >
            신상품🌟
          </Category>
          <Category
            to={"/allitems/discountitems"}
            id="할인상품"
            selected={category === "discountitems" ? true : false}
          >
            할인상품⏰
          </Category>
        </Categories>
        <Options>
          <ResultNumber>검색결과 {count}</ResultNumber>
          <SortingButton onClick={onSortBtnClick}>
            <FontAwesomeIcon icon={faRightLeft as IconProp} rotation={90} />
            <SortingOption>
              {sortInitialized ? sortCriterion : "인기순"}
            </SortingOption>
          </SortingButton>
        </Options>
        <ProductsContainer>
          {items.map((item) => (
            // Use the properties of the heart.product object in the ProductCardSmall component
            <ProductCard
              key={item.productNumber}
              name={item.productTitle}
              price={item.productPrice}
              stocks={item.productStock}
              imageUrl={item.productImageUrl}
              isHeart={item.isHeart}
              onCartClick={() => handleCartClick(item)}
              onHeartClick={() => handleHeartClick(item)}
            />
          ))}
        </ProductsContainer>
      </ScreenContainer>
      {sortInitialized && (
        <BottomSheet
          url={`products/${urlName}`}
          onSort={onSort}
          setOnSort={setOnSort}
          setResults={setItems}
          setSortCriterion={setSortCriterion}
        />
      )}
    </>
  );
}

export default ItemsPage;
