import { DOMSelectors } from "./DOM";
import { genres } from "./genre";

const topSeasonals = async function () {
  try {
    const response = await fetch("https://api.jikan.moe/v3/top/anime/1/airing");
    const data = await response.json();
    console.log(data.top);
    const dataFirstSix = data.top.splice(0, 6);
    console.log(dataFirstSix);
    dataFirstSix.forEach((anime) => {
      DOMSelectors.topSeasonals.insertAdjacentHTML(
        "beforeend",
        `<div class="card">
      <p class="card-rating">${anime.score}/10</p>
      <img class="card-img" src="${anime.image_url}" alt="">
      <div class="card-text">
        <p class="card-title">${anime.title}</p>
        <p class="card-episodes">${anime.episodes} episodes</p>
      </div>
    </div>`
      );
    });
  } catch (error) {
    console.log(error);
    alert("Something went wrong.");
  }
};
topSeasonals();

const topUpcoming = async function () {
  try {
    const response = await fetch(
      "https://api.jikan.moe/v3/top/anime/1/upcoming"
    );
    const data = await response.json();
    console.log(data.top);
    const dataFirstSix = data.top.splice(0, 6);
    console.log(dataFirstSix);
    dataFirstSix.forEach((anime) => {
      DOMSelectors.topUpcoming.insertAdjacentHTML(
        "beforeend",
        `<div class="card">
        
        <img class="card-img" src="${anime.image_url}" alt="">
        <div class="card-text">
          <p class="card-title">${anime.title}</p>
          <p class="card-episodes">${anime.start_date}</p>
        </div>
      </div>`
      );
    });
  } catch (error) {
    console.log(error);
    alert("Something went wrong.");
  }
};
topUpcoming();

const topAllTime = async function () {
  try {
    const response = await fetch("https://api.jikan.moe/v3/top/anime/1");
    const data = await response.json();
    console.log(data.top);
    const dataFirstSix = data.top.splice(0, 6);
    console.log(dataFirstSix);
    dataFirstSix.forEach((anime) => {
      DOMSelectors.topAllTime.insertAdjacentHTML(
        "beforeend",
        `<div class="card">
          <p class="card-rating">${anime.score}/10</p>
          <img class="card-img" src="${anime.image_url}" alt="">
          <div class="card-text">
            <p class="card-title">${anime.title}</p>
            <p class="card-episodes">${anime.episodes} episodes</p>
          </div>
        </div>`
      );
    });
  } catch (error) {
    console.log(error);
    alert("Something went wrong.");
  }
};
topAllTime();

const popularAllTime = async function () {
  try {
    const response = await fetch(
      "https://api.jikan.moe/v3/top/anime/1/bypopularity"
    );
    const data = await response.json();
    console.log(data.top);
    const dataFirstSix = data.top.splice(0, 6);
    console.log(dataFirstSix);
    dataFirstSix.forEach((anime) => {
      DOMSelectors.popularAllTime.insertAdjacentHTML(
        "beforeend",
        `<div class="card">
          <p class="card-rating">${anime.score}/10</p>
          <img class="card-img" src="${anime.image_url}" alt="">
          <div class="card-text">
            <p class="card-title">${anime.title}</p>
            <p class="card-episodes">${anime.episodes} episodes</p>
          </div>
        </div>`
      );
    });
  } catch (error) {
    console.log(error);
    alert("Something went wrong.");
  }
};
popularAllTime();
