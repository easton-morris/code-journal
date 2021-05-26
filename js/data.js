/* exported data */

var data = {
  view: 'entries-view',
  entries: [],
  editing: null,
  nextEntryId: 1
};

const previousDataJSON = localStorage.getItem('localData');
if (previousDataJSON !== null) {
  data = JSON.parse(previousDataJSON);
}

window.addEventListener('beforeunload', function (event) {
  const dataJSON = JSON.stringify(data);
  localStorage.setItem('localData', dataJSON);
});
