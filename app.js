var addButton = document.getElementById('add');
var deleteButton = document.getElementById('delete');
var note = document.getElementById('note');




addButton.onclick = () => {
    var noteTitle = prompt();
    document.getElementById('noteTitle').innerText = noteTitle;
    var noteBody = prompt();
    document.getElementById('noteBody').innerText = noteBody;



};
deleteButton.onclick = () => {
    note.classList.toggle('is-hidden');
};