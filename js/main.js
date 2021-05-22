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
const $newEntryButton = document.querySelector('.new-entry-button');
const $submitButton = document.querySelector('#save');
const $entriesLink = document.querySelector('#entries-link');

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
  const entriesArea = document.querySelector('.entries-list');
  const $newPhoto = entry.photoUrl;
  const $newTitle = entry.title;
  const $newNotes = entry.notes;

  const $newLi = document.createElement('li');
  $newLi.setAttribute('class', 'row entry-item');
  $newLi.setAttribute('data-entry-id', entry.entryId);
  const $newDiv1 = document.createElement('div');
  $newDiv1.setAttribute('class', 'column-half');
  $newLi.appendChild($newDiv1);
  const $newImg = document.createElement('img');
  $newImg.setAttribute('class', 'entries-img');
  $newImg.setAttribute('src', $newPhoto);
  $newImg.setAttribute('alt', 'User Submitted Image');
  $newDiv1.appendChild($newImg);
  const $newDiv2 = document.createElement('div');
  $newDiv2.setAttribute('class', 'column-half entries-text-area');
  $newLi.appendChild($newDiv2);
  const $newH3 = document.createElement('h3');
  $newH3.textContent = $newTitle;
  $newDiv2.appendChild($newH3);
  const $editIcon = document.createElement('i');
  $editIcon.setAttribute('class', 'fa fa-edit');
  $newDiv2.appendChild($editIcon);
  const $newP = document.createElement('p');
  $newP.setAttribute('class', 'entries-text');
  $newP.textContent = $newNotes;
  $newDiv2.appendChild($newP);

  entriesArea.appendChild($newLi);
}

function viewChecker(view) {
  if (view === 'entry-form') {
    const $entryForm = document.querySelector('div[data-view="entry-form"]');
    const $entriesArea = document.querySelector('#entries');

    $entriesArea.setAttribute('class', 'hidden');
    $entryForm.setAttribute('class', '');
    if (data.editing !== null) {
      $urlField.value = data.entries[data.editing].photoUrl;
      $titleField.value = data.entries[data.editing].title;
      $notesField.value = data.entries[data.editing].notes;
    }
  } else if (view === 'entries-view') {
    const $entryForm = document.querySelector('div[data-view="entry-form"]');
    const $entriesArea = document.querySelector('#entries');

    $entriesArea.setAttribute('class', '');
    $entryForm.setAttribute('class', 'hidden');

    data.view = 'entries-view';
  }
}

document.addEventListener('DOMContentLoaded', function (event) {
  if (data.entries.length > 0) {
    for (let i = 0; i < data.entries.length; i++) {
      newEntry(data.entries[i]);
    }
  } else {
    const entriesArea = document.querySelector('.entries-list');
    const $emptyListText = document.createElement('p');
    $emptyListText.textContent = 'No entries have been recorded.';
    entriesArea.appendChild($emptyListText);
  }
});

$newEntryButton.addEventListener('click', function (event) {
  data.view = 'entry-form';
});

$submitButton.addEventListener('click', function (event) {
  data.view = 'entries-view';
  data.editing = null;
});

$entriesLink.addEventListener('click', function (event) {
  data.view = 'entries-view';
  data.editing = null;
});

document.addEventListener('DOMContentLoaded', function (event) {
  viewChecker(data.view);
});

const $entriesList = document.querySelector('.entries-list');

$entriesList.addEventListener('click', function (event) {
  if (event.target.getAttribute('class') === 'fa fa-edit') {
    const targetId = event.target.closest('li').getAttribute('data-entry-id');
    data.editing = targetId;
    data.view = 'entry-form';
    viewChecker(data.view);
  }
});
