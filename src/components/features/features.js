import React from "react";
import "./features.css";
// import flag from "../images/flag.png";
// import kerla from "../images/kerla.png";
import newDelhi from "../images/newDelhi.png";
//  import panjab from "../images/panjab.png";
import rajsthan from "../images/rajsthan.png";
import up from "../images/up.png";

const Features = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img className="featuredImg" src={newDelhi} alt="up_photo" />
        <div className="featuredTitles">
          <h1>kerla</h1>
          <h21>123 properties</h21>
        </div>
      </div>

      <div className="featuredItem">
        <img className="featuredImg" src={up} alt="panjab_photo" />
        <div className="featuredTitles">
          <h1>kerla</h1>
          <h21>123 properties</h21>
        </div>
      </div>

      <div className="featuredItem">
        <img className="featuredImg" src={rajsthan} alt="newDelhi_photo" />
        <div className="featuredTitles">
          <h1>kerla</h1>
          <h21>123 properties</h21>
        </div>
      </div>
    </div>
  );
};
export default Features;
