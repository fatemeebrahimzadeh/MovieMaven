var signupPopupToggleBtn = document.getElementById("signup-btn");
var signupPopup = document.getElementById("signup-popup");

signupPopupToggleBtn.addEventListener("click", function () {
  signupPopup.classList.remove("hidden");
  signupPopup.classList.add("flex");
});

signupPopup.addEventListener("click", function (event) {
  // TODO: it doesn't work
  event.stopPropagation();
  signupPopup.classList.remove("flex");
  signupPopup.classList.add("hidden");
});
