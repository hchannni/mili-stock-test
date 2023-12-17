import { Link } from "react-router-dom";
import { styled } from "styled-components";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";

const Container = styled.div`
  max-width: 390px;
  padding: 0 20px;
  margin: 0 auto;

  background-color: #ffffff;
  height: 1000vh;
`;

const Header = styled.div`
  width: 100%;
`;

const Logos = styled.div`
  width: 100%;
  height: 48px;
  margin-bottom: 16px;
`;

const SearchBar = styled.input.attrs({ placeholder: "Search" })`
  appearance: none;
  border: none;

  width: 100%;
  border-radius: 16px;
  background-color: #a0a0a0;
  opacity: 0.5;
  padding: 10px 15px;
`;

const Main = styled.main``;

const Categories = styled.ul`
  width: 100%;
  height: 88px;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Category = styled.li`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid #ff8200;
`;

const HotItems = styled.section``;

const SectionHeader = styled.div`
  display: flex;
  width: 342px;
  justify-content: space-between;
  align-items: baseline;

  margin-bottom: 8px;
`;

const SectionTitle = styled.h3`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 91.667% */
  letter-spacing: -0.408px;
`;

const SectionPageLink = styled(Link)`
  color: #120de4;
  text-align: center;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 183.333% */
  letter-spacing: -0.408px;
  text-decoration-line: underline;
`;

const SectionItems = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 160px);
  gap: 16px 24px;
`;

function MainPage() {
  const [items, setItems] = useState<any[]>([]);

  // Fetch products from the backend when the component mounts
  useEffect(() => {
    // Fetch hearts from the backend when the component mounts
    const fetchItems = async () => { // async 왜 씀? .then.then.catch 대신 await로 코드 깔끔하게 가능
      try {
        // Send a request to your backend API to get all hearts for the current user
        const token = localStorage.getItem("accessToken");

        const response = await fetch(`${process.env.REACT_APP_DONG10_BASEURL}/products/search`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        // Check if the request was successful (status code 200)
        if (response.ok) {
          // Parse the response JSON and set it to the state
          const data = await response.json();
          setItems(data.content);
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

  })

  return (
    <Container>
      <Header>
        <Logos></Logos>
        <SearchBar />
      </Header>
      <Main>
        <Categories>
          <Category />
          <Category />
          <Category />
          <Category />
        </Categories>
        <HotItems>
          <SectionHeader>
            <SectionTitle>인기상품</SectionTitle>
            <SectionPageLink to={"/allitems"}>전체보기</SectionPageLink>
          </SectionHeader>
          <SectionItems>
            {/* API로부터 데이터 받아왔을 때는 map함수를 통해 ProductCardSamll 컴포넌트를 그리면 OK */}
            {items.map((item) => (
              // Use the properties of the heart.product object in the ProductCardSmall component
              <ProductCard
                key={item.heartId}
                name={item.product.productTitle}
                price={item.product.productPrice}
                stocks={item.product.productStock}
                imageUrl={item.product.productImageUrl}
                isHeart={item.product.isHeart}
              />
            ))}
          </SectionItems>
        </HotItems>
      </Main>
    </Container>
  );
}

export default MainPage;
