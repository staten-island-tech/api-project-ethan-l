import { DOMSelectors } from "./DOM";
import { genres } from "./genre";

const topSeasonals = async function () {
  try {
    const response = await fetch(
      "https://api.jikan.moe/v3/search/anime?q=&page=1&order_by=score&sort=desc&status=airing&type=tv&limit=6"
    );
    const data = await response.json();
    //(data.results);

    const dataFirstSix = data.results.splice(0, 6);
    //console.log(dataFirstSix);

    //Ternary operator for null episodes

    dataFirstSix.forEach((anime) => {
      if (anime.episodes === 0) {
        DOMSelectors.topSeasonals.insertAdjacentHTML(
          "beforeend",
          `<div class="card" data-id="${anime.mal_id}">
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
          `<div class="card" data-id="${anime.mal_id}">
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
    //console.log(data.top);
    const dataFirstSix = data.top.splice(0, 6);
    //console.log(dataFirstSix);

    dataFirstSix.forEach((anime) => {
      if (anime.start_date === null) {
        DOMSelectors.topUpcoming.insertAdjacentHTML(
          "beforeend",
          `<div class="card" data-id="${anime.mal_id}">
                
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
          `<div class="card" data-id="${anime.mal_id}">
        
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
    //console.log(data.top);
    const dataFirstSix = data.top.splice(0, 6);
    //console.log(dataFirstSix);
    dataFirstSix.forEach((anime) => {
      DOMSelectors.topAllTime.insertAdjacentHTML(
        "beforeend",
        `<div class="card" data-id="${anime.mal_id}">
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
    //console.log(data.top);
    const dataFirstSix = data.top.splice(0, 6);
    //console.log(dataFirstSix);
    dataFirstSix.forEach((anime) => {
      DOMSelectors.popularAllTime.insertAdjacentHTML(
        "beforeend",
        `<div class="card" data-id="${anime.mal_id}">
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

//

// See top 50 openinfo and closeInfo don't work for new arrays DONE
// Upcoming anime info has different px size!!!!!!!!!!!!!!!!!!!!!!!

//ALSO if episodes = null how to get it to display "?" TERNARY OPERATOR
//marrying array movie part for GENRES

//
const openInfo = function () {
  const cards = document.getElementsByClassName("card");

  console.log(cards);
  let cardsArray = Array.from(cards);
  console.log(cardsArray);

  cardsArray.forEach((card) => {
    card.addEventListener("click", async function (e) {
      console.log(e.target.closest(".card"));
      const card = e.target.closest(".card");

      try {
        const response = await fetch(
          `https://api.jikan.moe/v3/anime/${card.dataset.id}`
          //event.target.____
        );
        const data = await response.json();
        console.log(data);
        console.log(data.studios[0].name);

        document.body.insertAdjacentHTML(
          "beforeend",
          `    <div class="info-page-background" id="info-page">
    
        <div class="card-info" id="info-card">
    
          <div class="info-left-panel" id="info-left-panel">
            <img src="${data.image_url}" alt="${data.title} Cover">
            <p class="info-episodes">Episodes: ${data.episodes}</p>
            <p class="info-status">Status: ${data.status}</p>
            <p class="info-air-date">Aired: ${data.aired.string}</p>
            <p class="info-duration">Length: ${data.duration} (${data.type})</p>
            <p class="info-rating">Rating: ${data.rating}</p>
    
            <p class="info-genre">Genres: ${data.genres[0].name}</p>
    
            <p class="info-score">Score: ${data.score}/10</p>
            <p class="info-popularity-rank">Popularity: ${data.members} (#${data.popularity})</p>
            <p class="info-rank">Rank: ${data.rank}</p>
    
            <p class="info-source">Source: ${data.source}</p>
            
            <p class="info-studios">Studio: ${data.studios[0].name}</p>
                
            <a href="${data.url}" class="info-mal-link">Link to MAL</a>
          </div>
    
          <div class="info-right-panel">
            <h2 class="info-title" id="info-title">${data.title}</h2>
            <p class="info-synopsis" id="info-synopsis">${data.synopsis}</p>
            <span class="flex-grow-1" id="flex-grow-1"></span>
    
            <div class="info-songs" id="info-songs">
              <p class="info-openings">Opening themes: ${data.opening_themes}</p>
              <p class="info-endings">Ending themes: ${data.ending_themes}</p>
            </div>
          </div>
    
          <!--related, adaptation, sequal, side story-->
    
        </div>
      </div>`
        );
        //const infoPage = document.getElementById("info-page");

        document.getElementById("info-page").style.opacity = "1";
        console.log("info opened");

        //Close
        const closeInfo = function () {
          document.addEventListener("click", (evt) => {
            const infoCard = DOMSelectors.infoCard;
            const leftPanel = DOMSelectors.leftPanel;
            const infoTitle = DOMSelectors.infoTitle;
            const infoSynopsis = DOMSelectors.infoSynopsis;
            const infoSongs = DOMSelectors.infoSongs;

            console.log(document.getElementById("info-page"));
            //const flexGrowOne = DOMSelectors.flexGrowOne;

            let targetElement = evt.target; // clicked element

            do {
              if (
                targetElement == leftPanel ||
                targetElement == infoTitle ||
                targetElement == infoSynopsis ||
                targetElement == infoSongs
              ) {
                // This is a click inside. Do nothing, just return.
                return;
              }
              // Go up the DOM
              targetElement = targetElement.parentNode;
            } while (targetElement);

            // This is a click outside.
            //infoPage.style.opacity = "0";
            //setTimeout(() => {
            document
              .getElementById("info-page")
              .parentNode.removeChild(document.getElementById("info-page"));
            //}, 100);

            console.log("Closed");
            //document.getElementById("flyout-debug").textContent = "Clicked outside!";
          });
        };
        closeInfo();
      } catch (error) {
        console.log(error);
        alert("Fetch failed for title.");
      }
    });
  });
  /*   cardsArray.forEach(function () {
    addEventListener("click", function () {
      console.log("Clicked on a card");
    });
  }); */
};
setTimeout(() => {
  const cards = document.getElementsByClassName("card");
  console.log(cards);
  const cardsArray = [...cards];

  cardsArray.forEach((card) => {
    card.addEventListener("click", openInfo);
  });
}, 500);

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
              `<div class="card" data-id="${anime.mal_id}">
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
              `<div class="card" data-id="${anime.mal_id}">
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
        openInfo();
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
              `<div class="card" data-id="${anime.mal_id}">
                        
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
              `<div class="card" data-id="${anime.mal_id}">
                
                <img class="card-img" src="${anime.image_url}" alt="">
                <div class="card-text">
                  <p class="card-title">${anime.title}</p>
                  <p class="card-episodes">${anime.start_date}</p>
                </div>
              </div>`
            );
          }
        });
        openInfo();
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
            `<div class="card" data-id="${anime.mal_id}">
                  <p class="card-rating">${anime.score}/10</p>
                  <img class="card-img" src="${anime.image_url}" alt="">
                  <div class="card-text">
                    <p class="card-title">${anime.title}</p>
                    <p class="card-episodes">${anime.episodes} episodes</p>
                  </div>
                </div>`
          );
        });
        openInfo();
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
            `<div class="card" data-id="${anime.mal_id}">
                  <p class="card-rating">${anime.score}/10</p>
                  <img class="card-img" src="${anime.image_url}" alt="">
                  <div class="card-text">
                    <p class="card-title">${anime.title}</p>
                    <p class="card-episodes">${anime.episodes} episodes</p>
                  </div>
                </div>`
          );
        });
        openInfo();
      } catch (error) {
        console.log(error);
        alert("Fetch failed for highest rated.");
      }
    };
    mostPopular();
  });
};
seeAllMostPopular();
