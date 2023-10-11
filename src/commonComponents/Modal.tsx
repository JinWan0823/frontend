import styled from "styled-components";
import { useState, useEffect } from "react";

interface ModalProps {
  handleModal: () => void;
  modalCategory: string;
}

export default function Modal({ handleModal, modalCategory }: ModalProps) {
  const [text, setText] = useState("");
  const category = modalCategory;
  useEffect(() => {
    if (category === "Kakao") {
      setText("카카오톡으로 연결하시겠습니까?");
    } else {
      setText("클립보드에 복사를 완료했습니다.");
    }
  }, [category]);

  const linkKakao = () => {
    const kakaoLink = "https://open.kakao.com/o/s3jITaMf";
    window.open(kakaoLink, "_blank");
    handleModal();
  };

  return (
    <ModalWrap>
      <ModalComponent>
        <div className="modal-header">{modalCategory}</div>
        <div className="modal-content">
          <p>{text}</p>
          {category === "Kakao" ? (
            <div className="btn-wrap">
              <button onClick={linkKakao}>확인</button>
              <button onClick={handleModal}>취소</button>
            </div>
          ) : (
            <button onClick={handleModal}>확인</button>
          )}
        </div>
      </ModalComponent>
    </ModalWrap>
  );
}

const ModalWrap = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
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
      font-size: 18rem;
      padding: 32px 0px;
      text-align: center;
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
