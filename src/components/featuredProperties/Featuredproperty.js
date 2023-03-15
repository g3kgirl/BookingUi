import React from "react";
import "./Featuredproperty.css";
// import image1 from "../propertyImages/img1.png";
import image2 from "../propertyImages/img2.png";
import image3 from "../propertyImages/img3.png";
import image4 from "../propertyImages/img4.png";
import image5 from "../propertyImages/img5.png";
const Featuredproperty = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img className="fpImg" src={image4} alt="" />
        <span className="fpName">Aparthotel star </span>
        <span className="fpCity">Uttar pradesh</span>
        <span className="fpPrice">Starting from 1500rs</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img className="fpImg" src={image2} alt="" />
        <span className="fpName">Aparthotel star </span>
        <span className="fpCity">Uttar pradesh</span>
        <span className="fpPrice">Starting from 1500rs</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img className="fpImg" src={image5} alt="" />
        <span className="fpName">Aparthotel star </span>
        <span className="fpCity">Uttar pradesh</span>
        <span className="fpPrice">Starting from 1500rs</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img className="fpImg" src={image4} alt="" />
        <span className="fpName">Aparthotel star </span>
        <span className="fpCity">Uttar pradesh</span>
        <span className="fpPrice">Starting from 1500rs</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default Featuredproperty;
