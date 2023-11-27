var tabsElement = document.getElementsByClassName("tab");
var buttons = document.querySelectorAll("button");


function fadeIn(element, duration) {
  var opacity = 0;
  var interval = 50;

  var fadeInInterval = setInterval(function () {
    opacity += interval / duration;
    element.style.opacity = opacity;

    if (opacity >= 1) {
      clearInterval(fadeInInterval);
    }
  }, interval);
}


for (var tab of tabsElement) {
  tab.style.display = "none";
}


setTimeout(function () {
  var h1Element = document.querySelector("h1");
  var introElement = document.getElementById("intro");

  h1Element.style.opacity = 0;
  introElement.style.opacity = 0;

  fadeIn(h1Element, 1000);
  fadeIn(introElement, 1000);
}, 1000);


function changeTab(id, event) {
  for (var tab of tabsElement) {
    tab.style.display = "none";
  }
  document.getElementById(id).style.display = "block";

  for (var button of buttons) {
    button.classList.remove("active");
  }
  event.currentTarget.classList.add("active");
}
