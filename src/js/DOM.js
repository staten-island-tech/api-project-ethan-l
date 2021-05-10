const DOMSelectors = {
  //grid: document.querySelector(".movie-grid"),
  // MINE
  //backgroundImg: document.querySelector(".page-background"),
  topSeasonals: document.querySelector(".top-seasonals"),
  topUpcoming: document.querySelector(".upcoming"),
  topAllTime: document.querySelector(".top-all-time"),
  popularAllTime: document.querySelector(".popular-all-time"),
  episodes: document.querySelector(".card-episodes"),

  seeAll: document.querySelectorAll(".see-all"),
  seeAllTopSeasonals: document.getElementById("see-all-top-seasonals"),
  seeAllTopUpcoming: document.getElementById("see-all-top-upcoming"),
  seeAllHighestRated: document.getElementById("see-all-highest-rated"),
  seeAllMostPopular: document.getElementById("see-all-most-popular"),

  infoPage: document.getElementById("info-page"),
  infoCard: document.getElementById("info-card"),
  leftPanel: document.getElementById("info-left-panel"),
  infoTitle: document.getElementById("info-title"),
  infoSynopsis: document.getElementById("info-synopsis"),
  infoSongs: document.getElementById("info-songs"),
  flexGrowOne: document.getElementById("flex-grow-1"),

  cards: document.getElementsByClassName("card"),
};

export { DOMSelectors };
