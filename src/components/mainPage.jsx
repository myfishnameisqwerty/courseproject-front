import React, { Component } from "react";
import Filter from "./Filter";
import "../mainPage.css";

const itemsArray = [
  {
    name: "Chebureki",
    desc: "Cheburek is made from unleavened dough filled with ground meat, onions and spices, fried in oil. It is a common street food in Russia.",
    star: 5,
    price: 10,
    min: 10,
    max: 100,
    pictures: ["img/cheb1.jpg", "img/cheb2.jpg", "img/cheb3.jpg"],
  },
  {
    name: "Roast beef",
    desc: "Roast beef is a traditional English dish of beef which is roasted. Essentially prepared as a main meal, the leftovers are often used in sandwiches and sometimes are used to make hash.",
    star: 3,
    price: 140,
    min: 2,
    max: 10,
    pictures: ["img/rb1.jpg", "img/rb2.jpg", "img/rb3.jpg"],
  },
  {
    name: "Humus",
    desc: "Hummus is a Middle Eastern dip, spread, or savory dish made from cooked, mashed chickpeas blended with tahini, lemon juice, and garlic.",
    star: 4,
    price: 0.3,
    min: 100,
    max: 2000,
    pictures: ["img/hummus.jpg"],
  },
  {
    name: "Napoleon",
    desc: "Description. Napoleon Cake is a classic Russian cakes, made of very thin and flaky puff pastry cake layers and a smooth, rich and luscious pastry cream in between the layers.",
    star: 4,
    price: 90,
    min: 1,
    max: 3,
    pictures: ["img/np1.jpg", "img/np2.jpg"],
  },
  {
    name: "Salmon",
    desc: "If you pan-fry fish at home in a tablespoon of olive oil, most of the fat is healthy unsaturated fat, and you don't get any trans fat. ",
    star: 5,
    price: 50,
    min: 4,
    max: 20,
    pictures: ["img/sf1.jpg", "img/sf2.jpg"],
  },
  {
    name: "Shrimps",
    desc: "As with other seafood, shrimp is high in protein but low in food energy. A shrimp-based meal is also a significant source of cholesterol.",
    star: 4,
    price: 40,
    min: 1,
    max: 50,
    pictures: ["img/Shrimps1.jpg", "img/Shrimps2.jpg"],
  },
];

class MainPage extends Component {
  render() {
    return (
      <main className="bg-light ">
        <div className="filterResults mt-2 float-right">
          <select class="form-select" aria-label="Default select example">
            <option value="rating">By rating</option>
            <option value="lowestPrice">By lowest price</option>
            <option value="highestPrice">By highest price</option>
          </select>
          <br />
          <button type="button" class="btn btn-dark mt-1 pr-5 pl-5">
            Sort
          </button>
        </div>
        <div className="row">
          <Filter className="col-2" />
          <div className="col-10">
            <div className="container pb-5 col-10">
              <div className="row">
                {itemsArray.map(({ name, desc, min, max, star, price, pictures }, key) => (
                  <PlaceAnItem key={key} name={name} desc={desc} min={min} max={max} star={star} price={price} pictures={pictures} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
const PlaceAnItem = ({ name, desc, min, max, star, price, pictures }) => {
  console.log(star, price);
  return (
    <div className="mt-5 mb-5 col-md-4 col-lg-3">
      <ItemAbout name={name} desc={desc} min={min} max={max} star={star} price={price} pictures={pictures}/>
      <ItemPrice min={min} maxOfItem={max} price={price}  />
    </div>
  );
};

const ItemAbout = ({ name, desc, min, max, star, price, pictures }) => {
  const starIcon1 = <i className="far fa-star" />;
  const starIcon2 = <i className="fas fa-star" />;
  const scrolId = Math.random()+"";
  const defaultStar = Array(5).fill(starIcon1);
  return (
    <React.Fragment>
      <div className="stars" style={starLikeStyle}>
        {[...defaultStar].fill(starIcon2, 0, star)}
      </div>
      <div className="justify-content-between">
        <div className="carouselImageBox">
          <div
            id={scrolId}
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner" style={imageStyle}>
              {pictures.map((cur, i) => imgSlide(cur, i))}
            </div>
            <a
              className="carousel-control-prev"
              href={"#"+scrolId}
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
              href={"#"+scrolId}
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
          {console.log("price", price)}
          <p id="foodName"><b>{name}</b></p>
          <p id="foodDesc">
            {desc}
          </p>
          <p id="minimum">
            Minimum order of <b>{min}</b> items
          </p>
          <p id="maximum">
            Maximum order of <b>{max}</b> items
          </p>
          <div className="price" style={starLikeStyle}>
            <b className="float-end">Price for 1: {price}₪</b>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
const ItemPrice = ({ min, maxOfItem, price }) => (
  <React.Fragment>
    <div>
      <div className="mt-2">
        <input
          type="number"
          name="foodQuant"
          id="numberOfItems"
          defaultValue={min.toString()}
          min={min}
          max={maxOfItem}
          style={{ width: "55px" }}
        />
        <i className="fas fa-plus ml-1 " style={starLikeStyle}></i>
      </div>
      <p className="text-secondary">
        <b>Total price: {price * min}₪</b>
      </p>
    </div>
  </React.Fragment>
);


const imgSlide = (img, i) => {
  let classes = "carousel-item";
  if (i === 0) classes += " active";
  return (
    <div className={classes}>
      <img className="d-block w-100" src={img} />
    </div>
  );
};


let imageStyle = {
  width: "100%",
};

const starLikeStyle = {
  color: "red",
};

export default MainPage;
