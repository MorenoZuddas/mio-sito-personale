import React from "react";
import "./video.module.scss";

interface VideoCardProps {
    src: string;
    title: string;
}

const Video: React.FC<VideoCardProps> = ({ src, title }) => {
    return (
        <div className="video-card">
            <video width="100%" controls>
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <h3>{title}</h3>
        </div>
    );
};

export default Video;
