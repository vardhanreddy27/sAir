import React from "react";
import ReactDOM from "react-dom";
import HeroBanner from "../components/HeroBanner";
import Navbar from "../components/Navbar";
import { AiFillHome, AiOutlineStar, AiOutlineUserAdd } from "react-icons/ai";
import { TbDiscount2 } from "react-icons/tb";
import { Outlet, Link } from "react-router-dom";
import prd from "../../public/shoe.png";
import { BsShop } from "react-icons/bs";
import { SiOpenstreetmap } from "react-icons/si";
import { BiSupport } from "react-icons/bi";
import { RiUserReceivedLine } from "react-icons/ri";
import { useState } from "react";
import BestOffers from "./BestOffers";
import Shops from "./Shops";
import TrackOrders from "./TrackOrders";
import Wishlist from "./Wishlist";
import Support from "./Support";
import Signup from "./Signup";

function Test() {
  const [isActive, setIsActive] = useState(true);
  const [isSecond, setIsSecond] = useState(false);
  const [isThree, setIsThree] = useState(false);
  const [isFour, setIsFour] = useState(false);
  const [isFive, setIsFive] = useState(false);
  const [isSix, setIsSix] = useState(false);
  const [isEight, setIsEight] = useState(false);
  const handleClick = () => {
    setIsActive(true);
    setIsSecond(false);
    setIsThree(false);
    setIsFour(false);
    setIsFive(false);
    setIsSix(false);
    setIsEight(false);
  };
  const handleClick1 = () => {
    setIsActive(false);
    setIsSecond(true);
    setIsThree(false);
    setIsFour(false);
    setIsFive(false);
    setIsSix(false);
    setIsEight(false);
  };
  const handleClick2 = () => {
    setIsActive(false);
    setIsSecond(false);
    setIsThree(true);
    setIsFour(false);
    setIsFive(false);
    setIsSix(false);
    setIsEight(false);
  };
  const handleClick3 = () => {
    setIsActive(false);
    setIsSecond(false);
    setIsThree(false);
    setIsFour(true);
    setIsFive(false);
    setIsSix(false);
    setIsEight(false);
  };
  const handleClick4 = () => {
    setIsActive(false);
    setIsSecond(false);
    setIsThree(false);
    setIsFour(false);
    setIsFive(true);
    setIsSix(false);
    setIsEight(false);
  };
  const handleClick5 = () => {
    setIsActive(false);
    setIsSecond(false);
    setIsThree(false);
    setIsFour(false);
    setIsFive(false);
    setIsSix(true);
    setIsEight(false);
  };
  const handleClick6 = () => {
    setIsActive(false);
    setIsSecond(false);
    setIsThree(false);
    setIsFour(false);
    setIsFive(false);
    setIsSix(false);
    setIsEight(false);
  };
  const handleClick7 = () => {
    setIsActive(false);
    setIsSecond(false);
    setIsThree(false);
    setIsFour(false);
    setIsFive(false);
    setIsSix(false);
    setIsEight(true);
  };

  return (
    <div className="fluid-container">
      <Navbar />
      <div className="row">
        <div className="col-2 sticky  hidden-mobile">
          <div className="menu">
            <div className="d-grid ">
   
            <button
                type="button"
                className={
                  isActive
                    ? "btn btn-primary sidemenu myt"
                    : "btn sidemenu myt"
                }
                onClick={handleClick}
              >
                <Link to="/">
                  <AiFillHome className="menuicon" /> Home
                </Link>
              </button>
                       <button
                type="button"
                className={
                  isThree
                    ? "btn btn-primary sidemenu"
                    : "btn sidemenu"
                }
                onClick={handleClick2}
              >
                <BsShop className="menuicon" />
                Shops
              </button>
              <button
                type="button"
                className={
                  isFour
                    ? "btn btn-primary sidemenu"
                    : "btn sidemenu"
                }
                onClick={handleClick3}
              >
                <SiOpenstreetmap className="menuicon" /> Track Orders
              </button> 
              <button
                type="button"
                className={
                  isFive
                    ? "btn btn-primary sidemenu"
                    : "btn sidemenu"
                }
                onClick={handleClick4}
              >
                <AiOutlineStar className="menuicon" /> Wishlist
              </button>
              <button
                type="button"
                className={
                  isSix
                    ? "btn btn-primary sidemenu"
                    : "btn sidemenu"
                }
                onClick={handleClick5}
              >
                <BiSupport className="menuicon" /> Support
              </button>
              <hr />
              <div className="OfferCard">
                <img src="./shoe.png" className="product" alt="shoe" />
                <p className="trending">Trending</p>
              </div>
              <button
                type="button"
                className={
                  isEight
                    ? "btn btn-primary sign sidemenu"
                    : "btn sidemenu sign"
                }
                onClick={handleClick7}
              >
                <AiOutlineUserAdd className="menuicon" />
                Login / Signup
              </button>
            </div>
          </div>
        </div>
        <div className="col-10">
          {isSecond ? (
            <BestOffers />
          ) : isThree ? (
            <Shops />
          ) : isFour ? (
            <TrackOrders />
          ) : isFive ? (
            <Wishlist />
          ) : isSix ? (
            <Support />
          ) : isEight ? (
            <Signup />
          ) : (
            <HeroBanner />
          )}
        </div>
      </div>
    </div>
  );
}

export default Test;
