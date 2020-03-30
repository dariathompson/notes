function testAddsNotes() {
  var note_list = new NoteList;
  note_list.addNote('This is a note');
  note_list.addNote('This is another note');

  if (note_list.notes[0].text === 'This is a note' && note_list.notes[1].text === 'This is another note') {
    console.log("Test AddsNotes is passing");
  } else {
    throw new Error("Test AddsNotes is failing");
  }
};

testAddsNotes();

function testDisplaysNotes() {
  var note_list = new NoteList;
  note_list.addNote('This is a note');
  note_list.addNote('This is another note');

  if (!note_list.displayNotes().empty) {
    console.log("Test DisplaysNotes passing");
  } else {
    throw new Error("Test DisplaysNotes failing");
  }
};

testDisplaysNotes();
