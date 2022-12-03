// const container = document.querySelector(".container");
// const body = document.querySelector("body");
// const footer = document.querySelector("footer");

//   ||TO DO
// get elements height with javascript
//
//learn and use unsplash images api for the background image
//
//
// find out how the glow effect works with box shadow
//
//create a function that listens for the time between requests and alert the user if the request is too soon
//
// add animation to how texts load in

"use strict";

// const footerHeight = window.getComputedStyle(
//   document.getElementsByTagName("footer")[0]
// ).height;
// const bodyHeight = window.getComputedStyle(
//   document.getElementsByTagName("body")[0]
// ).height;
// const mainContainer = document.getElementsByClassName("container")[0];

// mainContainer.style.height = bodyHeight - footerHeight;

window.addEventListener("DOMContentLoaded", loadAdvice);
window.addEventListener("DOMContentLoaded", selectDividerImage);
window.addEventListener("resize", selectDividerImage);

function selectDividerImage() {
  const dividerImg = document.getElementById("dividerImg");
  if (matchMedia("(min-width : 769px)").matches) {
    dividerImg.src = "./images/pattern-divider-desktop.svg";
  } else {
    dividerImg.src = "./images/pattern-divider-mobile.svg";
    console.log("i ran the small screen code");
  }
  // if (matchMedia("(max-width : 768px)").matches) {
  //   dividerImg.src = "./images/pattern-divider-mobile.svg";
  //   console.log("i ran this block of code");
  // }
}

document.getElementById("loadAdvice").addEventListener("click", loadAdvice);

function loadAdvice() {
  const xhr = new XMLHttpRequest();
  console.log(xhr);

  xhr.open("GET", "https://api.adviceslip.com/advice", true);

  xhr.onload = function () {
    if (this.status == 200) {
      let slip = JSON.parse(this.responseText);

      console.log(Object.keys(slip));
      console.log(slip);
      console.log(slip.slip.id);

      document.getElementById("adviceId").innerText = slip.slip.id;
      document.getElementById("adviceText").innerText = slip.slip.advice;
    }
  };
  xhr.onerror = function () {
    const slip = "Error while trying to fetch advice slip";

    document.getElementById("adviceId").innerText = "??";
    document.getElementById("adviceText").innerText = slip;
  };
  xhr.send();
}

//   ||lessons learnt
//
// arrow functions by nature scope to the parents thus if an arrow function were to be used with the onload function 'this' should be replaced with request
// Object.keys(obj) = to  know the keys in an object
