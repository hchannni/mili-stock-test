import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Containter = styled.div`
  position: relative;
  width: 100%;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom: 1.5px solid black;
  font-size: 16px;
  background-color: rgba(255, 255, 255, 0);
  color: inherit;

  transition: all 0.2s ease-in-out;

  position: relative;

  &:focus {
    outline: none;
    color: #ff8200;
    border-color: #ff8200;
  }
`;

const Option = styled.option`
  color: black;
`;

const FAIcon = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
`;

interface IDropdown {
  placeholder: string;
}

function JoinDropdown({ placeholder }: IDropdown) {
  return (
    <Containter>
      <Select>
        <Option value="">{placeholder}</Option>
        <Option>육군</Option>
        <Option>해군</Option>
        <Option>공군</Option>
      </Select>
      <FAIcon>
        <FontAwesomeIcon icon={faChevronDown as IconProp} />
      </FAIcon>
    </Containter>
  );
}

export default JoinDropdown;
