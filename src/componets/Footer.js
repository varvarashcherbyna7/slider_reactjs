import React from "react";
import iconFacebook from "../img/icon_facebook.png";
import iconInstagram from "../img/icon_instagram.png";
import iconUtube from "../img/icon_utube.png";
import iconGoogle from "../img/icon_google.png";
import {NavLink} from "react-router-dom";

export const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-sub-container">


                <div className="footer-contents">
                    <div className="footer-content">
                        <div className="footer-item-section">
                            <h4>О компании</h4>
                            <ul>
                                <li>Наши работы</li>
                                <li>Контакты</li>
                                <li>Доставка</li>
                                <li>Форма заказа</li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-content">
                        <div className="footer-item-section">
                            <h4>Услуги</h4>
                            <div className="footer-content-services">
                                <div className="footer-content-service">
                                    <ul>
                                        <li>Производство оборудования</li>
                                        <li>Металлическая мебель</li>
                                        <li>Металлоконструкции</li>
                                        <li>Металлообработка</li>
                                    </ul>
                                </div>
                                <div className="footer-content-service">
                                    <ul>
                                        <li>Раскрой металла</li>
                                        <li>Конструкторское бюро</li>
                                        <li>Аренда техники</li>
                                        <li>Ремонт техники</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-contacts">
                        <div className="footer-item-section-contacts">
                            <h4>Контактная информация</h4>
                            <ul>
                                <li>Заводская улица, 2В,
                                    Буча,
                                    Киевская область, 08292
                                </li>
                                <li>ПН - ПТ: 09:00 - 18:00</li>
                                <li>+38(097)123-45-67</li>
                            </ul>
                            <div className="footer-contacts-social">
                                <div><NavLink to="/"><img src={iconFacebook} alt="icon Facebook"/></NavLink></div>
                                <div><NavLink to="/"><img src={iconInstagram} alt="icon Instagram"/></NavLink></div>
                                <div><NavLink to="/"><img src={iconUtube} alt="icon Utube"/></NavLink></div>
                                <div><NavLink to="/"><img src={iconGoogle} alt="icon Google"/></NavLink></div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="footer-dev">
                    Developed by
                    <p>Stubbs</p>
                </div>
            </div>
        </div>
    )
}
