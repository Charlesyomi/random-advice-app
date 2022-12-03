import { getJSON } from "./test_fetch.js";

// make the call to the unsplash API

const unsplashRequestHeaders = {
  "Accept-Version": "v1",
  Authorization: "Client-ID AY3EARQmo1loVOaLd7r2qYxerMtw5bUZDOXPlNs11-M",
};

document.getElementById("test-btn").addEventListener("click", () => {
  getJSON(
    "https://api.unsplash.com/photos/random?topics=motivation",
    unsplashRequestHeaders
  )
    .then((value) => {
      console.log(value);
      document
        .getElementById("test-img")
        .setAttribute("src", `${value.urls.raw}&w=480&dpr=2`);
      document
        .getElementById("test-img")
        .setAttribute("alt", value.alt_description);
    })
    .catch((error) => console.error(error));
});
