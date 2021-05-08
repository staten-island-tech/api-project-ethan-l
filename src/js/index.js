import { DOMSelectors } from "./DOM";
import { genres } from "./genre";

const topSeasonals = async function () {
  try {
    const response = await fetch(
      "https://api.jikan.moe/v3/search/anime?q=&page=1&order_by=score&sort=desc&status=airing&type=tv&limit=6"
    );
    const data = await response.json();
    console.log(data.results);

    const dataFirstSix = data.results.splice(0, 6);
    console.log(dataFirstSix);

    dataFirstSix.forEach((anime) => {
      if (anime.episodes === 0) {
        DOMSelectors.topSeasonals.insertAdjacentHTML(
          "beforeend",
          `<div class="card">
          <p class="card-rating">${anime.score}/10</p>
          <img class="card-img" src="${anime.image_url}" alt="">
          <div class="card-text">
            <p class="card-title">${anime.title}</p>
            <p class="card-episodes">? episodes</p>
          </div>
        </div>`
        );
      } else {
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
      }
    });
  } catch (error) {
    console.log(error);
    alert("Fetch failed for top seasonals.");
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
      if (anime.start_date === null) {
        DOMSelectors.topUpcoming.insertAdjacentHTML(
          "beforeend",
          `<div class="card">
                
                <img class="card-img" src="${anime.image_url}" alt="">
                <div class="card-text">
                  <p class="card-title">${anime.title}</p>
                  <p class="card-episodes">Date not yet announced</p>
                </div>
              </div>`
        );
      } else {
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
      }
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

const seeAllTopSeasonals = function () {
  DOMSelectors.seeAllTopSeasonals.addEventListener("click", function () {
    const topSeasonals = async function () {
      try {
        const response = await fetch(
          "https://api.jikan.moe/v3/search/anime?q=&page=1&order_by=score&sort=desc&status=airing&type=tv"
        );
        const data = await response.json();
        console.log(data.results);

        DOMSelectors.seeAllTopSeasonals.innerHTML = "";
        DOMSelectors.topSeasonals.innerHTML = "";

        data.results.forEach((anime) => {
          if (anime.episodes === 0) {
            DOMSelectors.topSeasonals.insertAdjacentHTML(
              "beforeend",
              `<div class="card">
                <p class="card-rating">${anime.score}/10</p>
                <img class="card-img" src="${anime.image_url}" alt="">
                <div class="card-text">
                  <p class="card-title">${anime.title}</p>
                  <p class="card-episodes">? episodes</p>
                </div>
              </div>`
            );
          } else {
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
          }
        });
      } catch (error) {
        console.log(error);
        alert("Fetch failed for top seasonals.");
      }
    };
    topSeasonals();
  });
};
seeAllTopSeasonals();

const seeAllTopUpcoming = function () {
  DOMSelectors.seeAllTopUpcoming.addEventListener("click", function () {
    const topUpcoming = async function () {
      try {
        const response = await fetch(
          "https://api.jikan.moe/v3/top/anime/1/upcoming"
        );
        const data = await response.json();
        console.log(data.top);

        DOMSelectors.seeAllTopUpcoming.innerHTML = "";
        DOMSelectors.topUpcoming.innerHTML = "";

        data.top.forEach((anime) => {
          if (anime.start_date === null) {
            DOMSelectors.topUpcoming.insertAdjacentHTML(
              "beforeend",
              `<div class="card">
                        
                        <img class="card-img" src="${anime.image_url}" alt="">
                        <div class="card-text">
                          <p class="card-title">${anime.title}</p>
                          <p class="card-episodes">Date not yet announced</p>
                        </div>
                      </div>`
            );
          } else {
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
          }
        });
      } catch (error) {
        console.log(error);
        alert("Fetch failed for top upcoming.");
      }
    };
    topUpcoming();
  });
};
seeAllTopUpcoming();

const seeAllHighestRated = function () {
  DOMSelectors.seeAllHighestRated.addEventListener("click", function () {
    const highestRated = async function () {
      try {
        const response = await fetch("https://api.jikan.moe/v3/top/anime/1");
        const data = await response.json();
        console.log(data.top);

        DOMSelectors.seeAllHighestRated.innerHTML = "";
        DOMSelectors.topAllTime.innerHTML = "";

        data.top.forEach((anime) => {
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
        alert("Fetch failed for highest rated.");
      }
    };
    highestRated();
  });
};
seeAllHighestRated();

const seeAllMostPopular = function () {
  DOMSelectors.seeAllMostPopular.addEventListener("click", function () {
    const mostPopular = async function () {
      try {
        const response = await fetch(
          "https://api.jikan.moe/v3/top/anime/1/bypopularity"
        );
        const data = await response.json();
        console.log(data.top);

        DOMSelectors.seeAllMostPopular.innerHTML = "";
        DOMSelectors.popularAllTime.innerHTML = "";

        data.top.forEach((anime) => {
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
        alert("Fetch failed for highest rated.");
      }
    };
    mostPopular();
  });
};
seeAllMostPopular();

//Do the same for each section
//One single info page generic for each anime

//jikan data is different from mal data?
