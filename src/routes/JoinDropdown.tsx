import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

interface ContainerProps {
  disabled: boolean;
}

const Containter = styled.div<ContainerProps>`
  width: 100%;
  border-bottom: 1.5px solid black;
  padding-right: 10px;
  font-size: 16px;
  color: ${(props) => (props.disabled ? "#a0a0a0" : "black")};
  border-color: ${(props) => (props.disabled ? "#a0a0a0" : "black")};

  display: flex;
  justify-content: space-around;
  align-items: center;

  transition: all 0.2s ease-in-out;

  &:focus-within {
    outline: none;
    color: #ff8200;
    border-color: #ff8200;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: none;
  font-size: 16px;
  background-color: rgba(255, 255, 255, 0);
  color: inherit;

  transition: all 0.2s ease-in-out;

  &:focus {
    outline: none;
    color: #ff8200;
    border-color: #ff8200;
  }

  &:disabled {
    color: #a0a0a0;
    border-color: #a0a0a0;
    background-color: rgba(255, 255, 255, 0);
  }
`;

const Option = styled.option`
  color: black;
`;

const FAIcon = styled(FontAwesomeIcon)``;

interface DropdownProps {
  placeholder: string;
  disabled?: boolean;
}

function JoinDropdown({ placeholder, disabled = false }: DropdownProps) {
  return (
    <Containter disabled={disabled}>
      <Select disabled={disabled}>
        <Option value="">{placeholder}</Option>
        <Option>육군</Option>
        <Option>해군</Option>
        <Option>공군</Option>
      </Select>
      <FAIcon icon={faChevronDown as IconProp} />
    </Containter>
  );
}

export default JoinDropdown;
