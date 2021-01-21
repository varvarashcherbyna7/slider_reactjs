import React from "react";
import Title from "./Title";
import companyImg1 from "../img/photo_company1.png";
import companyImg2 from "../img/photo_company2.png";

export const OurCompany = () => {
    return (
        <div className="company-container">
            <Title title={"Наша компания"}/>
            <div className="company-section-images">
                <div className="company-image">
                    <img src={companyImg1} alt="Company image"/>
                    <div className="company-title">
                        <h2>Почему мы?</h2>
                        <p>Люди – профессионалы с большим опытом работы.
                            Полный спектр работ по металлообработке в одном месте –
                            комплексный индивидуальный подход.
                            Конструкторский отдел. Логистика.
                            Многолетний опыт машиностроения – создание промышленного </p>
                        <div className="company-title-line"/>
                    </div>
                </div>
                <div className="company-image">
                    <img src={companyImg2} alt="Company image"/>
                    <div className="company-title company-title-right">
                        <h2>Наши преимущества</h2>
                        <p>Люди – профессионалы с большим опытом работы. П
                            олный спектр работ по металлообработке в
                            одном месте – комплексный индивидуальный подход.
                            Конструкторский отдел. Логистика.
                            Многолетний опыт машиностроения – создание промышленного  </p>
                        <div className="company-title-line company-title-line-right"/>
                    </div>

                </div>
            </div>
        </div>
    )
}
