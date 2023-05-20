var movieListBtn = document.getElementById("movie-list-btn");
var movieGridBtn = document.getElementById("movie-grid-btn");

var movieList = document.getElementById("movie-list");
var movieGrid = document.getElementById("movie-grid");

movieListBtn.addEventListener("click", function () {
  console.log("hello");
  movieGrid.classList.remove("grid");
  movieGrid.classList.add("hidden");
  movieList.classList.remove("hidden");
});

movieGridBtn.addEventListener("click", function (event) {
  movieList.classList.add("hidden");
  movieGrid.classList.remove("hidden");
  movieGrid.classList.add("grid");
});
