import { getJSON } from "./fetch.js";

function getAdvice() {
  return getJSON("https://api.adviceslip.com/advice");
}
