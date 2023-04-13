import React from "react";
import Iphone from "../assets/images/iphone-14.jpg";
import HoldingIphone from "../assets/images/iphone-hand.png";

export default function jumbotron() {

  const handleLearnMore = () => {
    const element = document.querySelector('.sound-section')
    window.scrollTo({
      top: element?.getBoundingClientRect().top,
      left: 0,
      behavior:'smooth'
    })
  }
  return (
    <div className="jumbotron-section wrapper">
      <h1 className="title">New</h1>
      <img className="logo" src={Iphone} alt="Iphone 14 pro" />
      <p className="text">Big and bigger</p>
      <span className="description">
        from $41.62/mo for 24 mo. or $999 before trade-in
      </span>
      <ul className="links">
        <li>
          <button className="button">Buy</button>
        </li>
        <li>
          <a onClick={handleLearnMore} className="link">Learn More</a>
        </li>
      </ul>
      <img src={HoldingIphone} className="iphone-img" alt="iphone hand image" />
    </div>
  );
}
