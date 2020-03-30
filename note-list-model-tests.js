function testAddsNotes() {
  var note_1 = new Note('This is a note');
  var note_2 = new Note('This is another note');
  var note_list = new NoteList;
  note_list.addNote(note_1);
  note_list.addNote(note_2);

  if (note_list.notes[0] === note_1 && note_list.notes[1] === note_2) {
    console.log("Test AddsNotes is passing");
  } else {
    throw new Error("Test AddsNotes is failing");
  }
};

testAddsNotes();

function testDisplaysNotes() {
  var note_1 = new Note('This is a note');
  // var note_2 = new Note('This is another note');
  var note_list = new NoteList;
  note_list.addNote(note_1);
  // note_list.addNote(note_2);

  if (note_list.displayNotes() === note_1.read()) {
    console.log("Test DisplaysNotes passing");
  } else {
    throw new Error("Test DisplaysNotes failing");
  }
};

testDisplaysNotes();
