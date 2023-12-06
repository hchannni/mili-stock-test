import styled from "styled-components";
import ScreenContainer from "../components/ScreenContainer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faChevronLeft,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import axios from "axios";

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

function SearchPage() {
  const accessToken = localStorage.getItem("accessToken");
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");

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

    console.log(response.data);
  };

  return (
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
    </ScreenContainer>
  );
}

export default SearchPage;
