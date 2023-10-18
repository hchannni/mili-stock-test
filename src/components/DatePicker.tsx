import styled from "styled-components";
import ReactDatePicker from "react-datepicker";
import { useState } from "react";
import { ko } from "date-fns/esm/locale"; //한국어 설정
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { useController, UseControllerProps } from "react-hook-form";

import "react-datepicker/dist/react-datepicker.css";
import "../datePickerWrapper.css";

const DatePickerBox = styled.div`
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom: 1.5px solid black;
  font-size: 16px;
  margin-top: 16px;

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

interface DatePickerProps extends UseControllerProps {
  placeholder: string;
}

function DatePicker(props: DatePickerProps) {
  const { field } = useController(props);
  const [startDate, setStartDate] = useState<Date | null>(null);
  return (
    <DatePickerBox>
      <StyledDatePicker
        {...field}
        wrapperClassName="datePickerWrapper"
        locale={ko}
        placeholderText={props.placeholder}
        dateFormat="yyyy년 MM월 dd일"
        onChange={(date: Date) => {
          field.onChange(date);
          setStartDate(date);
        }}
        selected={startDate}
        showYearDropdown
      ></StyledDatePicker>
      <FAIcon icon={faCalendar as IconProp} />
    </DatePickerBox>
  );
}

export default DatePicker;
