import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useState } from "react";
import "./Hotel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCircle,
  faCircleXmark,
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import hImg from "../../components/listImges/hotels.png";

import hImg2 from "../../components/listImges/resort.png";
import hImg3 from "../../components/listImges/beach.png";
import MailList from "../../components/mailList/MailList";
import hImg4 from "../../components/listImges/homestay.png";
import hImg5 from "../../components/listImges/restrorant.png";
const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: hImg,
    },
    {
      src: hImg2,
    },
    {
      src: hImg3,
    },
    {
      src: hImg4,
    },
    {
      src: hImg5,
    },
    {
      src: hImg,
    },
  ];
  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSliderNumber;
    if (direction === "l") {
      newSliderNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSliderNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSliderNumber);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("l")}
            />
          </div>
        )}

        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>SRInn st 125 New Delhi</span>
          </div>
          <span className="hotelDistance">
            Excellent location 500m from station
          </span>
          <span className="hotelPriceHighLight">
            Book a stay over 600rupees at this property and get free station
            taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of india</h1>
              <p className="hotelDesc">
                A paragraph is a series of sentences that are organized and
                coherent, and are all related ... A small paragraph of text
                receding into the left of the image.In literary theory, a text
                is any object that can be "read", whether this object is a work
                of literature, a street sign, an arrangement of buildings on a
                city block, or styles of clothing. It is a coherent set of signs
                that transmits some kind
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect fon 3 night stay !</h1>
              <span>
                Located in and are all related ... A small paragraph of text
                receding into the left of the image.
              </span>
              and are all related ... A small paragraph of text receding into
              the left of the image.
              <h2>
                <b>$945</b> (3 nights)
              </h2>
              <button>Reserve or Book Now</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
