import styled from "styled-components";
import ScreenContainer from "../components/ScreenContainer";
import PageHeader from "../components/mypage/PageHeader";
import ProductCard from "../components/ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopHouse, faRightLeft } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useEffect, useState } from "react";

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

const Category = styled.button<CategoryProps>`
  border: none;
  background-color: inherit;
  white-space: nowrap;
  font-size: 18px;
  padding: 4px 12px;
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
  const [category, setCategory] = useState("전체");

  const [items, setItems] = useState<any[]>([]); // 배열이라서 any[], default값 = []

  // Fetch products from the backend when the component mounts
  useEffect(() => {
    // Fetch hearts from the backend when the component mounts
    const fetchItems = async () => { // async 왜 씀? .then.then.catch 대신 await로 코드 깔끔하게 가능
      try {
        // Send a request to your backend API to get all hearts for the current user
        const token = localStorage.getItem("accessToken");

        const response = await fetch(`${process.env.REACT_APP_DONG10_BASEURL}/products/search?size=6&page=0&sortBy=stockLowToHigh`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        // Check if the request was successful (status code 200)
        if (response.ok) {
          // Parse the response JSON and set it to the state          
          const pageData = await response.json();
          // Ensure data is an array before setting it to state
          const items = pageData.content;
          if (Array.isArray(items)) {
            setItems(items);
            console.log(items);
          } else {
            console.error('Data is not an array:', items);
          }         
          
        } else {
          // Handle error cases
          console.error('Failed to fetch items:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Error during fetch:', error);
      }
    };

    // Call the fetchHearts function
    fetchItems();

  }, [])

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    // TypeScript에서 추천해주는 바에 따르면, event.target에는 함수 3개밖에 없다...
    // 왜 event.currentTarget을 써야 하는지는 잘 모르겠다 ...
    // re-rendering 실수에 유의해서, useState()를 까먹지 않고 잘 써서 연동 성공!
    setCategory(event.currentTarget.name);
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

          setItems((prevItems: any[]) => prevItems.map((prevItem: { productNumber: number, isHeart: boolean }) => {
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
          setItems((prevItems: any[]) => prevItems.map((prevItem: { productNumber: number, isHeart: boolean }) => {
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
    <ScreenContainer>
      <PageHeader pageTitle="전체상품" />
      <Categories>
        <Category
          name="전체"
          selected={category === "전체" ? true : false}
          onClick={onClick}
        >
          전체
        </Category>
        <Category
          name="인기상품"
          selected={category === "인기상품" ? true : false}
          onClick={onClick}
        >
          인기상품🔥
        </Category>
        <Category
          name="신상품"
          selected={category === "신상품" ? true : false}
          onClick={onClick}
        >
          신상품🌟
        </Category>
        <Category
          name="할인상품"
          selected={category === "할인상품" ? true : false}
          onClick={onClick}
        >
          할인상품⏰
        </Category>
      </Categories>
      <Options>
        <ResultNumber>검색결과 {35}</ResultNumber>
        <SortingButton>
          <FontAwesomeIcon icon={faRightLeft as IconProp} rotation={90} />
          <SortingOption>최신순</SortingOption>
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
            onCartClick={() => handleCartClick(item)}
            onHeartClick={() => handleHeartClick(item)}
          />
        ))}
      </ProductsContainer>
    </ScreenContainer>
  );
}

export default ItemsPage;
