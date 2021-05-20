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

function newEntry(entry) {
  const entriesArea = document.querySelector('div[data-view="entries"]');
  const $newPhoto = entry.photoUrl;
  const $newTitle = entry.title;
  const $newNotes = entry.notes;

  const $newLi = document.createElement('li');
  $newLi.setAttribute('class', 'row');
  const $newDiv1 = document.createElement('div');
  $newDiv1.setAttribute('class', 'column-half');
  $newLi.appendChild($newDiv1);
  const $newImg = document.createElement('img');
  $newImg.setAttribute('class', 'entries-img');
  $newImg.setAttribute('src', $newPhoto);
  $newDiv1.appendChild($newImg);
  const $newDiv2 = document.createElement('div');

}
