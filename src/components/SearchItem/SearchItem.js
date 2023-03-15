import React from "react";
import beachImg from "../listImges/beach.png";
import { useNavigate } from "react-router-dom";
import "./SearchItem.css";

const SearchItem = () => {
  const navigate = useNavigate();

  const handleSee = () => {
    navigate("/hotels/hotels", {});
  };

  return (
    <div className="SearchItem">
      <img src={beachImg} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle"> Tower street apartment</h1>
        <span className="siDistance">400m from center</span>
        <span className="siTaxiOp">freeAirport taxi</span>
        <span className="siSubtitle">Studio apartment with air condition</span>
        <span className="isFeatures">Entire studio + 1 room +21m 1full</span>
        <span className="siCancel">free cancelation</span>
        <span className="siCancelSubtitle">
          you can cancel later , so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailText">
          <span className="siPrice">rs123</span>
          <span className="siPriceText">Includes taxes and fees</span>
          <button onClick={handleSee} className="AbCheckButton">
            See availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
