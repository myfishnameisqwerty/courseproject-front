import React, { Component } from "react";
import Filter from "./Filter";
import "../mainPage.css";

const itemsArray = [
  { star: 5, price: 10 },
  { star: 3, price: 15 },
  { star: 1, price: 20 },
  { star: 4, price: 8 }
];

class MainPage extends Component {
  render() {
    return (
      <main className="bg-light ">
        <div className="row">
          <Filter className="col-2" />
          <div className="col-10"><div className="container pb-5 col-10">
            <div className="row">
              {itemsArray.map(({ star, price },key) => (
                <PlaceAnItem key={key} star={star} price={price} />
              ))}
            </div>
          </div>
        </div>
          
        </div>
      </main>
    );
  }
}
const PlaceAnItem = ({ star, price }) => {
  console.log(star, price);
  return (
    <div className="mt-5 mb-5 col-md-4 col-lg-3">
      <ItemAbout star={star} price={price} />
      <ItemPrice price={price} />
    </div>
  );
};

const ItemAbout = ({ star, price }) => {
    const starIcon1 = <i className="far fa-star" />;
    const starIcon2 = <i className="fas fa-star" />;
    const defaultStar = Array(5).fill(starIcon1);
  return (
    <React.Fragment>
      <div className="stars" style={starLikeStyle}>
        {[...defaultStar].fill(starIcon2, 0, star)}
      </div>
      <div className="justify-content-between">
        <div className="carouselImageBox">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner" style={imageStyle}>
              {imageList.map((cur, i) => imgSlide(i))}
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
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
              href="#carouselExampleControls"
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
          <p id="foodName">Chebureki</p>
          <p id="foodDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nisi,
            harum incidunt placeat assumenda dignissimos vitae obcaecati dolorem
            officiis expedita, cum cumque facere veniam impedit dolores saepe
            nulla sed magni?
          </p>
          <p id="minimum">
            Minimum order of <b>{minimumOrder}</b> items
          </p>
          <p id="maximum">
            Maximum order of <b>{maximumOrder}</b> items
          </p>
          <div className="price" style={starLikeStyle}>
            <b className="float-end">Price for 1: {price}₪</b>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
const ItemPrice = ({ price }) => (
  <React.Fragment>
    <div>
      <div className="mt-2">
        <input
          type="number"
          name="foodQuant"
          id="numberOfItems"
          defaultValue="10"
          min={minimumOrder}
          max={maximumOrder}
          style={{ width: "55px" }}
        />
        <i className="fas fa-plus ml-1 " style={starLikeStyle}></i>
      </div>
      <p className="text-secondary">
        <b>Total price: {price * 10}₪</b>
      </p>
    </div>
  </React.Fragment>
);

const imageList = [
  "https://cdn.lifehacker.ru/wp-content/uploads/2020/01/Kak-prigotovit-idealnye-domashnie-chebureki_1579377232.jpg",
  "https://www.povarenok.ru/data/cache/2017oct/23/16/2156089_32368-710x550x.jpg",
  "https://img-global.cpcdn.com/recipes/ee9394e8a939297c/1200x630cq70/photo.jpg",
];
const imgSlide = (i) => {
  let classes = "carousel-item";
  if (i === 0) classes += " active";
  return (
    <div className={classes}>
      <img className="d-block w-100" src={imageList[i]} />
    </div>
  );
};

const minimumOrder = 10;
const maximumOrder = 100;
let imageStyle = {
  width: "100%",
};
//const price = 12;
const likes = 4;
const starLikeStyle = {
  color: "red",
};

export default MainPage;
