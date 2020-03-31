function testViewNotes() {
  var list = new NoteList;
  list.addNote('12345678912345678911$$$$');
  list.addNote('This is another note');
  var noteListView = new NoteListView(list);
  assert.isTrue(noteListView.viewNotes() === "<ul><li><div><a href='#notes/0'>12345678912345678911</a></div></li><li><div><a href='#notes/1'>This is another note</a></div></li></ul>");
};

testViewNotes()