"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fetch_1 = require("./fetch");
// make the call to the unsplash API
const unsplashRequestHeaders = {
    "Accept-Version": "v1",
    Authorization: "Client-ID //my_access_key",
};
(0, fetch_1.getJSON)("https://api.unsplash.com/photos/random?topics=motivation", unsplashRequestHeaders);
