import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Container = styled.div`
  max-width: 390px;
  padding: 0 20px;
  margin: 0 auto;
`;

const Header = styled.div``;

const SearchBar = styled.input`
  appearance: none;
  border: none;
  background-color: #a0a0a0;
  padding: 10px 15px;
`;

const Main = styled.main``;

const Categories = styled.ul``;

const Category = styled.li``;

const HotItems = styled.section``;

const SectionHeader = styled.div``;

const SectionTitle = styled.h3``;

const SectionPageLink = styled(Link)``;

function MainPage() {
  return (
    <Container>
      <Header>
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
            <SectionPageLink to={"/hotitems"}>전체보기</SectionPageLink>
          </SectionHeader>
        </HotItems>
      </Main>
    </Container>
  );
}

export default MainPage;
