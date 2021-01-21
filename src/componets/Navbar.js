import React from "react";
import '../App.css';
import {FaAlignRight, FaTimes} from "react-icons/all";
import {NavLink} from "react-router-dom";
import logo from "../img/logo_test.png";
import iconSearch from "../img/search.png";
import flagRus from "../img/Flag_Russia.png";
import flagUA from "../img/Flag_Ukraine.png";
import flagUK from "../img/Flag_United_Kingdom.png";

export class Navbar extends React.Component {

    state = {
        isOpen: false,
        navBarItems: ['Главная', 'Услуги', 'Наши роботы', 'О нас', 'Контакты'],
    }
    handleToggle = () => {
        this.setState({isOpen: !this.state.isOpen})
    }

    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <NavLink to="/hyatt">
                            <div className="logo">
                                <img src={logo} alt="logo"/>
                            </div>
                        </NavLink>
                        <button type="button" className="nav-btn" onClick={this.handleToggle}>
                            {!this.state.isOpen
                                ? <FaAlignRight className="nav-icon"/>
                                : <FaTimes className="nav-icon"/>
                            }
                        </button>
                    </div>
                    <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>

                        <li key="0" className={this.state.isOpen ? "nav-icon-hide show-icon" : "nav-icon-hide"}>
                            <NavLink to="/">
                                Меню
                            </NavLink>
                        </li>

                        {
                            this.state.navBarItems.map((item, index) => {
                                    return (
                                        <li key={index + 1}
                                            className={this.state.isOpen ? "nav-icon show-icon" : "nav-icon"}>
                                            <NavLink to="/">
                                                {item}
                                            </NavLink>
                                        </li>
                                    )
                                }
                            )
                        }
                    </ul>
                    <div
                        className={this.state.isOpen ? "nav-search-language show-search-language" : "nav-search-language"}>
                        <div className="nav-search">
                            <div
                                className={this.state.isOpen ? "nav-search-icon nav-search-icon-show" : "nav-search-icon"}>
                                <NavLink to="/">
                                    <img src={iconSearch} alt="search"/>
                                </NavLink>
                            </div>
                            <div
                                className={this.state.isOpen ? "nav-search-input nav-search-input-show" : "nav-search-input"}>
                                <input type="text" placeholder="Поиск"/>
                            </div>
                        </div>
                        <div className={this.state.isOpen ? "nav-language nav-language-show" : "nav-language"}>
                            <div
                                className={this.state.isOpen ? "nav-language-flag nav-language-flag-show" : "nav-language-flag"}>
                                <div className="nav-flag">
                                    <NavLink to="/">
                                        <img src={flagRus} alt="flagRus"/>
                                    </NavLink>
                                    <div>
                                        <div className="arrowDown arrowUp hide-arrow"/>
                                    </div>
                                </div>
                                <div className={this.state.isOpen ? "nav-flag-hover nav-flag-show" : "nav-flag-hover"}>
                                    <div>
                                        <NavLink to="/">
                                            <img src={flagUA} alt="flagUA"/>
                                        </NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="/">
                                            <img src={flagUK} alt="flagUK"/>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}
