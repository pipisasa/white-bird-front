import React from "react";
import { Modal } from "antd";
import Image from "next/image";
import s from "./ModalConnect.module.scss";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Select } from "antd";
import logo from "../../public/logo.png";

const ModalConnect = ({ showModal, setShowModal }) => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const visibleModal = () => {
    setShowModal(true);
  };

  const handleOk = () => {
    setShowModal(false);
  };

  const handleCancel = () => {
    setShowModal(false);
  };
  return (
    <Modal
      open={showModal}
      onOk={false}
      onCancel={handleCancel}
      centered
    >
      <div className={s.contact}>
        <h2>
          <Image src={logo} width={100} height={100} alt='logo'/>
        </h2>
        <div className={s.contact_desc}>
          <div>
            <input
              className={s.input_contact}
              type="text"
              name="name"
              data-id="1"
              placeholder="ФИО"
            />
          </div>
          <div>
            <input
              className={s.input_contact}
              type="text"
              name="name"
              data-id="1"
              placeholder="Страна"
            />
          </div>
          <div>
            <input
              className={s.input_contact}
              type="text"
              name="name"
              data-id="1"
              placeholder="Город"
            />
          </div>
          <div>
            <input
              className={s.input_contact}
              type="email"
              name="name"
              data-id="1"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              className={s.input_contact}
              type="number"
              name="name"
              data-id="1"
              placeholder="Tелефон"
            />
          </div>

          <div style={{ marginTop: "40px" }}>
            <Select
              className={s.input_contact_select}
              defaultValue="зритель"
              style={{
                width: "100%",
                border: "none",
              }}
              allowClear
              onChange={handleChange}
              options={[
                {
                  value: "участник",
                  label: "участник",
                },
                {
                  value: "зритель",
                  label: "зритель",
                },
              ]}
            />
          </div>

          <p className={s.desc}>
            Я даю согласие на обработку моих персональных данных согласно
            политике конфиденциальности
          </p>
        </div>

        <div className={s.btn}>
          <ArrowRightOutlined style={{ color: "white", fontSize: "35px" }} />
        </div>
      </div>
    </Modal>
  );
};

export default ModalConnect;
