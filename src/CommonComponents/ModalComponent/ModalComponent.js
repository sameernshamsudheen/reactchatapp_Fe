import React, { Children, useState } from "react";
import { Button, Modal } from "antd";

const ModalComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(isModalOpen);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return {
    myModal: <Modal isModalOpen={isModalOpen}>{Children}</Modal>,
    showModal,
  };
};

export default ModalComponent;
