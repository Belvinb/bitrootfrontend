import React, { useState } from "react";
import "./Card.css";

const Card = ({ value }) => {
  const { date, title, content, thumbnail, author } = value;

  return (
    <>
      <div className="column">
        <div className="card">
          <img className="image" src={thumbnail.small} alt="" />
          <h3 className="cardTitle">{title}</h3>
          <p className="content">{content}</p>
          <p>
            {author.name} : {author.role}
          </p>
          <button>Learn more</button>
        </div>
      </div>
    </>
  );
};

export default Card;
