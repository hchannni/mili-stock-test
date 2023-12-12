import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faCartShopping,
  faChevronLeft,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  padding-top: 64px;
  padding-bottom: 32px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FAIcon = styled(FontAwesomeIcon)`
  height: 24px;
  width: 24px;
`;

const Title = styled.div`
  display: flex;
  gap: 8px;
`;
const Icons = styled.div`
  display: flex;
  gap: 8px;
`;

const PageTitle = styled.h1`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 91.667% */
  letter-spacing: -0.408px;
`;

const Btn = styled.button`
  border: none;
  background-color: inherit;
`;

interface PageHeaderProps {
  pageTitle: string;
}

function PageHeader(props: PageHeaderProps) {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>
        <Btn onClick={() => navigate(-1)}>
          <FAIcon icon={faChevronLeft as IconProp} />
        </Btn>
        <PageTitle>{props.pageTitle}</PageTitle>
      </Title>
      <Icons>
        <Btn onClick={() => navigate("/search")}>
          <FAIcon icon={faMagnifyingGlass as IconProp} />
        </Btn>
        <Btn onClick={() => navigate("/cart")}>
          <FAIcon icon={faCartShopping as IconProp} />
        </Btn>
      </Icons>
    </Container>
  );
}

export default PageHeader;
