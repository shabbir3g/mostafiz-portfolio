import React from 'react';

const Project = (props) => {
    const {url, title, thumbnail, tag} = props.service;
    return (
        <li className={tag}>
            <div className="portfolio_item" >
                <a title={title} rel='noreferrer' target="_blank" href={url} className="image_link">
                    <img src={thumbnail} alt="images" />
                </a>
            </div>
        </li>
    );
};

export default Project;