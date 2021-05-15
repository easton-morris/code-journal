/* global data */
/* exported data */

var $photo = document.querySelector('.placeholder-img');
var $urlField = document.querySelector('#photo-url');

document.addEventListener('submit', function (event) {
  event.preventDefault();
});

document.addEventListener('input', function (event) {
  $photo.setAttribute('src', $urlField.value);
});
