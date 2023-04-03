import React from "react";
import s from "./Contact.module.scss";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Select } from "antd";

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const Contact = () => {
  return (
    <div id="contact" className={s.contact}>
      <h2>Связаться с нами</h2>
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

        <div style={{marginTop:'40px'}}>
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
          Я даю согласие на обработку моих персональных данных согласно политике
          конфиденциальности
        </p>
      </div>

      <div className={s.btn}>
        <ArrowRightOutlined style={{ color: "white", fontSize: "35px" }} />
      </div>
    </div>
  );
};

export default Contact;
