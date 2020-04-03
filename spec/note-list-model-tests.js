function testAddsNotes() {
  var list = new NoteList;
  list.addNote('This is a note');
  list.addNote('This is another note');
  assert.isTrue(list.notes[0].text === 'This is a note' && list.notes[1].text === 'This is another note');
};

testAddsNotes();

describe('NoteList', () => {
  describe('.displayNotes()', () => {
    let list = new NoteList;
    list.addNote('This is a note');
    list.addNote('This is another note');
    console.log(list.displayNotes())
    expect(list.displayNotes().length).toEq(2); 
  })
})

  function testNoteId() {
   var list = new NoteList;
   list.addNote("test note");
   assert.isTrue(list.notes[0].id === 0);

  }
testNoteId();

