(function(exports) {class NoteList {
  constructor() {
    this.notes = [];
  }
  addNote(text) {
    this.notes.push(new Note(text));
  }
  displayNotes() {
    return this.notes;
}
};
exports.NoteList = NoteList;
})(this);
