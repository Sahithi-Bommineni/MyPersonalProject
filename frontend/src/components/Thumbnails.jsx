
import React, { useState } from 'react';
import '../style/thumbnail.css';

const Thumbnail = ({ imgSrc, title, description,btn_content }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="thumbnail" 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
                <div className="thumbnail-content">
                    <img src={imgSrc} alt={title} />
                     <div className="title-description">
                        <h3 className="title">{title}</h3>
                        <p className="description">{description} </p>
                     </div>
                     <button
                        className="play-button"
                        onMouseEnter={(e) => {
                            e.target.style.background = 'linear-gradient(135deg, #3d4127, #636b2f)';
                            e.target.style.transform = 'translateY(-1px)';
                            }}
                        onMouseLeave={(e) => {
                                e.target.style.background = 'linear-gradient(135deg, #636b2f, #3d4127)';
                                e.target.style.transform = 'translateY(0px)';
                            }}> {btn_content} </button>
                </div>
        </div>
    );
};
export default Thumbnail;
