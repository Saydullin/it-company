"use strict";

document.addEventListener('click', function (e) {
  if (e.target.dataset.target) {
    e.preventDefault();
    var id = e.target.dataset.target;
    var el = document.querySelector("#".concat(id));
    window.scroll(0, el.offsetTop - 60);
  }
});

function testWebP(callback) {
  var webP = new Image();

  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };

  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});
$(document).ready(function () {
  svg4everybody({});
}); // for webP