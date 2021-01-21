import React, {useState} from "react";
import Title from "./Title";
import imgBgBigNut from "../img/services_bg_big_nut.png";
import imgBgSmallNut from "../img/services_bg_small_nut.png";
import imgServices1 from "../img/servicesImg1.png";
import imgServices2 from "../img/servicesImg2.png";
import imgServices3 from "../img/servicesImg3.png";
import imgServices4 from "../img/servicesImg4.png";
import imgServices5 from "../img/servicesImg5.png";
import imgServices6 from "../img/servicesImg6.png";
import imgServices7 from "../img/servicesImg7.png";
import imgServices8 from "../img/servicesImg8.png";

const imagesSection = [
    {
        img: imgServices1,
        title: 'Производство оборудования'
    },
    {
        img: imgServices2,
        title: 'Металлическая мебель'
    },
    {
        img: imgServices3,
        title: 'Металлоконструкции'
    },
    {
        img: imgServices4,
        title: 'Металлообработка'
    },
    {
        img: imgServices5,
        title: 'Раскрой металла'
    },
    {
        img: imgServices6,
        title: 'Конструкторское бюро'
    },
    {
        img: imgServices7,
        title: 'Аренда техники'
    },
    {
        img: imgServices8,
        title: 'Ремонт техники'
    },
]

export class Services extends React.Component{

    state = {
        animationBigNut: "",
        animationSmallNut: ""
    }

    listenScrollEvent = e => {
        if (window.scrollY > 100) {
            this.setState({animationBigNut: 'services-rotate-big-nut',
                animationSmallNut: 'services-rotate-small-nut'})
        } else {
            this.setState({animationBigNut: "", animationSmallNut: ""})
        }
    }

    componentDidMount = () => {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    render() {
        return (
            <div className="services-container">
                <div className="services_bg">
                    <div className="services_img_nut">
                        <div className="services_img_big_nut">
                            <img src={imgBgBigNut} alt="Image Nut" className={this.state.animationBigNut}/>
                        </div>
                        <div className="services_img_small_nut">
                            <img src={imgBgSmallNut} alt="Image Nut" className={this.state.animationSmallNut}/>
                        </div>
                    </div>
                    <div className="services_img_nut">
                        <div className="services_img_small_nut">
                            <img src={imgBgSmallNut} alt="Image Nut" className={this.state.animationSmallNut}/>
                        </div>
                        <div className="services_img_big_nut">
                            <img src={imgBgBigNut} alt="Image Nut" className={this.state.animationBigNut}/>
                        </div>
                    </div>
                </div>

                <div className="services-sub-container">
                    <Title title={"Услуги"}/>
                    <div className="services-section-images">
                        {
                            imagesSection.map((item, index) => {
                                return (
                                    <div className="services-section-image" key={index}>
                                        <img src={item.img} alt={`image services${index+1}`}/>
                                        <div className="services-section-image-title">
                                            <p>{item.title}</p>
                                            <div className="services-title-line"/>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="services-btn">
                        Быстрый расчет цены по чертежу
                    </div>
                </div>

            </div>
        )
    }



}
