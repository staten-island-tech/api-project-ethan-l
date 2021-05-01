import { DOMSelectors } from "./DOM";
console.log("Connected");

//Random background
const imagesStyle = [
  "url('/img/backgrounds/ganyu.jpg');",
  "url('/img/backgrounds/aetherpaimonfischlmona.jpg');",
  "url('/img/backgrounds/originalbackground.jpg');",
  "url('/img/backgrounds/venti.jpg');",
];

const pickBackgroundImage = function () {
  const randomNumberBgImage = Math.floor(Math.random() * imagesStyle.length);
  const bgImageStyle = imagesStyle[randomNumberBgImage];

  const bgImageElement = DOMSelectors.backgroundImg;
  console.log(bgImageElement);

  document.addEventListener("DOMContentLoaded", function () {
    bgImageElement.style.backgroundImage = "url('/img/backgrounds/ganyu.jpg');";
    console.log("done");
  });
};
pickBackgroundImage();

export { pickBackgroundImage };
