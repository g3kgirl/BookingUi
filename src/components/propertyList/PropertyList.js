import React from "react";
import "./propertyList.css";
import hotelimg from "../listImges/hotels.png";
import resortimg from "../listImges/resort.png";
import homeimg from "../listImges/homestay.png";
import restrorantimg from "../listImges/restrorant.png";
import beachimg from "../listImges/beach.png";

const PropertyList = () => {
  return (
    <div className="plist">
      <div className="plistItem">
        <img className="plistImg" src={hotelimg} alt="ss" />
        <div className="plistTitles">
          <h1>Hotels</h1>
          <h2>233 hotels</h2>
        </div>
      </div>

      <div className="plistItem">
        <img className="plistImg" src={resortimg} alt="ss" />
        <div className="plistTitles">
          <h1>Hotels</h1>
          <h2>233 hotels</h2>
        </div>
      </div>

      <div className="plistItem">
        <img className="plistImg" src={homeimg} alt="ss" />
        <div className="plistTitles">
          <h1>Hotels</h1>
          <h2>233 hotels</h2>
        </div>
      </div>

      <div className="plistItem">
        <img className="plistImg" src={restrorantimg} alt="ss" />
        <div className="plistTitles">
          <h1>Hotels</h1>
          <h2>233 hotels</h2>
        </div>
      </div>

      <div className="plistItem">
        <img className="plistImg" src={beachimg} alt="ss" />
        <div className="plistTitles">
          <h1>Hotels</h1>
          <h2>233 hotels</h2>
        </div>
      </div>
    </div>
  );
};
export default PropertyList;
