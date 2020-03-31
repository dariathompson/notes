function testStoresText() {
  var note = new Note('This is a note');
  assert.isTrue(note.text === 'This is a note');
};

testStoresText();

function testReadsNote() {
  var note = new Note('This is a new note');
  assert.isTrue(note.read() === 'This is a new note');
};

testReadsNote();