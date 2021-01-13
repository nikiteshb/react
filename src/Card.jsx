import React from "react";

function Card(props) {
  return (
    <>
      <div className="cards col-4">
        <div className="card">
          <img className="img-fluid"
            src={props.imgsrc}
            alt=""
          />
          <div className="card__info">
            <div className="card__category">{props.category}</div>
            <h3 className="card__title">{props.stitle}</h3>
            <a
              className="btn btn-primary"
              href={props.link}
              target="_blank"
            >
              Watch Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;