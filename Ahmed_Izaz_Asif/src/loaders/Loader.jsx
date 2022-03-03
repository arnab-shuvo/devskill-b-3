import React from "react";
import "./loaderStyles.scss";
function Loader() {
  return (
    <div className="loader">
      <div class="LoaderBalls">
        <div class="LoaderBalls__item"></div>
        <div class="LoaderBalls__item"></div>
        <div class="LoaderBalls__item"></div>
      </div>
    </div>
  );
}

export default Loader;
