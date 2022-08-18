import React from "react";
import logo from "../../imgs/logo.png";

const Banner = (props) => {
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part">A place to get </span>
          <span className="search-box-container">
            <input
              id="search-box"
              placeholder="What is it that you truly desire?"
              value={props.term}
              onChange={(e) => props.onChange(e.target.value)}
            />
            <img src="search_icon.svg" />
          </span>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
