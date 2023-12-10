import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import URL from "../../../url";
import "./Searchbar.scss";

const Searchbar = () => {
  const [products, setProducts] = useState([]);
  const [matchArr, setMatchArr] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();
  const { searchQuery } = useParams();

  useEffect(() => {
    fetch(`${URL}products`)
      .then((res) => res.json())
      .then((res) => {
        const result = res.data_list;
        setProducts(result);
      });
  }, []);

  const searchItems = (e) => {
    e.preventDefault();
    setMatchArr([]);
    navigate(`/search/${searchValue}`);
  };

  const checkMatch = (e) => {
    const inputValue = e.target.value;
    setSearchValue(inputValue);
    setMatchArr(
      inputValue
        ? products.filter((product) => product.name.includes(inputValue)).slice(0, 8)
        : []
    );
  };

  return (
    <form className="Searchbar" onSubmit={searchItems}>
      <div className="box">
        <div className="btn">
          
        </div>
        <input
          onChange={checkMatch}
          value={searchValue}
          className="SearchbarInput"
          type="search"
          placeholder="무엇을 찾으세요?"
        />
      </div>
      <ul className={`searchResultWrap ${matchArr.length ? "isShown" : ""}`}>
        {matchArr.map((product) => (
          <li
            key={product.product_id}
            dangerouslySetInnerHTML={{
              __html: product.name.replace(
                new RegExp(searchValue, 'gi'),
                (match) => `<span>${match}</span>`
              ),
            }}
          />
        ))}
      </ul>
    </form>
  );
};

export default Searchbar;

/* 

주요 변경 사항:

클래스 컴포넌트를 제거하고 훅을 사용하는 함수형 컴포넌트로 대체했습니다.
네비게이션에 withRouter 대신 useNavigate 훅을 사용했습니다.
URL 경로에서 searchValue를 제거하고 검색 쿼리를 가져오기 위해 useParams를 사용했습니다.
상태 훅 및 함수를 이에 맞게 조정했습니다.
dangerouslySetInnerHTML에서 검색어의 모든 발생을 올바르게 강조하기 위해 정규 표현식을 업데이트했습니다.

*/