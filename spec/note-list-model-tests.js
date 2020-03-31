(function(exports) {
  function testAddsNotes() {
  var note_list = new NoteList;
  note_list.addNote('This is a note');
  note_list.addNote('This is another note');
  assert.isTrue(note_list.notes[0].text === 'This is a note' && note_list.notes[1].text === 'This is another note');
};

testAddsNotes();
})(this);

(function(exports) {
  function testDisplaysNotes() {
  var note_list = new NoteList;
  note_list.addNote('This is a note');
  note_list.addNote('This is another note');
  assert.isTrue(!note_list.displayNotes().empty);
};

testDisplaysNotes();
})(this);
