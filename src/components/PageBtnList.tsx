import styled from "styled-components";
import PageButton from "./PageButton";
import React, { useState } from "react";
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

const FAIcon = styled(FontAwesomeIcon)`
  width: 16px;
  height: 16px;
`;

interface PageBtnListProps {
  pageLength: number;
}

function PageBtnList({ pageLength }: PageBtnListProps) {
  const arr = Array.from({ length: pageLength }, (v, i) => i + 1);
  const [currentPage, setCurrentPage] = useState(1);

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCurrentPage(Number(e.currentTarget.innerText));
  };

  return (
    <List>
      <FAIcon icon={faChevronLeft as IconProp} />
      {arr.map((v) => (
        <PageButton
          key={v}
          pageNum={v}
          isCurrent={v === currentPage ? true : false}
          onClick={onClick}
        />
      ))}
      <FAIcon icon={faChevronRight as IconProp} />
    </List>
  );
}

export default PageBtnList;
