(function(exports) {class NoteList {
  constructor() {
    this.notes = [];
  }
  addNote(text) {
    var note = new Note(text);
    note.id = this.notes.length;
    this.notes.push(note);
  }
  displayNotes() {
    return this.notes;
}
};
exports.NoteList = NoteList;
})(this);
