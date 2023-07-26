import React from 'react';
import './footer.css';
import { LiaTelegramPlane } from 'react-icons/lia';
import { FaViber } from 'react-icons/fa';
import { ImWhatsapp } from 'react-icons/im';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-heading">
        <div className="footer-links_div">
          <h4>О компании</h4>
          <p>Партнёрская программа</p>
          <p>Вакансии</p>
        </div>
        <div className="footer-links_div">
          <h4>Меню</h4>
          <p>Расчет стоимости</p>
          <p>Услуги</p>
          <p>Виджеты</p>
          <p>Интеграции</p>
          <p>Наши клиенты</p>
        </div>
        <div className="footer-links_div footer-links_div-case">
          <p>Кейсы</p>
          <p>Благодарственные письма</p>
          <p>Сертификаты</p>
          <p>Блог на Youtube</p>
          <p>Вопрос / Ответ</p>
        </div>
        <div className="footer-links_div footer-links_div-contact">
          <h4>Контакты</h4>
          <p>+7 555 555-55-55</p>
          <p>
            <LiaTelegramPlane className="footer-contact-logo-img" />
            <FaViber className="footer-contact-logo-img" />
            <ImWhatsapp className="footer-contact-logo-img" />
          </p>
          <p>Москва, Путевой проезд 3с1, к 902</p>
        </div>
      </div>
      <div className="footer-copyright">
        <p>©WELBEX 2022. Все права защищены.</p>
        <p id="polit-confid">Политика конфиденциальности</p>
      </div>
    </div>
  );
};

export default Footer;
