(function(exports) {class NoteList {
  constructor() {
    this.notes = [];
    this.count = 0;
  }
  addNote(text) {
    var note = new Note(text);
    note.id = this.count;
    this.notes.push(note);
    this.count++;
  }
  displayNotes() {
    return this.notes;
}
};
exports.NoteList = NoteList;
})(this);
