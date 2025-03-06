import React from "react";
import Slider from "react-slick";
import Image from "../image/Image.tsx";
import Video from "../video/Video.tsx";

import "./carousel.module.scss";

// Definire il tipo dei dati che ci aspettiamo
interface CarouselProps {
    items: Array<{ type: string; src: string; alt: string; title: string }>;
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                {items.map((item, index) => (
                    <div key={index}>
                        {/* Condizioni per decidere se è un'immagine o un video */}
                        {item.type === "image" ? (
                            <Image src={item.src} alt={item.alt} title={item.title} />
                        ) : (
                            <Video src={item.src} title={item.title} />
                        )}
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
