import React from "react";
import '../App.css';
import ImageGallery from 'react-image-gallery';
import bgPhoto from "../img/Rectangle_bg_slider.png";

const images = [
    {
        original: bgPhoto,
    },
    {
        original: bgPhoto,
    },
    {
        original: bgPhoto,
    },
    {
        original: bgPhoto,
    },
];

export class Slider extends React.Component {


    render() {
        return (
            <div className="slider-container">
                    <div className="slider-title">
                        <div className="slider-text">
                            Высокоточное изготовление
                        </div>
                        <div className="slider-line"/>
                        <div className="slider-text">
                            изделий из металла по чертежам
                        </div>
                    </div>
                    <ImageGallery
                        items={images}
                        showThumbnails={false}
                        lazyLoad={true}
                        showNav={false}
                        showFullscreenButton={false}
                        showPlayButton={false}
                        showBullets={true}
                        autoPlay={true}
                        slideInterval={1500}
                        isRTL={true}
                    />
            </div>
        )
    }
}

