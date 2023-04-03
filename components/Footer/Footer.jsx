import React from "react";
import s from "./Footer.module.scss";
import {
  WhatsAppOutlined,
  PhoneOutlined,
  InstagramOutlined,
  FacebookOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.footer_contents}>
        <div className={s.footer_content}>
          <h5>График:</h5>

          <p>пн-пт: 9:00 – 18:30</p>
          <p>сб: 10:00 – 16:00</p>
          <p>вс: выходной</p>
        </div>

        <div className={s.footer_content}>
          <h5>Связаться:</h5>

          <p>0709849789</p>
          <p>0709849789</p>
          <p>0709849789</p>
        </div>

        <div className={s.footer_content}>
          <h5>Адрес:</h5>

          <p>г. Бишкек, пр. Чынгыза</p>
          <p>Айтматова 95/2</p>
          <p>belyaptisa@gmail.com</p>
        </div>
      </div>

      <div className={s.social}>
        <div className={s.social_content}>
          <div className={s.social_block}>
            <WhatsAppOutlined style={{ color: "white" }} />
          </div>
          <div className={s.social_block}>
            <a href="https://m.facebook.com/story.php?story_fbid=pfbid0i66H9LXfkEz4hpdR44ozeYn2PSBLHc58P7ckGzWcuT3DyRK4RxHdCGmtiUBcDuzEl&id=100087805783745&mibextid=Nif5oz">
              <FacebookOutlined style={{ color: "white" }} />
            </a>
          </div>
          <div className={s.social_block}>
            <a href="https://www.youtube.com/@belayaptisa">
              <YoutubeOutlined style={{ color: "white" }} />
            </a>
          </div>
          <div className={s.social_block}>
            <a href="https://www.instagram.com/belayaptisa/?igshid=ZDdkNTZiNTM%3D">
              <InstagramOutlined style={{ color: "white" }} />
            </a>
          </div>
        </div>
      </div>

      <hr className={s.linear} />

      <div className={s.low}>
        <div>
          <p>2023 © ЛМК БЕЛАЯ ПТИЦА</p>
        </div>
        <div>
          <span>made in</span>
          <h4>SNOWFLAKE</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
