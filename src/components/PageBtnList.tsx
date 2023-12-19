import styled from "styled-components";
import PageButton from "./PageButton";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const List = styled.div`
  width: 100%;
  padding: 12px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const ChevBtn = styled.button`
  border: none;
  background-color: inherit;
`;

const FAIcon = styled(FontAwesomeIcon)`
  width: 16px;
  height: 16px;
`;

interface PageBtnListProps {
  pageLength: number;
}

function PageBtnList({ pageLength }: PageBtnListProps) {
  const arr = Array.from({ length: 5 }, (_, i) => i + 1); // 초기 Pagination (1~5page)
  const [pageArr, setPageArr] = useState<number[]>(arr);
  const [currentPage, setCurrentPage] = useState(1);
  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(5);

  const onPageBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // PageButton의 isCurrent prop을 바꿔 주기 위한 useState
    setCurrentPage(Number(e.currentTarget.innerText));
  };

  const onChevronLeftClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCurrentPage((v) => v - 1);
  };

  const onChevronRightClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCurrentPage((v) => v + 1);
  };

  useEffect(() => {
    setStart(currentPage - 1 - ((currentPage - 1) % 5) + 1);
    setEnd(currentPage - 1 - ((currentPage - 1) % 5) + 5);
  }, [currentPage]);

  useEffect(() => {
    if (pageLength < end) setEnd(pageLength);
    setPageArr(Array.from({ length: end - start + 1 }, (_, i) => start + i));
  }, [start, end, pageLength]);

  return (
    <List>
      <ChevBtn onClick={onChevronLeftClick}>
        <FAIcon icon={faChevronLeft as IconProp} />
      </ChevBtn>
      {pageArr.map((v) => (
        <PageButton
          key={v}
          pageNum={v}
          isCurrent={v === currentPage ? true : false}
          onClick={onPageBtnClick}
        />
      ))}
      <ChevBtn onClick={onChevronRightClick}>
        <FAIcon icon={faChevronRight as IconProp} />
      </ChevBtn>
    </List>
  );
}

export default PageBtnList;
