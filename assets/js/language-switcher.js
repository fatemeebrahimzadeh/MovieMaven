var languageToggleLtr = document.getElementById("ltr-language");
var languageToggleRtl = document.getElementById("rtl-language");

languageToggleLtr.addEventListener("click", function () {
  document.body.setAttribute("dir", "ltr");
});

languageToggleRtl.addEventListener("click", function () {
  document.body.setAttribute("dir", "rtl");
});
