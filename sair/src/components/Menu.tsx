import React from "react";
import { AiFillHome, AiOutlineStar, AiOutlineUserAdd } from "react-icons/ai";
import { TbDiscount2 } from "react-icons/tb";
import { BsShop } from "react-icons/bs";
import { SiOpenstreetmap } from "react-icons/si";
import { BiSupport } from "react-icons/bi";
import { RiUserReceivedLine } from "react-icons/ri";
import { useState } from "react";

function Menu() {
  const [isActive, setIsActive] = useState(true);
  const [isSecond, setIsSecond] = useState(false);
  const [isThree, setIsThree] = useState(false);
  const [isFour, setIsFour] = useState(false);
  const [isFive, setIsFive] = useState(false);
  const [isSix, setIsSix] = useState(false);
  const [isSeven, setIsSeven] = useState(false);
  const [isEight, setIsEight] = useState(false);
  const handleClick = () => {
    setIsActive(true);
    setIsSecond(false);
    setIsThree(false);
    setIsFour(false);
    setIsFive(false);
    setIsSix(false);
    setIsSeven(false);
    setIsEight(false);
  };
  const handleClick1 = () => {
    setIsActive(false);
    setIsSecond(true);
    setIsThree(false);
    setIsFour(false);
    setIsFive(false);
    setIsSix(false);
    setIsSeven(false);
    setIsEight(false);
  };
  const handleClick2 = () => {
    setIsActive(false);
    setIsSecond(false);
    setIsThree(true);
    setIsFour(false);
    setIsFive(false);
    setIsSix(false);
    setIsSeven(false);
    setIsEight(false);
  };
  const handleClick3 = () => {
    setIsActive(false);
    setIsSecond(false);
    setIsThree(false);
    setIsFour(true);
    setIsFive(false);
    setIsSix(false);
    setIsSeven(false);
    setIsEight(false);
  };
  const handleClick4 = () => {
    setIsActive(false);
    setIsSecond(false);
    setIsThree(false);
    setIsFour(false);
    setIsFive(true);
    setIsSix(false);
    setIsSeven(false);
    setIsEight(false);
  };
  const handleClick5 = () => {
    setIsActive(false);
    setIsSecond(false);
    setIsThree(false);
    setIsFour(false);
    setIsFive(false);
    setIsSix(true);
    setIsSeven(false);
    setIsEight(false);
  };
  const handleClick6 = () => {
    setIsActive(false);
    setIsSecond(false);
    setIsThree(false);
    setIsFour(false);
    setIsFive(false);
    setIsSix(false);
    setIsSeven(true);
    setIsEight(false);
  };
  const handleClick7 = () => {
    setIsActive(false);
    setIsSecond(false);
    setIsThree(false);
    setIsFour(false);
    setIsFive(false);
    setIsSix(false);
    setIsSeven(false);
    setIsEight(true);
  };
  return (
    <div className="fluid-container fixed">
      <nav className="nav flex-column p-2">
        <button
          type="button"
          className={
            isActive
              ? "btn btn-lg btn-primary btn-block"
              : "btn btn-lg btn-block"
          }
          onClick={handleClick}
        >
          <AiFillHome className="menuicon" /> Home
        </button>
        <button
          type="button"
          className={
            isSecond
              ? "btn btn-lg btn-primary btn-block"
              : "btn btn-lg btn-block"
          }
          onClick={handleClick1}
        >
          <TbDiscount2 className="menuicon" /> Best Offers
        </button>
        <button
          type="button"
          className={
            isThree
              ? "btn btn-lg btn-primary btn-block"
              : "btn btn-lg btn-block"
          }
          onClick={handleClick2}
        >
          <BsShop className="menuicon" /> Shops
        </button>
        <button
          type="button"
          className={
            isFour ? "btn btn-lg btn-primary btn-block" : "btn btn-lg btn-block"
          }
          onClick={handleClick3}
        >
          <SiOpenstreetmap className="menuicon" /> Track Orders
        </button>
        <button
          type="button"
          className={
            isFive ? "btn btn-lg btn-primary btn-block" : "btn btn-lg btn-block"
          }
          onClick={handleClick4}
        >
          <AiOutlineStar className="menuicon" /> Wish List
        </button>
        <button
          type="button"
          className={
            isSix ? "btn btn-lg btn-primary btn-block" : "btn btn-lg btn-block"
          }
          onClick={handleClick5}
        >
          <BiSupport className="menuicon" /> Support
        </button>
        <button
          type="button"
          className={
            isSeven
              ? "btn btn-lg btn-primary btn-block"
              : "btn btn-lg btn-block"
          }
          onClick={handleClick6}
        >
          <RiUserReceivedLine className="menuicon" /> Login
        </button>
        <button
          type="button"
          className={
            isEight
              ? "btn btn-lg btn-primary btn-block"
              : "btn btn-lg btn-block"
          }
          onClick={handleClick7}
        >
          <AiOutlineUserAdd className="menuicon" /> Signup
        </button>
      </nav>
    </div>
  );
}

export default Menu;
