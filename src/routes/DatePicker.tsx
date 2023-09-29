import styled from "styled-components";
import ReactDatePicker from "react-datepicker";
import { useState } from "react";
import { ko } from "date-fns/esm/locale"; //한국어 설정
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";

import "react-datepicker/dist/react-datepicker.css";
import "../datePickerWrapper.css";

const DatePickerBox = styled.div`
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom: 1.5px solid black;
  font-size: 16px;

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

const StyledDatePicker = styled(ReactDatePicker)`
  border: none;
  width: 100%;
  font-size: 16px;

  &::placeholder {
    text-align: left;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px; /* 110% */
    letter-spacing: -0.408px;

    color: inherit;
  }

  &:focus {
    outline: none;
    color: #ff8200;
    border-color: #ff8200;
  }
`;

const FAIcon = styled(FontAwesomeIcon)``;

interface DatePickerProps {
  placeholder: string;
}

function DatePicker({ placeholder }: DatePickerProps) {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePickerBox>
      <StyledDatePicker
        wrapperClassName="datePickerWrapper"
        locale={ko}
        placeholderText={placeholder}
        dateFormat="yyyy년 MM월 dd일"
        onChange={(date: Date) => setStartDate(date)}
        // selected={startDate}
      ></StyledDatePicker>
      <FAIcon icon={faCalendar as IconProp} />
    </DatePickerBox>
  );
}

export default DatePicker;
