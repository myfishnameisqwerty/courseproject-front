import React from "react";
export default function Stars({ star }) {
  const starIcon1 = <i className="far fa-star" />;
  const starIcon2 = <i className="fas fa-star" />;
  const defaultStar = Array(5).fill(starIcon1);
  const starLikeStyle = {
    color: "red",
  };
  return (
    <div className="stars" style={starLikeStyle}>
      {[...defaultStar].fill(starIcon2, 0, star)}
    </div>
  );
}
