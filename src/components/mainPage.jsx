import React, { Component, useState } from "react";
import Filter from "./Filter";
import "../mainPage.css";
import GalleryDisplay from "./GalleryDisplay";
import Sorter from "./Sorter";
const MainPage = ({ itemsArray }) => {
  let [displayGallery, setDisplayGallery] = useState(
    <GalleryDisplay galleryList={itemsArray} />
  );

  return (
    <main className="bg-light ">
      <div className="filterResults mt-2 float-right">
        <Sorter setDisplayGallery={setDisplayGallery} itemsArray={itemsArray} />
      </div>
      <div className="row">
        <Filter className="col-2" />
        <div className="col-10">
          <div className="container pb-5 col-10">
            <div className="row">{displayGallery}</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainPage;
