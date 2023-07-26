import React from 'react';
import './brand.css';

const Brand = () => {
  return (
    <>
      <div className="brand-content">
        <div className="brand-content-leftside">
          <h1 className="brand-content-leftside-gradient">
            Зарабатывайте больше <br /> <span> с WELBEX</span>
          </h1>
          <p>
            Развиваем и контролируем <br /> продажи за вас
          </p>
        </div>
        <div className="brand-content-rightside">
          <h3>
            Вместе с{' '}
            <span>
              бесплатной <br /> консультацией
            </span>{' '}
            мы дарим:
          </h3>
          <div className="brand-content-rightside-services">
            <p>
              ВИДЖЕТЫ <br /> <span>30 готовых решений</span>
            </p>
            <p>
              DASHBOADRD <br /> <span>с показателями вашего бизнеса</span>
            </p>
            <p>
              SKYPE АУДИТ <br /> <span>отдела продаж и CRM систем</span>
            </p>
            <p>
              35 ДНЕЙ <br /> <span>использования CRM</span>
            </p>
          </div>
          <div className="brand-content-button">
            <button type="button">Получить консультацию</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brand;
