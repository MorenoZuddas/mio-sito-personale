import React from "react";
import "./image.module.scss";

interface ImageCardProps {
    src: string;
    alt: string;
    title: string;
}

const Image: React.FC<ImageCardProps> = ({ src, alt, title }) => {
    return (
        <div className="image-card">
            <img src={src} alt={alt} />
            <h3>{title}</h3>
        </div>
    );
};

export default Image;
