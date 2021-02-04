import React from "react";

const ItemAbout = ({ name, desc, min, max, star, price, pictures }) => {
    const starIcon1 = <i className="far fa-star" />;
    const starIcon2 = <i className="fas fa-star" />;
    const scrolId = Math.random() + "";
    const defaultStar = Array(5).fill(starIcon1);
    return (
      <React.Fragment>
        <div className="stars" style={starLikeStyle}>
          {[...defaultStar].fill(starIcon2, 0, star)}
        </div>
        <div className="">
          <div className="carouselImageBox">
            <div id={scrolId} className="carousel slide" data-ride="carousel">
              <div className="carousel-inner" style={{borderRadius: "70px"}}>
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
  
          <div className="productDesc">
            <p id="foodName">
              <b>{name}</b>
            </p>
            <p id="foodDesc">{desc}</p>
            <p id="minimum">
              Minimum order of <b>{min}</b> items
            </p>
            <p id="maximum">
              Maximum order of <b>{max}</b> items
            </p>
            <div className="price" style={starLikeStyle}>
              <b className="float-end">Unit price: {price}₪</b>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
};

const imgSlide = (img, i) => {
    let classes = "carousel-item";
    if (i === 0) classes += " active";
    return (
      <div className={classes}>
        <img className="d-block w-100" src={img} />
      </div>
    );
};  

const starLikeStyle = {
    color: "red",
};
export default ItemAbout;