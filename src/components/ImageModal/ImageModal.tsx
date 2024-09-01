import Modal from 'react-modal'

import s from "./ImageModal.module.css";
import { IsOpenProp, OnClose } from "./ImageModal.types";

Modal.setAppElement("#root");

type Props = {
  isOpen: IsOpenProp;
  onCloseClick: OnClose;
  imageUrl: string
}


const ImageModal: React.FC<Props>  = ({ isOpen, onCloseClick, imageUrl }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseClick}
      className={s.modal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <div>
        <img src={imageUrl} className={s.modalImage} />
      </div>
    </Modal>
  );
};

export default ImageModal;
