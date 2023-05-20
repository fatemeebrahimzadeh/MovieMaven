var navToggleBtn = document.getElementById("navbar-toggler");
navToggleBtn.addEventListener("click", function () {
  var dropDownList = document.getElementById("navbar-dropdown");
  dropDownList.classList.toggle("hidden");
});
