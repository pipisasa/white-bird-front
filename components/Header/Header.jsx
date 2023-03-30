import React, { useState } from "react";
import s from "./Header.module.scss";
import { motion } from "framer-motion";
import Sidebar from "../Sidebar/Sidebar";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <header className={s.header_main}>
        <div className={s.header_content}>
          <ul className={s.header_navbar}>
            <li>
              <a href="#">О компании</a>
            </li>
            <li>
              <a href="#">Мероприятия</a>
            </li>
            <li>
              <a href="#">Новости</a>
            </li>
            <li>
              <a href="#">Контакты</a>
            </li>
          </ul>
          {/* header_navbar */}

          <img className={s.header_logo} src="./logo.png" alt="logo" />
          <div className={s.header_btn_burger}>
            <button className={s.header_btn}>Оставить заявку</button>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, duration: 0.5 }}
              className={s.burger_menu}
            >
              <div className={s.nav_icon} onClick={() => setShowNav(!showNav)}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </motion.div>
            {/* burger_menu */}
          </div>
          {/* header_btn_burger */}
        </div>
        {/* header_content */}
      </header>
      {/* header_main */}

      {showNav && <Sidebar show={showNav} setShowNav={setShowNav} />}
    </>
  );
};

export default Header;
