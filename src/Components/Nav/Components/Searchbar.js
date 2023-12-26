import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

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

function SearchPage() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");

  const onChange = (e) => {
    setKeyword(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    navigate("/search", { state: { keyword: keyword } });
  };

  return (
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
  );
}

export default SearchPage;
