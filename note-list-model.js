class NoteList {
  constructor() {
    this.notes = [];
  }
  addNote(note) {
    this.notes.push(note);
  }
  displayNotes() {
    var iterator = this.notes.values();
    for (let note of iterator) {
      var output = note.read();
    }
    return output;
  };
};

note_1 = new Note("This is a note about JS");
note_2 = new Note("This is a note about how I don't like JS");
note_list = new NoteList;
note_list.addNote(note_1);
note_list.addNote(note_2);
console.log(note_list.notes)
console.log(note_list.displayNotes());

