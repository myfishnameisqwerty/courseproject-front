import React from "react";
import GalleryDisplay from "./GalleryDisplay";
function sortMapByInOrder(list, by, order) {
    list.sort((a, b) => (a[by] > b[by] ? -1 * order : 1 * order));
  }
const Sorter = ({setDisplayGallery, itemsArray}) => {
    return(<select
        className="form-select"
        aria-label="Default select example"
        onChange={(event) => {
          let val = JSON.parse(event.target.value);
          sortMapByInOrder(itemsArray, val.sortBy, val.order);
          setDisplayGallery(<GalleryDisplay galleryList={itemsArray} />);
        }}
      >
        <option disabled selected hidden>
          Sort By
        </option>
        <option value='{"sortBy":"star", "order": 1}'>By rating</option>
        <option value='{"sortBy":"price", "order": -1}'>
          By lowest price
        </option>
        <option value='{"sortBy":"price", "order": 1}'>
          By highest price
        </option>
      </select>)
}
export default Sorter;