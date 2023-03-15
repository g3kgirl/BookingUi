import React from "react";
import "./home.css";

import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Features from "../../components/features/features";
import PropertyList from "../../components/propertyList/PropertyList";
import Featuredproperty from "../../components/featuredProperties/Featuredproperty";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Features />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Home guests love</h1>
        <Featuredproperty />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};
export default Home;
