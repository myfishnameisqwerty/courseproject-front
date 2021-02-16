import React from "react";
import './carousel.css'
export default function Carousel({pictures}) {
  const scrolId = Math.random() + "";
  
  return (
    <div className="carouselImageBox">
      <div id={scrolId} className="carousel slide" data-ride="carousel">
        <div className="carousel-inner" >
          {pictures.map((cur, i) => imgSlide(cur, i))}
          
        </div>
        
        <a
          className="carousel-control-prev"
          href={"#" + scrolId}
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href={"#" + scrolId}
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

const imgSlide = (img, i) => {
  
  let classes = "carousel-item";
  if (i === 0) classes += " active";
  return (
    <div className={classes} key={Math.random()}>
      <img key={Math.random()} className="d-block w-100" src={`/${img}`} />
    </div>
  );
};
