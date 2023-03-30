import React from "react";
import { Modal } from "antd";

const ModalConnect = ({showModal, setShowModal}) => {
  return (
    <Modal
        title="Модальное окно"
        open={showModal}
        onOk={''}
        onCancel={''}
        centered
      >
        <p style={{color: 'red'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, voluptatum deserunt debitis expedita perspiciatis earum iusto sequi, deleniti inventore ipsa ducimus fugit, quibusdam consequatur dolor minus rem! Enim, distinctio tempore. A ut eos fuga asperiores modi ipsum quos tempora minima perspiciatis eveniet exercitationem odit, pariatur quae. A adipisci reiciendis facere fugit esse dignissimos ut itaque amet sunt corrupti, porro alias quaerat iusto doloribus doloremque. Necessitatibus beatae doloremque fuga culpa impedit numquam possimus mollitia modi optio. Odio doloremque impedit dignissimos ea ipsa et sit, laborum atque, voluptatibus voluptatum repellat illo maiores? Voluptatum vitae corrupti tenetur, esse assumenda quia doloremque molestiae quibusdam.</p>
      </Modal>
  );
};

export default ModalConnect;
