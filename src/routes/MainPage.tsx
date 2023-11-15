import { Link } from "react-router-dom";
import { styled } from "styled-components";
import ProductCard from "../components/ProductCard";

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
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </SectionItems>
        </HotItems>
      </Main>
    </Container>
  );
}

export default MainPage;
