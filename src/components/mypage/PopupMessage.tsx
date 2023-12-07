import ReactModal from "react-modal";
import styled from "styled-components";

/*overlay는 모달 창 바깥 부분을 처리하는 부분이고,
content는 모달 창부분이라고 생각하면 쉬울 것이다*/
const customModalStyles: ReactModal.Styles = {
  overlay: {
    backgroundColor: " rgba(0, 0, 0, 0.4)",
    width: "100%",
    height: "100vh",
    zIndex: "10",
    position: "fixed",
    top: "0",
    left: "0",
  },
  content: {
    width: "360px",
    height: "280px",
    zIndex: "150",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
    backgroundColor: "white",
    justifyContent: "center",
    overflow: "auto",
  },
};

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 48px;
  padding-top: 16px;
`;

const LogoImg = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 10px;

  border-radius: 50%;
  background-color: #ff8200;
`;

const ServiceName = styled.h1`
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 110% */
  letter-spacing: -0.408px;
  color: #ff8200;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const Msg = styled.p`
  font-size: 18px;
  font-weight: 500;
  width: 100%;
  text-align: center;
`;

const BtnBox = styled.div`
  width: 100%;
  margin-top: 40px;

  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

interface IButton {
  opacity: boolean;
}

const Btn = styled.button<IButton>`
  border: none;
  background-color: ${(props) =>
    props.opacity ? "rgba(255, 130, 0, 0.6)" : "#ff8200"};
  border-radius: 16px;
  color: white;

  display: flex;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
`;

interface PopupProps {
  modalOpen: boolean;
  message: string;
  onClickfn: () => void;
  onRequestClose: () => void;
  onAfterClose: () => void;
}

function PopupMessage({
  onRequestClose,
  modalOpen,
  message,
  onClickfn,
  onAfterClose,
}: PopupProps) {
  return (
    <ReactModal
      isOpen={modalOpen}
      style={customModalStyles}
      shouldCloseOnOverlayClick={true}
      onRequestClose={onRequestClose}
      onAfterClose={onAfterClose}
    >
      <Container>
        <LogoBox>
          <LogoImg />
          <ServiceName>미리스톡 Mili-Stock</ServiceName>
        </LogoBox>
        <Msg>{message}</Msg>
        <BtnBox>
          <Btn opacity={false} onClick={onClickfn}>
            완료
          </Btn>
        </BtnBox>
      </Container>
    </ReactModal>
  );
}

export default PopupMessage;
