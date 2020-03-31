function testViewNotes() {
  var note_list = new NoteList;
  note_list.addNote('This is a note');
  note_list.addNote('This is another note');
  var note_list_view = new NoteListView(note_list);
  assert.isTrue(note_list_view.viewNotes() === "<ul><li><div>This is a note</div></li><li><div>This is another note</div></li></ul>");
};

testViewNotes()