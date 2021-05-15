/* global data */
/* exported data */

const $photo = document.querySelector('.placeholder-img');
const $urlField = document.querySelector('#photo-url');
const $titleField = document.querySelector('#title');
const $notesField = document.querySelector('#notes');
const $form = document.querySelector('.entry');
const newEntryObj = {
  entryId: 0,
  title: '',
  photoUrl: '',
  notes: ''
};

$urlField.addEventListener('input', function (event) {
  $photo.setAttribute('src', $urlField.value);
  $photo.setAttribute('alt', 'User Submitted Photo');
});

document.addEventListener('submit', function (event) {
  newEntryObj.entryId = data.nextEntryId;
  data.nextEntryId++;
  newEntryObj.title = $titleField.value;
  newEntryObj.photoUrl = $urlField.value;
  newEntryObj.notes = $notesField.value;

  data.entries.unshift(newEntryObj);

  $photo.setAttribute('src', 'images/placeholder-image-square.jpg');
  $photo.setAttribute('alt', 'placeholder-image-square');

  $form.reset();
});
