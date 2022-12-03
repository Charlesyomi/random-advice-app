import { getJSON } from "./fetch.JS";

document.getElementById("loadAdvice").addEventListener("click", loadResources);

function loadResources() {
  const unsplashRequestHeaders = {
    "Accept-Version": "v1",
    Authorization: "Client-ID AY3EARQmo1loVOaLd7r2qYxerMtw5bUZDOXPlNs11-M",
  };

  const getResources = Promise.all([
    getJSON(
      "https://api.unsplash.com/photos/random?topics=motivation",
      unsplashRequestHeaders
    ),
    getJSON("https://api.adviceslip.com/advice"),
  ]);

  getResources.then((resources) => {
    console.log(resources);
    document.getElementById("adviceId").innerText = resources[1].slip.id;
    document.getElementById("adviceText").innerText = resources[1].slip.advice;

    document.body.style.backgroundImage = `url('${resources[0].urls.regular}')`;

    // &w=480&dpr=2
  });
}
