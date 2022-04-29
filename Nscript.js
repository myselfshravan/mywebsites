(function () {}.call(this));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIiXX0=
//# sourceURL=coffeescript

var btn = $("button1");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

let button = document.querySelector(".button-3");

button.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-mode");
});

function change1() {
  // no ';' here
  var elem = document.getElementById("button-3");
  if (elem.value == "Dark mode") elem.value = "Light mode";
  else elem.value = "Dark mode";
}

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 1000,
  reset: true,
});

sr.reveal(".container", { delay: 50 });
sr.reveal(".btn", { distance: "20px", delay: 50, interval: 90 });
sr.reveal(".btnh", { distance: "20px", delay: 50, interval: 90 });
