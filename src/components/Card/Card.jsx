import React from "react";
import "../style.scss";
const Card = ({title, src, year, link}) => {
  return (
    <a href={link} target="_blank" className='card shadow-lg relative'>
      <img
        src={src}
        alt=''
      />
      <div className='card-text'>
        <div >
          <h4>{title}</h4>
          <p>Website</p>
        </div>
        <div className="card-year">
            <span>{year}</span>
        </div>
      </div>
    </a>
  );
};

export default Card;
