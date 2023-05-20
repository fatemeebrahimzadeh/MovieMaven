var navToggleBtn = document.getElementById("navbar-toggler");
var dropDownList = document.getElementById("navbar-dropdown");

navToggleBtn.addEventListener("click", function () {
  dropDownList.classList.toggle("hidden");
});
