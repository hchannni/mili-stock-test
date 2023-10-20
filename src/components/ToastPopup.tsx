import { useEffect } from "react";
import styled, { css, keyframes } from "styled-components";

const fadein = keyframes`
  0% { bottom: 0px; opacity: 0; } 
  100% { bottom: 30px; opacity: 1; }
`;
const fadeout = keyframes`
  0% { bottom: 30px; opacity: 1; } 
  100% { bottom: 0px; opacity: 0; }
`;

interface ToastBoxProps {
  show: boolean;
}

const ToastBox = styled.div<ToastBoxProps>`
  z-index: 100;
  position: absolute;
  // visibility: ${(props) => (props.show ? "visible" : "hidden")};
  background-color: #e00b03;

  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  width: 350px;
  padding: 8px 16px;

  color: #fff;
  font-size: 16px;
  font-family: inter;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.408px;

  -webkit-animation: ${(props) =>
    props.show
      ? css`
          ${fadein} 0.5s, ${fadeout} 0.5s 2.5s
        `
      : ""};
  animation: ${(props) =>
    props.show
      ? css`
          ${fadein} 0.5s, ${fadeout} 0.5s 2.5s
        `
      : ""};
  animation-fill-mode: forwards;
`;

interface ToastPopupProps {
  message: string;
  toast: boolean;
  setToast: React.Dispatch<React.SetStateAction<boolean>>;
}

function ToastPopup({ message, toast, setToast }: ToastPopupProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setToast(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [setToast]);

  return (
    <ToastBox show={toast}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <g clip-path="url(#clip0_395_1589)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.36627 0.0186901L8.88377 0.0686901C6.54252 0.30244 4.18377 1.50994 2.58877 3.29244C0.825017 5.26369 -0.0712336 7.70994 0.0112664 10.3162C0.155016 14.8174 3.24877 18.6287 7.63752 19.7137C8.92967 20.0257 10.2709 20.0781 11.5835 19.8678C12.896 19.6575 14.1538 19.1888 15.2838 18.4887C17.506 17.1041 19.0965 14.9032 19.7138 12.3587C19.9288 11.4824 19.9788 11.0362 19.9788 9.99994C19.9788 8.96369 19.9288 8.51744 19.7138 7.64119C18.7238 3.59744 15.3938 0.62244 11.25 0.0799401C10.895 0.0336901 9.60377 -0.00755994 9.36627 0.0186901ZM11.0663 1.95369C12.4704 2.13853 13.802 2.68611 14.93 3.54244C15.3413 3.84994 16.15 4.65869 16.4575 5.06994C17.1588 6.00869 17.6775 7.11244 17.9125 8.16869C18.18 9.37487 18.18 10.625 17.9125 11.8312C17.395 14.1574 15.7563 16.2224 13.5838 17.2849C12.8005 17.6682 11.9627 17.928 11.1 18.0549C10.57 18.1362 9.43002 18.1362 8.90002 18.0549C6.46502 17.6849 4.41002 16.3562 3.11627 14.3137C2.79804 13.7861 2.53259 13.2284 2.32377 12.6487C2.02603 11.7978 1.88006 10.9013 1.89252 9.99994C1.89252 8.70119 2.14377 7.59369 2.70002 6.44994C3.12502 5.57744 3.55752 4.97494 4.26627 4.26619C4.89315 3.61597 5.63312 3.08524 6.45002 2.69994C7.8813 2.00077 9.48759 1.7411 11.0663 1.95369ZM9.63252 5.36244C9.35252 5.45369 9.19377 5.61369 9.11627 5.88119C9.07127 6.03369 9.06627 6.38244 9.07377 8.51994C9.08377 10.9824 9.08377 10.9837 9.15627 11.1199C9.25151 11.2945 9.40438 11.4305 9.58877 11.5049C9.75377 11.5624 10.2463 11.5624 10.4113 11.5049C10.5957 11.4305 10.7485 11.2945 10.8438 11.1199C10.9163 10.9837 10.9163 10.9824 10.9263 8.51994C10.9363 5.82994 10.9363 5.82744 10.745 5.60119C10.59 5.41619 10.4238 5.35494 10.05 5.34494C9.91061 5.33708 9.77077 5.34295 9.63252 5.36244ZM9.73252 13.1624C9.48242 13.2519 9.27442 13.4309 9.14877 13.6649C9.05853 13.8891 9.0475 14.1374 9.11752 14.3687C9.1851 14.5498 9.30519 14.7066 9.4624 14.819C9.61961 14.9315 9.8068 14.9945 10 14.9999C10.3788 14.9999 10.765 14.7249 10.8825 14.3687C10.9525 14.1374 10.9415 13.8891 10.8513 13.6649C10.7478 13.4823 10.5977 13.3305 10.4163 13.2249C10.2713 13.1499 9.88002 13.1137 9.73252 13.1624Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_395_1589">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
      {message}
    </ToastBox>
  );
}

export default ToastPopup;
