function testStoresText() {
  var note = new Note('This is a note');

  if (note.text !== 'This is a note') {
    throw new Error("Text is not stored");
  }
  if (note.text === 'This is a note') {
    console.log("Test is passing");
  }
};

testStoresText();

function testReadsNote() {
  var note = new Note('This is a new note');
if (note.read() === 'This is a new note'){
  console.log("Test 2 is passing");
}else{
  throw new Error("Cannot read note");
}
};

testReadsNote();