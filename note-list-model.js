class NoteList {
  constructor() {
    this.notes = [];
  }
  addNote(text) {
    this.notes.push(new Note(text));
  }
  displayNotes() {
  //   var iterator = this.notes.values();
  //   for (let note of iterator) {
  //     var output = note.read();
  //   }
  //   return output;
  // };
  // for (var i = 0; i < this.notes.length; i++){
  //   this.notes[i].read();
  // }
    return this.notes;
}
};
note_list = new NoteList;
note_list.addNote("This is a note about JS");
note_list.addNote("This is a note about how I don't like JS");
console.log(note_list.displayNotes());

