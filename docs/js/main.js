"use strict";

HTMLElement.prototype.scrollTo = function (y) {
  var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  this.scrollTop = y;
  this.scrollLeft = x;
};

document.querySelector(".nlp-scrim").addEventListener("scroll", function (e) {
  var targ = e.target;

  if (targ.scrollTop == 0) {
    CloseDrawer();
  }
});

function OpenDrawer() {
  var drawer = document.querySelector(".nlp-paned__left");
  var scrim = document.querySelector(".nlp-scrim");
  scrim.appendChild(drawer);
  drawer.classList.add("nlp-paned__left--open");
  scrim.classList.add("nlp-scrim--open");
  scrim.scrollTo(scrim.scrollHeight, 0);
}

function CloseDrawer() {
  var drawer = document.querySelector(".nlp-paned__left");
  drawer.classList.remove("nlp-paned__left--open");
  var scrim = document.querySelector(".nlp-scrim");
  scrim.classList.remove("nlp-scrim--open");
  document.querySelector(".nlp-paned").prepend(drawer);
}

