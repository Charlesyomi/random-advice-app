import { getJSON } from "./fetch";

// make the call to the unsplash API

const unsplashRequestHeaders: Record<string, string> = {
  "Accept-Version": "v1",
  Authorization: "Client-ID //my_access_key",
};

getJSON(
  "https://api.unsplash.com/photos/random?topics=motivation",
  unsplashRequestHeaders
);
