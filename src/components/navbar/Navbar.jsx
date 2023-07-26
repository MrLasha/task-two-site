import './navbar.css';
import part1 from '../../assets/part1.png';
import part2 from '../../assets/part2.png';
import { LiaTelegramPlane } from 'react-icons/lia';
import { FaViber } from 'react-icons/fa';
import { ImWhatsapp } from 'react-icons/im';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links-logo">
          <img src={part1} alt="logo" />
          <img src={part2} alt="logo" />
          <div className="navbar-links-logo-description">
            крупный интегратор CRM в России и ещё 8 странах
          </div>
        </div>
        <div className="navbar-links-sevice">
          <a>Услуги</a>
          <a>Виджеты</a>
          <a>Интеграции</a>
          <a>Кейсы</a>
          <a>Сертификаты</a>
        </div>
        <div className="navbar-phonenumber">+7 555 555-55-55</div>
        <div className="navbar-links-contact-logo">
          <LiaTelegramPlane className="navbar-links-contact-logo-img" />
          <FaViber className="navbar-links-contact-logo-img" />
          <ImWhatsapp className="navbar-links-contact-logo-img" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
