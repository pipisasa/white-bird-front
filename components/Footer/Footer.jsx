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
    <div id="footer" className={s.footer}>
      <div className={s.footer_contents}>

        <div className={s.footer_content}>
          <h5>Связаться:</h5>

          <p>Телеграмм - @lunaraigry</p>
          <p>Телефон номер - +996777040272</p>
          
        </div>

        <div className={s.footer_content}>
          <h5>Соц сети:</h5>

          <p>belyaptisa@gmail.com</p>
        </div>
      </div>
      <div className={s.social}>
        <div className={s.social_content}>
          <div className={s.social_block}>
            <a href="https://api.whatsapp.com/send/?phone=996777040272&text=Здравствуйте,&type=phone_number&app_absent=0">
              <WhatsAppOutlined style={{ color: "white" }} />
            </a>
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
          <div className={s.social_block}>
            <a href="https://www.tiktok.com/@belayaptisa?is_from_webapp=1&sender_device=pc">
              <img src="/tiktok.png" alt="dsfd" style={{ color: "white", width: '20px', height: '20px' }} />
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
