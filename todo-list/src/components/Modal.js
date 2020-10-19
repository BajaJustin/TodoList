import React, {useEffect} from 'react';

const Modal = ({modalContent, closeModal}) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal()
    }, 3000)
  })
  return (
    <p className="modalText">{modalContent}</p>
  )
}

export default Modal;