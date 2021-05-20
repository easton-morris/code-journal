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
  const entriesArea = document.querySelector('ul');
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
  $newImg.setAttribute('alt', 'User Submitted Image');
  $newDiv1.appendChild($newImg);
  const $newDiv2 = document.createElement('div');
  $newDiv2.setAttribute('class', 'column-half');
  $newLi.appendChild($newDiv2);
  const $newH3 = document.createElement('h3');
  $newH3.textContent = $newTitle;
  $newDiv2.appendChild($newH3);
  const $newP = document.createElement('p');
  $newP.setAttribute('class', 'entries-text');
  $newP.textContent = $newNotes;
  $newDiv2.appendChild($newP);

  entriesArea.appendChild($newLi);
}

for (let i = 0; i < data.entries.length; i++) {
  newEntry(data.entries[i]);
}
