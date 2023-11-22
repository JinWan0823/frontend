import styled from "styled-components";

interface ModalProps {
  handleModal: () => void;
  modalCategory: string;
  text: string;
}

export default function Modal({
  modalCategory,
  handleModal,
  text,
}: ModalProps) {
  return (
    <ModalWrap>
      <ModalComponent>
        <div className="modal-header">{modalCategory}</div>
        <div className="modal-content">
          <p>{text}</p>
          <button onClick={() => handleModal()}>확인</button>
        </div>
      </ModalComponent>
    </ModalWrap>
  );
}

const ModalWrap = styled.div`
  width: calc(100% - 100px);
  height: 100%;
  position: fixed;
  top: 0;
  left: 100px;
  z-index: 9999999999999999;
  background-color: #0008;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalComponent = styled.div`
  width: 400px;
  border-radius: 10px;
  overflow: hidden;
  .modal-header {
    width: 100%;
    padding: 10px 0px;
    background-color: #07788c;
    color: #fff;
    font-size: 16rem;
    text-align: center;
  }
  .modal-content {
    width: 100%;
    padding: 10px;
    background-color: #fff;
    p {
      font-size: 16rem;
      padding: 32px 0px;
      text-align: center;
      color: #333;
    }
    button {
      width: 100%;
      background-color: #07788c;
      color: #fff;
      border: none;
      border-radius: 2px;
      padding: 8px 0px;
      cursor: pointer;
    }

    .btn-wrap {
      display: flex;
      justify-content: space-between;
      button {
        width: 49%;
      }
    }
  }
`;
