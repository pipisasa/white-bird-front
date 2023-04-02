import React, { useState } from "react";
import { Modal } from "antd";
import Image from "next/image";
import s from "./ModalConnect.module.scss";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Select } from "antd";
import logo from "../../public/logo.png";
import axios from "axios";

const ModalConnect = ({ showModal, setShowModal }) => {
  const [info, setInfo] = useState({
    full_name: "",
    country: "",
    city: "",
    email: "",
    phone_number: "",
    role: "",
  });

  const [isFullName, setIsFullName] = useState(true);
  const [isNotValid, setIsNotValid] = useState({
    full_name: false,
    country: false,
    city: false,
    email: false,
    phone_number: false,
    role: false,
  });
  const [emailError, setEmailError] = useState(false);

  const userPost = async() => {
      await axios.post('http://159.65.144.176/api/reqs/',{
        "full_name": info.full_name,
        "country": info.country,
        "city": info.city,
        "phone_number": info.phone_number,
        "role": info.role 
        }
      ).then(res => console.log(res))
      .catch(console.log("Error"))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let errors = {
      full_name: false,
      country: false,
      city: false,
      email: false,
      phone_number: false,
      role: false,
    };
    setIsNotValid(errors);
    if (!/^([^\s]+\s[^\s]+.*)$/.test(info.full_name)) {
      setIsFullName(false);
    } else {
      setIsFullName(true);
    }
    if (info.full_name.trim() === "") {
      errors = { ...errors, full_name: true };
    }
    if (info.country.trim() === "") {
      errors = { ...errors, country: true };
    }
    if (info.city.trim() === "") {
      errors = { ...errors, city: true };
    }
    if (info.email.trim() === "") {
      errors = { ...errors, email: true };
    }
    if (info.phone_number.trim() === "") {
      errors = { ...errors, phone_number: true };
    }
    if (info.role.trim() === "") {
      errors = { ...errors, role: true };
    }
    if (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(info.email)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
    return userPost()
  };

  const handleCancel = () => {
    setShowModal(false);
  };
  return (
    <Modal open={showModal} onOk={false} onCancel={handleCancel} centered>
      <div className={s.contact}>
        <h2>
          <Image src={logo} width={280} height={190} alt="logo" />
        </h2>
        <div className={s.contact_desc}>
          <div>
            <input
              className={s.input_contact}
              type="text"
              name="name"
              data-id="1"
              placeholder="ФИО"
              value={info.full_name}
              onChange={(e) => setInfo({ ...info, full_name: e.target.value })}
            />
            {isFullName === false ? (
              <p style={{ color: "red" }}>Введите ваше полное ФИО</p>
            ) : (
              ""
            )}
            {isNotValid.full_name === true ? (
              <p style={{ color: "red" }}>Заполните данное поле</p>
            ) : (
              ""
            )}
          </div>
          <div>
            <input
              className={s.input_contact}
              type="text"
              name="name"
              data-id="1"
              placeholder="Страна"
              value={info.country}
              onChange={(e) => setInfo({ ...info, country: e.target.value })}
            />
            {isNotValid.country === true ? (
              <p style={{ color: "red" }}>Заполните данное поле</p>
            ) : (
              ""
            )}
          </div>
          <div>
            <input
              className={s.input_contact}
              type="text"
              name="name"
              data-id="1"
              placeholder="Город"
              value={info.city}
              onChange={(e) => setInfo({ ...info, city: e.target.value })}
            />
            {isNotValid.city === true ? (
              <p style={{ color: "red" }}>Заполните данное поле</p>
            ) : (
              ""
            )}
          </div>
          <div>
            <input
              className={s.input_contact}
              type="email"
              name="name"
              data-id="1"
              placeholder="Email"
              value={info.email}
              onChange={(e) => setInfo({ ...info, email: e.target.value })}
            />
            {emailError === true ? (
              <p style={{ color: "red" }}>Введите корректный email адрес</p>
            ) : (
              ""
            )}
          </div>
          <div>
            <input
              className={s.input_contact}
              type="number"
              name="name"
              data-id="1"
              placeholder="Tелефон"
              value={info.phone_number}
              onChange={(e) =>
                setInfo({
                  ...info,
                  phone_number: e.target.value.replace(/[^\d+]/g, ""),
                })
              }
            />
            <p style={{ color: "green" }}>
              Введите корректный номер телефона <br /> Пример: +70000000000
            </p>
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
              value={info.role}
              onChange={(e) => setInfo({ ...info, role: e })}
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
            {isNotValid.role === true ? (
              <p style={{ color: "red" }}>Выберите роль</p>
            ) : (
              ""
            )}
          </div>

          <p className={s.desc}>
            Я даю согласие на обработку моих персональных данных согласно
            политике конфиденциальности
          </p>
        </div>
        <div className={s.btn}>
          <form onSubmit={handleSubmit}>
            <button type="submit">
              <ArrowRightOutlined
                style={{ color: "white", fontSize: "35px" }}
              />
            </button>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default ModalConnect;


// events
// "id": 9,
// "title": "Lorem2",
// "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis totam nemo error blanditiis modi aut consequuntur, accusamus dicta maiores eligendi quaerat sit cumque ad, nostrum aperiam assumenda esse corrupti hic.",
// "image": "http://159.65.144.176/f77bab65-b095-4d1f-8441-ad111ec89487.jpeg"