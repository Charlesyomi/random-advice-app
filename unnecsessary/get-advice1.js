"use strict";

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
}

document.getElementById("loadAdvice").addEventListener("click", loadAdvice);

function getAdvice() {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.adviceslip.com/advice", true);
    xhr.onload = function () {
      try {
        if (this.status >= 200 && xhr.status < 300) {
          resolve(JSON.parse(this.responseText));
        } else {
          // in case we don't get a 200
          reject({ status: this.status, statusText: this.statusText });
        }
      } catch (e) {
        // even if the status is 200 we may still get bad unparseable data
        reject(e.message);
      }
    };
    xhr.onerror = function () {
      // a connection error
      reject({ status: this.status, statusText: this.statusText });
    };
    xhr.send();
  });
}
getAdvice()
  .then((value) => {
    const domIDTarget = document.getElementById("adviceId");
    domIDTarget.textContent = value.slip.id;
    const domAdviceTarget = document.getElementById("adviceText");
    domAdviceTarget.textContent = value.slip.advice;
  })
  .catch((e) => {
    const domIDTarget = document.getElementById("adviceId");
    domIDTarget.textContent = e.status;
    const domAdviceTarget = document.getElementById("adviceText");
    domAdviceTarget.textContent = e.statusText;
  });
