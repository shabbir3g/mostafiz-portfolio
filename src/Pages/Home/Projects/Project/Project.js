import React from "react";

const Project = (props) => {
  const { url, title, thumbnail, tag } = props.service;
  return (
    <li className={tag}>
      <div className="portfolio_item">
        <div title={title} className="image_link">
          <img src={thumbnail} alt={url} />
        </div>
      </div>
    </li>
  );
};

export default Project;
